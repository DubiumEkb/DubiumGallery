export default class DubiumGallery {
	constructor(name, options) {
		const defaultOptions = {
			overlay: true,
			windowScroll: false,
			close: {
				closeOutside: true,
				closeESC: true,
				closeIcon: `<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967L6.75 5.68934L12.2197 0.219671C12.5126 -0.0732225 12.9874 -0.0732225 13.2803 0.219671C13.5732 0.512564 13.5732 0.987438 13.2803 1.28033L7.81066 6.75L13.2803 12.2197C13.5732 12.5126 13.5732 12.9874 13.2803 13.2803C12.9874 13.5732 12.5126 13.5732 12.2197 13.2803L6.75 7.81066L1.28033 13.2803C0.987437 13.5732 0.512563 13.5732 0.21967 13.2803C-0.0732232 12.9874 -0.0732232 12.5126 0.21967 12.2197L5.68934 6.75L0.21967 1.28033C-0.0732233 0.987437 -0.0732233 0.512563 0.21967 0.21967Z" fill="currentColor"/>
				</svg>`,
			},
			arrow: {
				status: true,
				prev: `prev`,
				next: `next`,
			},
			animationSpeed: 300,
		}
		this.options = Object.assign(defaultOptions, options)
		this.name = name
		this.body = document.body
		this.speed = this.options.animationSpeed
		this.isOpen = false
		this.DubiumGallery = document.querySelector(
			`[data-dubiumGallery="${this.name}"]`,
		)

		// Original images
		this.originalImages = {}

		this.name ? this.init() : this.error()
	}

	init() {
		this.originalImages = this.DubiumGallery.querySelectorAll("img")

		if (this.originalImages?.length > 0) {
			this.openModal()
		}

		if (this.isOpen === true) {
			this.closeModal()
			this.closeESC()
			this.closeOutside()
		}
	}

	// Open modal and generate image items
	openModal = () => {
		this.DubiumGallery.querySelectorAll("img").forEach((item, i) => {
			item.id = `dubiumGallery-${this.name}-${i}`

			this.itemId = i
			item.addEventListener("click", (event) => {
				event.preventDefault()
				console.log(event.currentTarget.src)

				if (this.layout) {
					console.log(this?.layout)
					// = `<div style="background: url (${event.currentTarget.src}) center/cover;"></div>`
				}
			})
		})

		this.resizeGallery()
		this.layoutImage()

		// window.addEventListener("resize", function () {})
	}

	// Sizing image
	resizeGallery = () => {}

	// Layout window image
	layoutImage = () => {
		this.layout = document.createElement("div")
		this.layout.className = "dubiumGallery"
		this.layout.innerHTML = `<div class="dubiumGallery__container">
			<div className="dubiumGallery--close">
				${this.options.close.closeIcon}
			</div>

			<div className="dubiumGallery__item"></div>
			<div className="dubiumGallery__buttons"></div>
		</div>`

		if (this.layout) {
			this.layout.item = this.layout.querySelector(".dubiumGallery__item")
			this.layout.buttons = this.layout.querySelector(
				".dubiumGallery__buttons",
			)
		}

		// const overlay = document.createElement("div")
		// overlay.className = "dubiumGallery-overlay"
		// this.body.appendChild(this.layout)
		// this.options.overlay && this.body.appendChild(overlay)

		// if (this.options.arrow.status === true && this.layout.querySelector(".dubiumGallery__buttons")) {
		// 	this.layout.querySelector(
		// 		".dubiumGallery__buttons",
		// 	).innerHTML = `<div className="dubiumGallery__buttons--prev">${this.options.arrow.prev}</div><div className="dubiumGallery__buttons--next">${this.options.arrow.next}</div>`
		// }
	}

	// Next image
	nextImage = () => {}

	// Back image
	backImage = () => {}

	// Close modal
	closeModal = () => {}

	// Close modal to click is ESC
	closeESC() {
		// document.addEventListener(
		// 	"keydown",
		// 	function (event) {
		// 		if (event.key == "Escape") if (this.isDubiumGallery.isOpened) this.closeHandler()
		// 	}.bind(this),
		// )
	}

	// Close modal to click is outside
	closeOutside() {
		// this.isDubiumGallery.addEventListener(
		// 	"click",
		// 	function (event) {
		// 		if (event.target.classList.contains("modal")) {
		// 			if (this.isDubiumModal.isOpened) this.closeHandler()
		// 		}
		// 	}.bind(this),
		// )
	}

	// Error
	error() {
		throw new Error('Укажите имя: \nnew DubiumGallery("<name>", {})')
	}
}
