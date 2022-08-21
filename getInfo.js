import fs from 'fs';

const dbData = fs.readFileSync('logs.txt', (err, data) => (data));
const data = dbData.toString().split('\n').slice(0, dbData.toString().split('\n').length - 1);

const amount = data.length;
let wins = 0;
let losses = 0;

data.forEach(el => {
	if(el === 'win') {
		wins++;
	} else if(el === 'loss') {
		losses++;
	}
});
const prcnt = (wins/amount) * 100;

console.log(`Общее количество: ${amount}\nКоличество выигранных/проигранных: ${wins}/${losses}\nПроцент выигрышей: ${prcnt}%`);