$(document).ready(function(){
	$('.main-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav',
		draggable: false,
		autoplay: false,
		autoplaySpeed: 8000
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.main-slider',
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
					infinite: true
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true
				}
			}
		]
	});
	// set background images
	const slides = document.querySelectorAll(".nav-slide");
	slides.forEach(slide => {
		const bgImgUrl = `url(${slide.dataset["bgImg"]})`;
		$(slide).css("background", bgImgUrl);
		$(slide).css("background-size", "cover");
		$(slide).css("background-position", "center");
	});
});
