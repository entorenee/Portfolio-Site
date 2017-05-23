$(document).ready(function () {
  smoothScroll(300);
  navbarToggle();
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
