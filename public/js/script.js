$(document).ready(function(){
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		autoplay: false
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: false,
		focusOnSelect: true
	});
	// On before slide change
	$('.slider-nav').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		// console.log(nextSlide);
	});
});
