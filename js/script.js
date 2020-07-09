// 37. ClassList и делегирование событий
// const buttons = document.querySelectorAll('button'),
// 			wrapper = document.querySelector('.btn-clock');

// console.log(buttons[0].classList.length);
// console.log(buttons[0].classList.item(0));
// console.log(buttons[0].classList.add('class'));
// console.log(buttons[0].classList.remove('blue'));
// console.log(buttons[0].classList.toggle('blue'));
// console.log(buttons[0].classList.toggle('class'));

// if(buttons[0].classList.contains('blue')) {
// 	console.log('YES');
// } else {
// 	console.log('NO');
// }

// buttons[0].addEventListener('click', () => {
// 	if (buttons[0].classList.contains('red')) {
// 		buttons[0].classList.add('red');
// 	} else {
// 		buttons[0].classList.remove('red');
// 	}
// });

// console.log(buttons[0].className);

// wrapper.addEventListener('click', (e) => {
// 	if (e.target && e.target.matches("button.red")) {
// 		console.log('YEAH!!');
// 	}
// });

// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);
//------------------------