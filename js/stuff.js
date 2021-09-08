

		const body = document.getElementById('body');

		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}

		let n = 0;

		function print_stars(element) {
			const elemento = document.getElementById(element);
			const stars = getRandomInt(3, 14);
			for (n = 0; n < stars; n++) {
				let X = getRandomInt(1, 100);
				let Y = getRandomInt(1, 100);
				let color = getRandomInt(1, 5);
				//let star = "<div class='star' style='left:"+X+"%;top:"+Y+"%;'></div>";
				let star = document.createElement("div");
				star.className = 'star color-' + color;
				star.setAttribute("style", "left:" + X + "%;top:" + Y + "%;");
				elemento.appendChild(star);
			}
		}

		print_stars('stars-layer-1');
		print_stars('stars-layer-2');
		print_stars('stars-layer-3');
		print_stars('stars-layer-4');

		function changeOrigin() {
			let X = getRandomInt(1, 100);
			let Y = getRandomInt(1, 100);

			let fields = document.getElementsByClassName('stars-layer');

			for (var i = 0; i < fields.length; i++) {
				fields.item(i).setAttribute("style", "transform-origin:" + X + "% " + Y + "%;");
			}
		}

		setInterval(changeOrigin, 5000);

		const h1 = document.getElementById('h1');

		var typewriter1 = new Typewriter(h1, {
			loop: false,
			delay: 75,
		});

		typewriter1
			.pauseFor(500)
			.typeString('Graphics / UI Designer & Web Frontend / WordPress Developer')/*
			.pauseFor(300)
			.deleteChars(10)
			.typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
			.typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
			.pauseFor(1000)*/
			.start();


		const h2 = document.getElementById('h2');

		var typewriter2 = new Typewriter(h2, {
			loop: false,
			delay: 75,
		});

		typewriter2
			.pauseFor(3500)
			.typeString('Israel Mateo Manzano')/*
			.pauseFor(300)
			.deleteChars(10)
			.typeString('<strong>JS</strong> plugin for a cool typewriter effect and ')
			.typeString('<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>')
			.pauseFor(1000)*/
			.start();

		const pageBody = document.body;

		function showBio() {
			pageBody.className = 'bio-on';
		}

		function showMain() {
			pageBody.className = '';
		}

		function showLogos() {
			pageBody.className = 'logos';
		}

		function goodBye() {
			pageBody.className = 'bye';
		}

		const onClickShowBio = document.querySelectorAll('.js-showbio');

		for ( n=0; n<onClickShowBio.length ;n++ ) {
			onClickShowBio[n].addEventListener("click", function() {
				showBio();
			});
		}

		const onClickShowMain = document.querySelectorAll('.js-showmain');

		for ( n=0; n<onClickShowMain.length ;n++ ) {
			onClickShowMain[n].addEventListener("click", function() {
				showMain();
			});
		}

		const onClickGoodBye = document.querySelectorAll('.js-goodbye');

		for ( n=0; n<onClickGoodBye.length ;n++ ) {
			onClickGoodBye[n].addEventListener("click", function() {
				goodBye();
			});
		}

		const onClickShowLogos = document.querySelectorAll('.js-showlogos');

		for ( n=0; n<onClickShowLogos.length ;n++ ) {
			onClickShowLogos[n].addEventListener("click", function() {
				showLogos();
			});
		}

