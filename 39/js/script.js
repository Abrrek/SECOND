let btn = document.querySelector('.btn'),
			timerId,
			i = 0;

function myAnimation(i) {
	const elem = document.querySelector('.box');
	let pos = 0;

	const id = setInterval(frame, 10);

	function frame() {
		if (pos == 300) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}


btn.addEventListener('click', myAnimation);

// function logger() {
// 	if (i === 3) {
// 		clearInterval(timerId);
// 	}
// 	console.log('Hello');
// 	i++;
// }

// let id = setTimeout(function log() {
// 	console.log('Hello');
// 	id = setTimeout(log, 500);
// });