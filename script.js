//? ===== COUNTDOWN =====
let loaderStart = () => {
	let countElement = document.querySelector(".count");
	let currentCount = 0;

	let updateCount = () => {
		if (currentCount == 100) {
			return;
		} else if (currentCount > 100) {
			currentCount = 100;
		}

		currentCount += Math.floor(Math.random() * 10) + 1;

		if (currentCount > 100) {
			currentCount = 100;
		}
		countElement.textContent = currentCount;

		let delay = Math.floor(Math.random() * 200) + 50;
		setTimeout(updateCount, delay);
	};

	updateCount();
};

loaderStart();

//? ===== ANIMATION =====
gsap.to(".count", 0.25, {
	delay: 3.5,
	opacity: 0,
});

gsap.to(".cover-bar", 1.5, {
	delay: 3.5,
	height: 0,
	stagger: {
		amount: 0.5,
	},
	ease: "power4.inOut",
});

gsap.from(".text", 1.5, {
	delay: 4,
	opacity: 0,
	x: -700,
	stagger: {
		amount: 0.5,
	},
	ease: "power4.inOut",
});

gsap.from(".image", 2, {
	delay: 4.5,
	y: 700,
	ease: "power4.inOut",
});
