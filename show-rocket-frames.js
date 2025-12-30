import cliSpinners from './index.js';

const rocketSpinners = ['rocket', 'rocketArc', 'rocketLaunch', 'rocketOrbit', 'rocketTrail', 'rocketFlight'];

console.log('='.repeat(60));
console.log('ROCKET ANIMATIONS - Frame Preview');
console.log('='.repeat(60));

rocketSpinners.forEach(name => {
	const spinner = cliSpinners[name];
	console.log(`\n${name.toUpperCase()}`);
	console.log(`Interval: ${spinner.interval}ms | Frames: ${spinner.frames.length}`);
	console.log('-'.repeat(60));

	// Show first 10 frames or all if less than 10
	const framesToShow = Math.min(10, spinner.frames.length);
	for (let i = 0; i < framesToShow; i++) {
		console.log(`Frame ${i + 1}: ${spinner.frames[i]}`);
	}

	if (spinner.frames.length > 10) {
		console.log(`... (${spinner.frames.length - 10} more frames)`);
		console.log(`Last frame: ${spinner.frames[spinner.frames.length - 1]}`);
	}
});

console.log('\n' + '='.repeat(60));
console.log('To see animations in action, run:');
console.log('  node example.js rocketArc');
console.log('  node demo-rockets.js rocketFlight');
console.log('='.repeat(60));
