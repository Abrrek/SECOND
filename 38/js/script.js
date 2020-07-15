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
			modalOpen = document.querySelectorAll('[data-modal]');

// console.log(modal);
modalOpen.forEach(item => {
	item.addEventListener('click', showModal);
});

function showModal() {
	modal.classList.add('show');
	document.body.style.overflow = 'hidden';
	// clearInterval(modalOpenTimer);
}

function closeModal() {
	modal.classList.remove('show');
	document.body.style.overflow = '';
}

modal.addEventListener('click', (e) => {if (e.target === modal || e.target.getAttribute('data-close') == '') {closeModal();}});

document.addEventListener('keydown', (e) => {if (e.code === 'Escape' && modal.classList.contains('show')) {closeModal();}});

const modalOpenTime = 8000;

// const modalOpenTimer = setTimeout(showModal, modalOpenTime);


function showModalByScroll() {
	if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
		showModal();
		window.removeEventListener('scroll', showModalByScroll);
	}
}
window.addEventListener('scroll', showModalByScroll);

// Menu Cards

class MenuCard {
	constructor(src, alt, title, description, price, parentSelector, ...classes) {
		this.src = src;
		this.alt = alt;
		this.title = title;
		this.description = description;
		this.price = price;
		this.classes = classes;
		this.parent = document.querySelector(parentSelector);
		this.USDrate = 60;
		this.USDtoUAH();
	}

	USDtoUAH() {
		this.price *= this.USDrate;
	}

	render() {
		const element = document.createElement('div');
		if (!this.classes.length) { element.classList.add('menu__item');} else {
			this.classes.forEach(className => element.classList.add(className));
		}
		element.innerHTML = `
			<img src=${this.src} alt=${this.alt}>
			<h3 class="menu__item-subtitle">${this.title}</h3>
			<div class="menu__item-descr">${this.description}</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
					<div class="menu__item-cost">Цена:</div>
					<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
			</div>
		`;
		this.parent.append(element);
	}
}

new MenuCard(
	'img/tabs/vegy.jpg',
	'vegy',
	'Меню "Фитнес"',
	'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
	229,
	'.menu .container'
).render();

new MenuCard(
	'img/tabs/elite.jpg',
	'elite',
	'Меню “Премиум”',
	'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
	550,
	'.menu .container',
	'menu__item',
	'big'
).render();

new MenuCard(
	'img/tabs/post.jpg',
	'post',
	'Меню "Постное"',
	'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
	430,
	'.menu .container',
	'menu__item',
	'big'
).render();


// Forms

const forms = document.querySelectorAll('form');

const message = {
	loading: 'img/form/spinner.svg',
	success: 'Спасибо, скоро мы с Вами не свяжемся',
	failure: 'Что-то пошло не так...'
};

function postData(form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const statusMessage = document.createElement('img');
		statusMessage.src = message.loading;
		statusMessage.style.cssText = `
			display: block;
			margin: 0 auto;
		`;
		form.insertAdjacentElement('afterend', statusMessage);

		const request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-type', 'application/json');
		const formData = new FormData(form);

		const object = {};
		formData.forEach(function(value, key) {
			object[key] = value;
		});

		request.send(JSON.stringify(object));

		request.addEventListener('load', () => {
			if (request.status === 200) {
				console.log(request.response);
				showThanksModal(message.success);
				form.reset();
				statusMessage.remove();
			} else {
				showThanksModal(message.failure);
			}
		});
	});
}

forms.forEach(form => postData(form));

function showThanksModal(message) {
	const prevModalDialog = document.querySelector('.modal__dialog');

	prevModalDialog.classList.add('hide');
	showModal();

	const thanksModal = document.createElement('div');
	thanksModal.classList.add('modal__dialog');
	thanksModal.innerHTML = `
		<div class="modal__content">
			<div class="modal__close" data-close>×</div>
			<div class="modal__title">${message}</div>
		</div>
	`;

	document.querySelector('.modal').append(thanksModal);

	setTimeout(() => {
		thanksModal.remove();
		prevModalDialog.classList.remove('hide');
		prevModalDialog.classList.add('show');
		closeModal();
	}, 4000);
}

});


