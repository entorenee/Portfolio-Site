$(document).ready(function () {
  smoothScroll(300);
  navbarToggle();
  closeModal();
  openModal();
});


function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top - 75
	        }, duration);
	    }
	});
}

function navbarToggle() {
  $('.nav-link').on('click', function() {
    $('.navbar-toggler').click(); //Closes navbar before scrolling to section.
  });
}

/* Functions for showing and hiding the modal dialog box in portfolio section
 * openModal function selects which portfolio item is clicked on, and uses the id
 * of that element to get the appropriate values from the projects.json file.
 * The subsequent jQuery commands populate the skeleton HTML elements of the modal
 * and then make it visible.
*/

function closeModal() {
  $('.close').on('click', function() {
    closeAnimation();
  });
  $('#portfolio-modal').children().on('click', function(e) {
    e.stopPropagation();
  });
  $('#portfolio-modal').on('click', function() {
    closeAnimation();
  });
}

function closeAnimation() {
  var modal = $('.modal').addClass('hide-dialog'); // Temporarily adds class with closing animation
  setTimeout(function() { // Provides a delay before resetting the modal to a ready state to be re-opened.
    modal.removeClass('hide-dialog').css('display','none');
  }, 1000); // Delay must be the same as the CSS minimizeDialog animation.
}

function openModal() {
  $('div.portfolio-thumb').children().on('click', function(e) {
    e.preventDefault();
    var project = $(this).attr('id');
    $.getJSON('/assets/js/projects.json', function(data) {
      $('#project-name').html(data[project].title);
      $('#project-large-thumb').attr('src', data[project].thumbSource);
      $('#project-description').html(data[project].description);
      $('#project-link').attr('href', data[project].projectLink);
      $('#github-link').attr('href', data[project].githubLink);
      $('.modal').css('display','block');
    });
  });
}
