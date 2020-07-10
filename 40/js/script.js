'use scrict';

const now = new Date();

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// now.setHours(18);
// console.log(now);


for (let i = 0; i < 10000000; i++) {
	let some = i ** 3;
}

let end = new Date();

console.log(`Скрипт отработал за ${end - now} миллисекунд`);