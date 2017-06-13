/* Update users array with all Twitch usernames you want included in the JSON and web app.
 * Users must be string variables. All users will be run through the function of verifyUsersType
 * on document ready, and any items that are not a string will be removed. The app will display
 * users which do not have an account or whose account is no longer available. When this happens
 * the infromation about the account status will be displayed in the "game" section of the display.
*/
var users = ["ESL_SC2", "brunofin", "comster404", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "syndicate", "summit1g", "sodapoppin", "boxbox", "Voyboy"];
var twitchUsers = [];
var usersObj = {};

$(document).ready(function() {
  verifyUsersType();
  toggleUsers();
  intervalUpdate();
});

/* Free Code Camp Twitch API pass-through to not utilize/publish API key
 * Use base url: https://wind-bow.gomix.me/twitch-api in API calls
 * Server only accepts GET requests and only routes /users/:user, /channels/:channel, and /streams/:stream
*/

function verifyUsersType() {
  for (var i = 0; i < users.length; i++) {
    if (typeof users[i] === "string") {
      twitchUsers.push(users[i]);
    }
  }
  populateObj();
}

function populateObj() {
  for (var i = 0; i < twitchUsers.length; i++) {
    let userPromise = new Promise(function(resolve, reject) {
      let currentUser = twitchUsers[i];
      $.get("http://wind-bow.glitch.me/twitch-api/streams/" + twitchUsers[i], function(data) {
        usersObj[currentUser] = {};
        usersObj[currentUser].username = currentUser;
        if (data.stream == null) {
          usersObj[currentUser].online = "offline";
          usersObj[currentUser].game = "Offline";
        } else if (data.stream.hasOwnProperty("_id")) { //Tests if the user is streaming
          usersObj[currentUser].online = "online";
          usersObj[currentUser].game = data.stream.game;
        }
        $.get("http://wind-bow.glitch.me/twitch-api/users/" + currentUser, function(data) {
          usersObj[currentUser].logo = data.logo;
          if (data.hasOwnProperty("status")) {
            /* Checks if account does not exist or is "unavailable" and stores infornation into game
            property. User will dispaly as being offline and the text stating the account does not exist
            or us unavailable will display under the user name where game information is displayed. */
            switch (data.status) {
              case 422:
                usersObj[currentUser].game = "Account is unavailable"
                break;
              case 404:
                usersObj[currentUser].game = "Account does not exist"
                break;
            }
          }
          if (Object.keys(usersObj[currentUser]).length = 4) {
            resolve(usersObj[currentUser]);
          }
        }); // End second API call
      }); // End first API call
    }); // End promise
    userPromise.then(function(userData) {
      // Promise resolves that all fields are populated for a user and then adds HTML elements to display data.
      displayUsers(userData)
    });
  } // End for loop
}

function displayUsers(user) { // Populates interface with the data stored for each user when API calls populate values
  let logo = logoVerify(user.logo);
  let online = onlineStatus(user.online);
  let link = accountLink(user.game, user.username);
  $('.twitch-viewer').append('<div id="' + user.username + '" class="twitch-user ' + user.online + '">\
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
}

function logoVerify(logoValue) {  // Verifies that logo does not contain null or undefined and returns HTML to populate twitch-user
  var image = "";
  if (logoValue == null || logoValue == undefined) {
    return image = '<img class="twitch-avatar img-placeholder" />';
  } else {
    return image = '<img class="twitch-avatar" src=' + logoValue + ' />'
  }
}

function onlineStatus(onlineValue) { // Changes the color of the icon for each account based off their onlien status
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
