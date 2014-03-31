//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

function form_submitted(){
	alert("foo!");
}

$(document).ready(function(){
	if(document.URL == 'http://whatplant.github.io?submitted=true;'){
		alert("Thank you for submitting!")
	};
});