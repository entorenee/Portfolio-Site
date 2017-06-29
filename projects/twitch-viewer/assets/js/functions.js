/* Update initialUsers array with all Twitch usernames you want included in the JSON and web app by default.
 * Users must be string variables. The app will display users which do not have an account or whose account
 * is no longer available. When this happens the information about the account status will be displayed in
 * the "game" section of the display. The app utilizes localStorage to allow the end user to customize which
 * users they want to follow and remove others from the initial defaults.
*/
var initialUsers = ["ESL_SC2", "brunofin", "comster404", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "syndicate", "summit1g", "sodapoppin", "boxbox", "Voyboy"];
var twitchUsers = [];
var usersObj = {};

$(document).ready(function() {
  initializeStorage();
  toggleUsers();
  intervalUpdate();
  userAddField();
});

/* Free Code Camp Twitch API pass-through to not utilize/publish API key
 * Use base url: https://wind-bow.gomix.me/twitch-api in API calls
 * Server only accepts GET requests and only routes /users/:user, /channels/:channel, and /streams/:stream
*/

function initializeStorage() {
  if(localStorage.hasOwnProperty('users')) {
    twitchUsers = JSON.parse(localStorage.getItem('users'));
    for (var i = 0; i < twitchUsers.length; i++) {
      populateObj(twitchUsers[i]);
    }
  } else {
    localStorage.setItem('users', JSON.stringify(initialUsers));
    twitchUsers = JSON.parse(localStorage.getItem('users'));
    for (var i = 0; i < twitchUsers.length; i++) {
      populateObj(twitchUsers[i]);
    }
  }
}

function addUser(user) {
  var regex = /[\s,]+/;
  var userArr = [];
  user = user.trim();
  if (regex.test(user)) {
    userArr = user.split(regex);
    for (var i=0; i < userArr.length; i++) {
      twitchUsers.push(userArr[i]);
      populateObj(userArr[i]);
    }
    localStorage.setItem('users', JSON.stringify(twitchUsers));
  } else {
    twitchUsers.push(user);
    localStorage.setItem('users', JSON.stringify(twitchUsers));
    populateObj(user);
  }
}

function removeUser(user) {
  var index = twitchUsers.indexOf(user);
  if (index >=0) {
    twitchUsers.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(twitchUsers));
    $('#' + user).fadeOut(800, function() {$(this).remove();});
  }
}

function populateObj(user) {
  let userPromise = new Promise(function(resolve, reject) {
    $.get("http://wind-bow.glitch.me/twitch-api/streams/" + user, function(data) {
      usersObj[user] = {};
      usersObj[user].username = user;
      if (data.stream == null) {
        usersObj[user].online = "offline";
        usersObj[user].game = "Offline";
      } else if (data.stream.hasOwnProperty("_id")) { //Tests if the user is streaming
        usersObj[user].online = "online";
        usersObj[user].game = data.stream.game;
      }
      $.get("http://wind-bow.glitch.me/twitch-api/users/" + user, function(data) {
        usersObj[user].logo = data.logo;
        if (data.hasOwnProperty("status")) {
          /* Checks if account does not exist or is "unavailable" and stores infornation into game
          property. User will dispaly as being offline and the text stating the account does not exist
          or us unavailable will display under the user name where game information is displayed. */
          switch (data.status) {
            case 422:
              usersObj[user].game = "Account is unavailable"
              break;
            case 404:
              usersObj[user].game = "Account does not exist"
              break;
          }
        }
        if (Object.keys(usersObj[user]).length = 4) {
          resolve(usersObj[user]);
        }
      }); // End second API call
    }); // End first API call
  }); // End promise
  userPromise.then(function(userData) {
    // Promise resolves that all fields are populated for a user and then adds HTML elements to display data.
    displayUsers(userData)
  });
}

function displayUsers(user) { // Populates interface with the data stored for each user when API calls populate values
  let logo = logoVerify(user.logo);
  let online = onlineStatus(user.online);
  let link = accountLink(user.game, user.username);
  $('.twitch-viewer').append('<div id="' + user.username + '" class="twitch-user ' + user.online + '">\
    <div class="remove-user-btn">X</div>\
    <div class="twitch-avatar-container">\
      ' + logo + '\
      </div>\
    <div>\
      <p class="twitch-username">' + user.username + '</p>\
      <p class="twitch-game">' + user.game + '</p>\
    </div>\
    <div class="icons">\
       ' + online + '\
      ' + link + '\
    </div>\
  </div>');
  // This code enables the remove user "x" icon and functionality to remove a user.
  $('#' + user.username).hover(
    function() {
      $(this).children('.remove-user-btn').css('display', 'flex').hide().fadeIn(600);
    },
    function() {
      $(this).children('.remove-user-btn').fadeOut(600);
    }
  );
  $('#' + user.username).children('.remove-user-btn').on('click', function(e) {
    e.preventDefault();
    removeUser(user.username);
  });
}

