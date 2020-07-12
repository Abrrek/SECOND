'use strict';

// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}
// 	console.log(sum());
// }

// showThis(4, 5);

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function() {
// 		console.log(this);
// 		// function shout() {
// 		// 	console.log(this);
// 		// }
// 		// shout();
// 	}
// };

// obj.sum();


// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log(`Hello, ${this.name}`);
// 	};
// }

// const Movsar = new User('Movsar', 31214);

// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);
// }

// const user = {
// 	name: 'john'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
// 	return this * num;
// }
// const double = count.bind(2);
// console.log(double(3));

/*
1) Обычная функция: this = window, нно если use strict, то this = undefined
2) Контекст у методов объекта это и есть сам объект
3) this в конструктsорах и классах - это новый экземпляр объекта
4) Ручная привязка this с помощью call, apply и bind
*/

const button = document.querySelector('button');

button.addEventListener('click', () => {
	this.style.backgroundColor = 'red';
	console.log(this);
});

const obj = {
	num: 5,
	sayNumber: function() {
		const say = () => {
			const sayTwo = () => {
				console.log(this.num);
			};
			sayTwo();
		};
		say();
	}
};

obj.sayNumber();

const double = a => a ** 2;

console.log(double(4));