'use strict';

class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	calcArea() {
		return this.width * this.height;
	}
}

class coloredRectangleWidthText extends Rectangle {
	constructor(height, width, text, bgColor) {
		super(height, width);
		this.text = text;
		this.bgColor = bgColor;
	}

	showMyProps() {
		console.log(`Текст: ${this.bgColor}`);
	}
}

const div = new coloredRectangleWidthText(25, 10, 'Hello world!', 'red');

div.showMyProps();
console.log(div.calcArea());

const rect = new Rectangle(10, 15);
const long = new Rectangle(15, 100);

// console.log(long.calcArea());
// console.log(rect.calcArea());