function logoVerify(logoValue) {  // Verifies that logo does not contain null or undefined and returns HTML to populate twitch-user
  var image = "";
  if (logoValue == null || logoValue == undefined) {
    return image = '<img class="twitch-avatar img-placeholder" />';
  } else {
    return image = '<img class="twitch-avatar" src=' + logoValue + ' />'
  }
}

function onlineStatus(onlineValue) { // Changes the color of the icon for each account based off their online status
  var online = "";
  if (onlineValue == "online") {
    return online = '<img src="assets/img/online.png" class="online-icon" />'
  } else {
    return online = '<img src="assets/img/offline.png" class="online-icon" />'
  }
}

function accountLink(game, username) { // Sets link of camera icon to account page after filtering out accounts which don't exist
  var link = "";
  if (game == "Account does not exist" || game == "Account is unavailable") {
    return link;
  } else {
    return link = '<a href="https://www.twitch.tv/' + username + '" target="_blank"><i class="fa fa-2x fa-video-camera"></i></a>';
  }
}

/* The following several functions are called in succession to update the online and game variables of each user.
 * This will be called on a set interval and also available by the user with a refresh button.
*/

function intervalUpdate() {
  setInterval(function() {
    updateUsersObj();
  }, 3000000);
}

function updateUsersObj() {
  for (var user in usersObj) {
    /* Manually reset onlines and game values to be undefined before fetching the data
     * from the API in order to not premauturely resolve the promise. This initial function filters out accounts that
     * are unavailable or do not exist as no new information will be available for them. */
    if (usersObj[user].game != "Account is unavailable" && usersObj[user].game != "Account does not exist") {
      usersObj[user].online = undefined;
      usersObj[user].game = undefined;
      updateUserData(usersObj[user]);
    }
  }
}

function updateUserData(user) {
  let userUpdatePromise = new Promise(function(resolve, reject) {
    $.get("http://wind-bow.glitch.me/twitch-api/streams/" + user.username, function(data) {
      if (data.stream == null) {
        user.online = "offline";
        user.game = "Offline";
      } else if (data.stream.hasOwnProperty("_id")) { //Tests if the user is streaming
        user.online = "online";
        user.game = data.stream.game;
      }
      if (user.online != undefined && user.game != undefined) {
          resolve(user);
      }
    }); // End API call
  }); // End Promise
  userUpdatePromise.then(function(userData) {
    updateUserDisplay(userData);
  });
}

function updateUserDisplay(user) {
  let online = onlineStatus(user.online);
  let game = user.game;
  $('#' + user.username + '').find('.online-icon').replaceWith(online);
  $('#' + user.username + '').find('.twitch-game').text(game);
}

// Function for user manual refresh

$('#refresh-data').on('click', function(e) {
  e.preventDefault();
  var spinner = $(this);
  spinner.addClass('rotate-refresh');
  setTimeout(function() {
    spinner.removeClass('rotate-refresh');
  }, 2000);
  updateUsersObj();
});

// End user update functions

function toggleUsers() { // Monitors clicks of menumar and shows/hides users accordingly. Online or offline class are on
  $('#all').on('click', function(e) {
    e.preventDefault();
    $('.active').removeClass('active');
    $('#all').addClass('active');
    $('.online').css('display', 'flex');
    $('.offline').css('display', 'flex');
  });
  $('#online').on('click', function(e) {
    e.preventDefault();
    $('.active').removeClass('active');
    $('#online').addClass('active');
    $('.online').css('display', 'flex');
    $('.offline').css('display', 'none');
  });
  $('#offline').on('click', function(e) {
    e.preventDefault();
    $('.active').removeClass('active');
    $('#offline').addClass('active');
    $('.online').css('display', 'none');
    $('.offline').css('display', 'flex');
  });
}

function userAddField() {
  var submitIcon = $('.add-icon');
  var addWrapper = $('.add-user-wrapper');
  var addContainer = $('.addbox');
  var addInput = $('.add-input');
  var isOpen = false;

  submitIcon.on('click', function() {
    if (isOpen == false) {
      addContainer.addClass('addbox-open');
      addWrapper.css('width', '250px');
      addInput.focus();
      isOpen = true;
    } else {
      addContainer.removeClass('addbox-open');
      addWrapper.css('width', '50px');
      addInput.focusout();
      isOpen = false;
    }
  });
  submitIcon.mouseup(function() {
    return false;
  });
  addContainer.mouseup(function() {
    return false;
  });
  $(document).mouseup(function(){
    if (isOpen == true) {
        $('.add-icon').css('display', 'block');
        addInput.val("");
        submitIcon.click();
    }
  });
  addInput.keydown(function(e) {
    if (e.which == 13) { // Registers press of enter key and runs addUser function if length > 0.
      e.preventDefault();
      if (addInput.val().length > 0) {
        addUser(addInput.val());
      }
      addInput.val("");
      submitIcon.click();
    } else if(e.which == 27) { // Registers press of escape key
      e.preventDefault();
      addInput.val("");
      submitIcon.click();
    }
  });
}
