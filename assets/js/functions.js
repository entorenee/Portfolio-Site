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

//Functions for showing and hiding the modal dialog box in portfolio section

function closeModal() {
  $('.close').on('click', function() {
    $('.modal').css('display','none');
  });
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
      $('.modal').css('display','block');
    });
  });
}
