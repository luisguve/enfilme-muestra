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
	// Set background images of slides in navigation slider.
	const slides = document.querySelectorAll(".nav-slide");
	slides.forEach(slide => {
		const bgImgUrl = `url(${slide.dataset["bgImg"]})`;
		$(slide).css("background", bgImgUrl);
		$(slide).css("background-size", "cover");
		$(slide).css("background-position", "center");
	});
	// Setup event listeners.
	const estrenosContents = [
		{
			img: "public/img/news/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "vaquero del mediodia",
			desc: "Una luz que se apaga en el camino."
		},
		{
			img: "public/img/news/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "vaquero del mediodia 2",
			desc: "Una luz que se apaga en el camino."
		},
		{
			img: "public/img/news/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "vaquero del mediodia 3",
			desc: "Una luz que se apaga en el camino."
		},
		{
			img: "public/img/news/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "vaquero del mediodia 4",
			desc: "Una luz que se apaga en el camino."
		},
		{
			img: "public/img/news/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "vaquero del mediodia 5",
			desc: "Una luz que se apaga en el camino."
		},
		{
			img: "public/img/news/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "vaquero del mediodia 6",
			desc: "Una luz que se apaga en el camino."
		},
		{
			img: "public/img/news/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "vaquero del mediodia 7",
			desc: "Una luz que se apaga en el camino."
		},
		{
			img: "public/img/news/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "vaquero del mediodia 8",
			desc: "Una luz que se apaga en el camino."
		}
	];
	const estrenosList = document.querySelectorAll(".estreno-desc");
	const estrenoImg = document.querySelector(".estreno-content-container > img");
	const estrenoH2 = document.querySelector(".estreno-content-container > h2");
	const estrenoP = document.querySelector(".estreno-content-container > p");
	estrenosList.forEach((estreno, idx) => {
		estreno.addEventListener("click", () => {
			const current = document.querySelector(".estreno-desc.active");
			if (current.dataset["idx"] == idx) {
				return;
			}
			// Set the corresponding data into container of estreno.
			$(estrenoImg).attr("src", estrenosContents[idx].img);
			estrenoH2.innerText = estrenosContents[idx].title;
			estrenoP.innerText = estrenosContents[idx].desc;
			// Update active classes.
			$(current).removeClass("active");
			$(estreno).addClass("active");
		});
	});
});
