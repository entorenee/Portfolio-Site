$(document).ready(function() {
  updateNavbar();
  stylizeDate();
});

function updateNavbar() {
  $('a.nav-link').each(function() {
    var $this = $(this);
    var _href = $this.attr('href');
    if (_href != "/blog") {
      $this.attr('href', '/' + _href);
    }
  });
}

function stylizeDate() {
  var dateSelection = $('.date');
  var regExp = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
  var months = {01:"January",02:"February",03:"March",04:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"};
  for (var i = 0; i < dateSelection.length; i++) {
    var date = dateSelection[i].innerHTML;
    var matchedDate = date.match(regExp);
    var matchedMonth = parseInt(matchedDate[2]);
    var formattedDate = months[matchedMonth] + " " + parseInt(matchedDate[3]) + ", " + matchedDate[1];
    dateSelection[i].innerHTML = formattedDate;
  }
}
