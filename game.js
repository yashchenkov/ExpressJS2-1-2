import { stdin as input, stdout as output } from 'node:process';
import * as readline from 'node:readline';
import fs from 'fs';

const rl = readline.createInterface({ input, output });


const recurAsking = function () {
	const number = Math.floor(Math.random() * 3);
	if (number === 0) {
		recurAsking();
	}
	rl.question('1 или 2?\n', (answer) => {
		if(answer === 'exit') {
		  return rl.close();
		}
        if(isNaN(Number(answer))) {
  	      console.log('Ошибка! Введено не число!');
  	      return rl.close();
        } else  {
        	if(Number(answer) !== number) {
		      console.log('К сожалению, Вы не угадали!');
		      logger('loss\n');
		      return rl.close();
		    } else {
		    	console.log('Число отгадано!');
		    	logger('win\n')
		    	return rl.close();
		    }
        }
    })
};


function logger(data) {
	const dbData = fs.readFileSync('logs.txt', (err, data) => (data));
	const writerSrt = fs.createWriteStream('logs.txt')
	const all = dbData.toString() + data;
    writerSrt.write(all, 'UTF8');
    writerSrt.end();
}

recurAsking();