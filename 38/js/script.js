document.addEventListener('DOMContentLoaded', () => {
// Tabs
const tabs = document.querySelectorAll('.tabheader__item'),
			tabsContent = document.querySelectorAll('.tabcontent'),
			tabsParent = document.querySelector('.tabheader__items');

function hideTabContent() {
	tabsContent.forEach(item => {
		item.classList.add('hide');
		item.classList.remove('show', 'fade');
	});

	tabs.forEach(item => {
		item.classList.remove('tabheader__item_active');
	});
}

function showTabContent(i = 0) {
	tabsContent[i].classList.add('show', 'fade');
	tabsContent[i].classList.remove('hide');
	tabs[i].classList.add('tabheader__item_active');
}

hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (e) => {
	const target = e.target;
	if (target && target.classList.contains('tabheader__item')) {
		tabs.forEach((item, i) => {
			if (item === target) {
				hideTabContent();
				showTabContent(i);
			}
		});
	}
});

// Timer

const deadline = '2020-07-20';

function getTimeRemaining(endtime) {
	const remainingTime = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
			hours = Math.floor(remainingTime / (1000 * 60 * 60) % 24),
			minutes = Math.floor((remainingTime / (1000 * 60)) % 60),
			seconds = Math.floor((remainingTime / 1000) % 60);
	
			return {
				'total': remainingTime,
				'days': `0${days}0`.slice(-3, -1),
				'hours': `0${hours}0`.slice(-3, -1),
				'minutes': `0${minutes}0`.slice(-3, -1),
				'seconds': `0${seconds}0`.slice(-3, -1)
			};
}

function setTimeRemaining() {
	const days = document.querySelector('#days'),
				hours = document.querySelector('#hours'),
				minutes = document.querySelector('#minutes'),
				seconds = document.querySelector('#seconds'),
				gettingTime = getTimeRemaining(deadline);

	days.textContent = gettingTime.days;
	hours.textContent = gettingTime.hours;
	minutes.textContent = gettingTime.minutes;
	seconds.textContent = gettingTime.seconds;

	if (gettingTime.days === '00' && gettingTime.hours === '00' && gettingTime.minutes === '00' && gettingTime.seconds === '00') {
		clearInterval(timer);
	}
}

setTimeRemaining();
let timer = setInterval(setTimeRemaining, 1000);

// Modal

const modal = document.querySelector('.modal'), 
			modalOpen = document.querySelectorAll('[data-modal]'),
			modalClose = document.querySelector('[data-close]');

console.log(modal);
modalOpen.forEach(item => {
	item.addEventListener('click', showModal);
});

function showModal() {
	modal.classList.add('show');
	document.body.style.overflow = 'hidden';
	clearInterval(modalOpenTimer);
}

function closeModal() {
	modal.classList.remove('show');
	document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {if (e.target === modal) {closeModal();}});

document.addEventListener('keydown', (e) => {if (e.code === 'Escape' && modal.classList.contains('show')) {closeModal();}});

const modalOpenTime = 8000;

const modalOpenTimer = setTimeout(showModal, modalOpenTime);


function showModalByScroll() {
	if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
		showModal();
		window.removeEventListener('scroll', showModalByScroll);
	}
}
window.addEventListener('scroll', showModalByScroll);

});