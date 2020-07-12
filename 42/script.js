'use strict';

const box = document.querySelector('.box'),
			btn = document.querySelector('button');

// const width = box.clientWidth;
// const height = box.clientHeight;

const width = box.offsetWidth;
// const height = box.offsetHeight;
const height = box.scrollHeight;

btn.addEventListener('click', () => {
	// box.style.height = height + 'px';
	console.log(box.scrollTop);
});
console.log(width, height);

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);
console.log(style.display);