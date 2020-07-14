'use strict';

const persone = {
	name: 'Movsar',
	tel: '89999999999',
	parents: {
		mom: 'Olga',
		dad: 'Mike'
	}
};

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);