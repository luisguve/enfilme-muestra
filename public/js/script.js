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
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		prevArrow: $('.prev-button'),
		nextArrow: $('.next-button'),
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 576,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 400,
				settings: "unslick"
			}
		]
	});
});
