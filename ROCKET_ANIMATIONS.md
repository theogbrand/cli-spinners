# Rocket Animation Examples

This document describes the 6 original rocket ship animations created with U-shape (parabolic arc) trajectories, inspired by actual rocket launches.

## Overview

All rocket animations follow the principle of showing a rocket emoji (🚀) moving through space, with variations in:
- **Trajectory visualization** (arc indicators, trails, altitude markers)
- **Animation speed** (interval timing)
- **Visual complexity** (simple motion vs. detailed effects)

## Animation Descriptions

### 1. `rocket`
**Interval:** 100ms
**Frames:** 16
**Style:** Simple horizontal oscillation

A basic rocket animation showing smooth horizontal movement back and forth. The rocket moves from left to right and back, creating a simple U-shape when visualized over time.

```
🚀
 🚀
  🚀
   🚀
    🚀
     🚀
      🚀
       🚀
        🚀
(then reverses)
```

### 2. `rocketArc`
**Interval:** 80ms
**Frames:** 21
**Style:** Arc trajectory with path indicators

The most detailed U-shape animation! Shows the rocket traveling along a parabolic arc with visual indicators (╰ · ╯) that trace the launch and descent path, mimicking a real rocket trajectory.

```
╰🚀·          (ascending arc)
 ╰🚀·
  ╰🚀·
   ...
          ╰🚀· (apex)
         ·🚀╯  (descending arc)
        ·🚀╯
   ...
·🚀╯           (landing)
```

**Perfect for:** Representing launch sequences, orbital mechanics, ballistic trajectories

### 3. `rocketLaunch`
**Interval:** 90ms
**Frames:** 13
**Style:** Linear launch sequence

A straightforward left-to-right launch animation. Clean and simple, showing the rocket progressing steadily across the screen.

```
🚀
 🚀
  🚀
   ...
            🚀
```

**Perfect for:** Progress indicators, deployment sequences, simple loading states

### 4. `rocketOrbit`
**Interval:** 70ms
**Frames:** 8
**Style:** Compact circular motion with trail

Fast-paced animation showing the rocket moving through a trail of dots (·), suggesting orbital motion or rapid transit.

```
🚀·······
·🚀······
··🚀·····
   ...
·······🚀
```

**Perfect for:** Quick loading indicators, orbital operations, fast processes

### 5. `rocketTrail`
**Interval:** 85ms
**Frames:** 18
**Style:** Exhaust trail visualization

Shows the rocket with an accumulating exhaust trail (~·) that gradually fades out, creating a visual representation of propulsion and motion.

```
🚀
~🚀
~·🚀
 ~·🚀
  ~·🚀
   ...
            ~·🚀
             ~·
              ~
               (trail fades)
```

**Perfect for:** Deployment processes, data transfers, progressive operations

### 6. `rocketFlight`
**Interval:** 95ms
**Frames:** 18
**Style:** Altitude visualization with U-trajectory

The most sophisticated animation showing the rocket ascending (with increasing altitude bars ▁▂▃▄▅▆▇█) and descending (with decreasing bars), creating a visual U-shape trajectory.

```
🚀              (ground level)
 ▁🚀            (ascending)
  ▂🚀
   ▃🚀
    ▄🚀
     ▅🚀
      ▆🚀
       ▇🚀
        █🚀     (apex)
         🚀
          🚀▇   (descending)
           🚀▆
            🚀▅
             🚀▄
              🚀▃
               🚀▂
                🚀▁
                 🚀 (landing)
```

**Perfect for:** Upload/download progress, deployment with stages, data synchronization

## How Spinners Work

Each spinner is defined with:
- `interval`: Time in milliseconds between frames
- `frames`: Array of strings that cycle to create animation

The renderer cycles through the frames array at the specified interval, creating the illusion of motion.

## Usage Examples

### Basic Usage (Node.js)
```js
import cliSpinners from 'cli-spinners';

console.log(cliSpinners.rocketArc);
// {
//   interval: 80,
//   frames: ['╰🚀·          ', ' ╰🚀·         ', ...]
// }
```

### With ora (recommended)
```js
import ora from 'ora';
import cliSpinners from 'cli-spinners';

const spinner = ora({
  text: 'Deploying to production...',
  spinner: cliSpinners.rocketFlight
}).start();

// Your async operation
await deployToProduction();

spinner.succeed('Deployed successfully!');
```

### Demo Script
```bash
# Run the demo script to see any rocket animation
node demo-rockets.js rocketArc
node demo-rockets.js rocketFlight
node demo-rockets.js rocketTrail

# Or use the standard example script
node example.js rocket
```

## Design Philosophy

These animations were designed to:
1. **Visualize actual rocket physics** - U-shape trajectories mimic real ballistic paths
2. **Provide visual variety** - Different styles for different use cases
3. **Maintain performance** - Optimized frame counts and intervals
4. **Stay terminal-friendly** - Use widely-supported Unicode characters

## Choosing the Right Rocket

| Use Case | Recommended Spinner | Why |
|----------|-------------------|-----|
| Long deployments | `rocketFlight` | Visual altitude feedback |
| Quick operations | `rocketOrbit` | Fast, compact |
| Data transfers | `rocketTrail` | Shows directional flow |
| Launch sequences | `rocketArc` | Most realistic trajectory |
| General loading | `rocket` | Simple, clean |
| Progressive tasks | `rocketLaunch` | Linear progression |

## Technical Details

### Frame Construction
Each frame is carefully spaced to ensure:
- Consistent width (prevents terminal jitter)
- Smooth visual transitions
- Emoji compatibility across terminals

### Interval Tuning
Intervals were chosen to balance:
- Smooth motion (not too slow)
- CPU efficiency (not too fast)
- Visual clarity (readable at speed)

## Testing

View all rocket animations:
```bash
node example.js rocket
node example.js rocketArc
node example.js rocketLaunch
node example.js rocketOrbit
node example.js rocketTrail
node example.js rocketFlight
```

## Credits

Inspired by the parabolic trajectory of real rocket launches, particularly the SpaceX Falcon 9 booster return sequences which create beautiful U-shaped arcs in the night sky.
