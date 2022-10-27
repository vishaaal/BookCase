function darkMode() {
	jQuery("body").addClass("night").removeClass("day");
	jQuery("h1.about-title").addClass("night").removeClass("day");
	jQuery("p.descrip").addClass("night").removeClass("day");
	document.documentElement.classList.add("dark");
}

function lightMode() {
	jQuery("body").addClass("day").removeClass("night");
	jQuery("h1.about-title").addClass("day").removeClass("night");
	jQuery("p.descrip").addClass("day").removeClass("night");
	document.documentElement.classList.remove("dark");
}

$("#color-switch").on("change", function (e) {
	if (this.checked) {
		darkMode();
	} else {
		lightMode();
	}
});