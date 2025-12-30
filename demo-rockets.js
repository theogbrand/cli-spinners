import process from 'node:process';
import logUpdate from 'log-update';
import cliSpinners from './index.js';

const rocketSpinners = ['rocket', 'rocketArc', 'rocketLaunch', 'rocketOrbit', 'rocketTrail', 'rocketFlight'];
const spinnerName = process.argv[2] ?? 'rocketArc';

if (!rocketSpinners.includes(spinnerName)) {
	console.log(`Available rocket spinners: ${rocketSpinners.join(', ')}`);
	console.log(`\nUsage: node demo-rockets.js [spinnerName]`);
	console.log(`Example: node demo-rockets.js rocketArc`);
	process.exit(1);
}

const spinner = cliSpinners[spinnerName];
let index = 0;

console.log(`\nShowing spinner: ${spinnerName}\n`);

setInterval(() => {
	const {frames} = spinner;
	logUpdate(frames[index = ++index % frames.length] + ' Launch sequence initiated');
}, spinner.interval);

// $ node demo-rockets.js rocketArc
