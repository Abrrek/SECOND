'use strict';

const num = new Number(3);

console.log(num);

function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log(`Hello, ${this.name}`);
	};
}

User.prototype.exit = function(name) {
	console.log(`Привет, ${this.name}-1`);
};
const Movsar = new User('Movsar', 31214);
const Regg = new User('Regg', 234234);

Movsar.exit();

console.log(Movsar);
console.log(Regg);

Regg.hello();