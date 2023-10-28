const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let imageBannerOrder = 0

let divBanner = document.getElementById("banner")

//****** BANNER IMAGE & TAGLINE ******//

function changeImageAndTagline() {
	let imageBanner = document.querySelector(".banner-img")

	imageBanner.src = "./assets/images/slideshow/" + slides[imageBannerOrder].image

	let texteImage = document.querySelector("p")

	texteImage.innerHTML = slides[imageBannerOrder].tagLine
}

//****** BANNER IMAGE & TAGLINE END ******//

//****** ARROWS ******//
// Arrow Right //

let arrowRight = document.querySelector(".arrow_right")

arrowRight.addEventListener("click", () => {

	imageBannerOrder = (imageBannerOrder + 1) % slides.length

	changeImageAndTagline()
	dotSelected()
})

// Arrow Right end //

// Arrow Left //

let arrowLeft = document.querySelector(".arrow_left")

arrowLeft.addEventListener("click", () => {

	imageBannerOrder = (imageBannerOrder - 1 + slides.length) % slides.length

	changeImageAndTagline()
	dotSelected()
})

// Arrow Left end //
//****** ARROWS END ******//

//****** DOTS SELECTED ******//

function dotSelected() {
	let allDots = document.querySelectorAll(".dot")

	for (let i = 0; i < slides.length; i++) {

		let dot = allDots[i]

		if (i === imageBannerOrder) {
			dot.classList.add('dot_selected')
		} else {
			dot.classList.remove('dot_selected')
		}
	}
}

//****** DOTS SELECTED END ******//