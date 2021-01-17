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
			img: "public/img/en_cartelera/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "vaquero del mediodia",
			desc: "Una luz que se apaga en el camino."
		},
		{
			img: "public/img/en_cartelera/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "to the ends of the earth",
			desc: "Yoko (Atsuko Maeda) es una joven reportera japonesa que, debido a una misión de trabajo, viaja a Uzbekistán donde se filma un reportaje cultural sobre las costumbres, tradiciones y atractivos turísticos de aquel país."
		},
		{
			img: "public/img/en_cartelera/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "ceniza negra",
			desc: "Selva (Smashleen Gutiérrez), una niña de 13 años, vive con su abuelo Tata (Humberto Samuels) y una figura maternal, Elena (Hortensia Smith), en una choza escondida en el corazón de la jungla costarricense."
		},
		{
			img: "public/img/en_cartelera/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "Dawson City: Frozen Time",
			desc: "Con casi el 75% del cine mudo estadounidense perdido debido a la naturaleza autodestructiva de las primeras películas de nitrato, una gran parte de su historia ha permanecido fuera de nuestro alcance. Esa es parte de la razón por la que Dawson City: Frozen Time (2016) nos lleva a un viaje tan inmersivo, ya que trae a la pantalla una colección de imágenes que alguna vez se asumió perdida para siempre."
		},
		{
			img: "public/img/en_cartelera/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "una película dramática",
			desc: "En su más reciente trabajo cinematográfico, Un Film Dramatique (2019), el artista y cineasta Éric Baudelaire se ha despojado de la etiqueta de “autor de la obra” para explorar el potencial de la colaboración con estudiantes de la escuela secundaria Dora Maar, ubicada en el suburbio parisino de Saint-Denis."
		},
		{
			img: "public/img/en_cartelera/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "farewell amor",
			desc: "Walter (Ntare Guma Mbaho Mwine), un ciudadano originario de Angola, ha estado viviendo en Nueva York durante 17 años. Ahora, su esposa, Esther (Zainab Jah), y su hija adolescente, Sylvia (Jayme Lawson), a ninguna de las cuales ha visto en todo ese tiempo, se unirán a él en la Gran Manzana."
		},
		{
			img: "public/img/en_cartelera/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "mis escenas de lucha",
			desc: "Una joven desconcertada (Sara Forestier), que está de visita en la Francia rural para ayudar a su hermana a manejar la propiedad de su padre, está enfurecida porque él no le dio el piano que le prometió que heredaría."
		},
		{
			img: "public/img/en_cartelera/vaquero_del_mediodia_Enfilme_6c240_340_170.jpg",
			title: "Elegy to the Visitor from the Revolution",
			desc: "Ambientado en Filipinas durante la actualidad, una prostituta (Sigrid Bernardo) espera pacientemente a un cliente más. Un músico (Lav Diaz) interpreta varias melodías y canciones sin un destinatario específico. Un grupo de delincuentes (Dante Perez, Evelyn Vargas y Joel Ferrer) se prepara para un atraco."
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
