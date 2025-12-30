import cliSpinners from './index.js';

const fireworkSpinners = ['firework', 'fireworks', 'fireworkBurst', 'fireworkCascade', 'fireworkLaunch', 'fireworkSparkle'];

console.log('='.repeat(70));
console.log('FIREWORK ANIMATIONS - Frame Preview');
console.log('Inspired by Claude\'s ASCII characters: · ✻ ✽ ✶ ✳ ✢');
console.log('='.repeat(70));

fireworkSpinners.forEach(name => {
	const spinner = cliSpinners[name];
	console.log(`\n${name.toUpperCase()}`);
	console.log(`Interval: ${spinner.interval}ms | Frames: ${spinner.frames.length}`);
	console.log('-'.repeat(70));

	// Show all frames for fireworks (they're artistic!)
	spinner.frames.forEach((frame, i) => {
		console.log(`Frame ${String(i + 1).padStart(2)}: ${frame}`);
	});
});

console.log('\n' + '='.repeat(70));
console.log('To see animations in action, run:');
console.log('  node example.js fireworkBurst');
console.log('  node example.js fireworks');
console.log('  node example.js fireworkLaunch');
console.log('='.repeat(70));
