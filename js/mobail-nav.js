const nav_btn = document.querySelector('.mobile-nav-btn');
const nav = document.querySelector('.mobile-nav');
const menu_icon = document.querySelector('.nav-icon');
const fade = document.querySelector('.mobile-nav-fade');
const body = document.body;

nav_btn.addEventListener('click', function (event) {
	event.stopPropagation();
	nav.classList.toggle('mobile-nav--open');
	fade.classList.toggle('mobile-nav-fade--open');
	menu_icon.classList.toggle('nav-icon--active');
	body.classList.toggle('no-scroll');
})

fade.addEventListener('click', function (event) {
	event.stopPropagation();
	nav.classList.toggle('mobile-nav--open');
	fade.classList.toggle('mobile-nav-fade--open');
	menu_icon.classList.toggle('nav-icon--active');
	body.classList.toggle('no-scroll');
})