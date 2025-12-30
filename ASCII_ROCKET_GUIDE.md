# ASCII Rocket Animation Guide

## Pure ASCII Art - No Emojis!

These rocket animations use **only ASCII characters** to create realistic U-shape rocket trajectories, inspired by spinners like "pong" and "shark" in the cli-spinners collection.

## Design Philosophy

Instead of using emoji rockets (🚀), we use creative ASCII art to represent:
- **Rocket orientation** (direction of flight)
- **Trajectory paths** (U-shaped arcs)
- **Exhaust trails** (propulsion effects)
- **Ground/altitude references** (launch and landing)

## ASCII Character Key

### Rocket Shapes
```
|>   - Rocket pointing right (horizontal flight)
^>   - Rocket pointing up-right (ascending)
^    - Rocket pointing straight up (vertical climb)
<^   - Rocket pointing up-left (apex transition)
v    - Rocket pointing down (descending)
<v   - Rocket pointing down-left (descent)
<\   - Rocket angled down-left
<|   - Rocket pointing left (return flight)
/>   - Rocket pointing up-right (initial climb)
```

### Effects
```
*    - Exhaust/fire
**   - Double exhaust trail
~    - Smoke
·    - Dots for orbital path
_    - Ground level/baseline
▐ ▌  - Walls/boundaries (pong-style)
```

## The 6 ASCII Rocket Animations

### 1. **rocket** - Pong-Style Oscillation
```
Interval: 90ms | 21 frames

▐|>          ▌  → Rocket pointing right
▐ |>         ▌  → Moving right
▐  |>        ▌  → ...
      ...
▐          |>▌  → Rightmost position
▐         <| ▌  → Turning around
▐        <|  ▌  → Moving left
      ...
▐<|          ▌  → Leftmost position
```

**Innovation:** Enclosed in walls like "pong", shows rocket reversing direction
**Best for:** Contained loading animations, back-and-forth operations

---

### 2. **rocketArc** - Full U-Trajectory ⭐
```
Interval: 80ms | 24 frames

LAUNCH SEQUENCE:
▐_           ▌  ← Ground (launch pad)
▐|>          ▌  ← Liftoff (horizontal start)
▐ />         ▌  ← Angling upward
▐  />        ▌  ← Climbing
▐   ^>       ▌  ← Steeper climb
▐    ^>      ▌  ← ...
▐     ^      ▌  ← Vertical ascent
▐      ^     ▌  ← Rising
▐       ^    ▌  ← ...
▐        ^   ▌  ← ...
▐         ^  ▌  ← ...
▐          ^ ▌  ← Near apex
▐          ^▌   ← Apex (highest point)

DESCENT SEQUENCE:
▐         <^▌   ← Starting descent
▐        <^ ▌   ← Angling down
▐       <^  ▌   ← ...
▐      v    ▌   ← Vertical descent
▐     v     ▌   ← Falling
▐    <v     ▌   ← Angled descent
▐   <\      ▌   ← Steeper angle
▐  <\       ▌   ← ...
▐ <|        ▌   ← Approaching ground
▐<|         ▌   ← Landing approach
▐_          ▌   ← Landed (ground)
```

**Innovation:** Complete parabolic arc with orientation changes showing realistic flight physics
**Best for:** Deployment sequences, launch operations, any process with stages

---

### 3. **rocketLaunch** - Diagonal Ascent
```
Interval: 100ms | 13 frames

|>           ← Ground launch (horizontal)
 |>          ← Moving right
  />         ← Angling up
   />        ← ...
    ^>       ← Climbing
     ^>      ← ...
      ^      ← Vertical
       ^     ← Rising
        ^    ← ...
         ^   ← ...
          ^  ← ...
           ^ ← Near top
            ^← Apex
```

**Innovation:** Progressive orientation change from horizontal to vertical
**Best for:** Linear progress with stages, build processes

---

### 4. **rocketOrbit** - Circular Path
```
Interval: 70ms | 9 frames

|> ·······  ← Start (right-pointing)
·> ······   ← Moving into dots
··>······   ← ...
···>·····   ← ...
····^····   ← Center (pointing up)
·····^···   ← ...
······<··   ← Turning left
·······<·   ← ...
········<   ← End (left-pointing)
```

**Innovation:** Shows rocket rotating through circular path with dots
**Best for:** Continuous processes, orbital operations, circular progress

---

### 5. **rocketTrail** - Exhaust Visualization
```
Interval: 85ms | 18 frames

|>            ← Clean launch
*|>           ← Exhaust starts
**/>          ← Trail grows
 **/>         ← Rocket advancing
  **/>        ← Trail following
   **^>       ← Climbing
    **^>      ← ...
     **^      ← ...
      **^     ← Moving right
       **^    ← ...
        **^   ← ...
         **^  ← ...
          **^ ← ...
           **^← Exhaust trail
            **← Rocket exits
             *← Trail fading
              ← Clean end
```

**Innovation:** Double-asterisk exhaust trail that follows the rocket
**Best for:** Data transfers, streaming, directional operations

---

### 6. **rocketFlight** - Altitude Markers
```
Interval: 95ms | 23 frames

ASCENT WITH GROUND REFERENCE:
_|>__________  ← Ground level (altitude 0)
_  |>________  ← Rising
__  />_______  ← ...
___  />______  ← Climbing
____  ^>_____  ← ...
_____  ^>____  ← ...
______  ^____  ← ...
_______  ^___  ← ...
________  ^__  ← ...
_________  ^_  ← ...
__________  ^  ← Near apex
__________  ^  ← Apex (max altitude)

DESCENT WITH GROUND REFERENCE:
_________  <^  ← Descending
________  <^_  ← ...
_______  v___  ← Falling
______  v____  ← ...
_____  <v____  ← ...
____  <\_____  ← ...
___  <\______  ← ...
__  <|_______  ← ...
_  <|________  ← ...
_ <|_________  ← ...
_<|__________  ← Touchdown
```

**Innovation:** Underscores show altitude relative to ground, creating visual depth
**Best for:** Multi-stage deployments, operations with measurable progress

---

## Creative ASCII Techniques Used

### 1. **Directional Characters**
By changing the rocket's ASCII representation based on direction:
- `|>` = right
- `^` = up
- `<|` = left
- `v` = down
- Combinations like `/>`, `^>`, `<^`, `<\`, `<v` for diagonals

### 2. **Visual Boundaries**
Using `▐` and `▌` (like "pong") creates:
- Defined space
- Visual containment
- Clear start/end points

### 3. **Ground Reference**
Underscores `_` provide:
- Launch pad visualization
- Altitude context
- Landing zone

### 4. **Trail Effects**
Asterisks `*` and other chars show:
- Propulsion
- Motion direction
- Fading effects

### 5. **Orientation Changes**
The rocket symbol morphs to show:
- Realistic physics
- Direction of travel
- Velocity changes

## Comparison with Emoji Version

| Aspect | Emoji Version | ASCII Version |
|--------|--------------|---------------|
| Compatibility | Limited (requires emoji support) | Universal (pure ASCII) |
| Visual Impact | 🚀 High (colorful) | ⭐ High (creative) |
| Creativity | Simple (one character) | Complex (multi-char art) |
| Terminal Support | Modern terminals only | All terminals |
| File Size | Larger (multi-byte) | Smaller (single-byte) |
| Originality | Common | Unique |

## Inspiration

These animations were inspired by:

1. **"pong" spinner** - Using boundaries and ball position
2. **"shark" spinner** - Using `|\` characters for the shark fin
3. **Real rocket physics** - Orientation changes during flight
4. **Classic ASCII art** - Terminal-based graphics tradition
5. **The U-shape trajectory** - Your rocket launch image showing the parabolic arc

## Technical Notes

### Character Spacing
Each frame maintains consistent width to prevent terminal jitter:
```javascript
// All frames same length:
"▐|>          ▌"  // 14 chars
"▐ |>         ▌"  // 14 chars
```

### Escape Characters
Backslash `\` needs careful handling in JSON:
```json
"▐   <\\      ▌"  // Escaped backslash
```

### Frame Timing
Intervals tuned for smooth visual flow:
- 70ms = Fast (rocketOrbit)
- 80-100ms = Medium (most rockets)
- Each creates different "speed" perception

## Usage Examples

### Basic Node.js
```javascript
import cliSpinners from 'cli-spinners';

// Pure ASCII rocket with U-trajectory
const spinner = cliSpinners.rocketArc;
console.log(spinner.frames[0]); // ▐_           ▌
console.log(spinner.frames[5]); // ▐    ^>      ▌
```

### With ora
```javascript
import ora from 'ora';
import cliSpinners from 'cli-spinners';

const spinner = ora({
  text: 'Launching deployment...',
  spinner: cliSpinners.rocketFlight
}).start();

await deploy();
spinner.succeed('Launch successful!');
```

### Demo
```bash
node example.js rocketArc      # See the full arc
node example.js rocketFlight   # See altitude changes
node example.js rocketTrail    # See exhaust trail
```

## Why ASCII is Better for This Project

1. **Universal Compatibility** - Works in any terminal, any system
2. **Creative Challenge** - More interesting than emoji
3. **Terminal Heritage** - Honors ASCII art tradition
4. **Unique** - Original designs, not just using emoji
5. **File Size** - Smaller, faster loading
6. **Timeless** - Won't break with emoji changes

## ASCII Art Rocket Gallery

```
Launch Positions:
  |>    Simple rocket right
  ^     Rocket pointing up
  <|    Rocket pointing left

Diagonal Flights:
  />    Ascending right
  <\    Descending left
  ^>    Steep climb right
  <v    Steep descent left

Complex Rockets:
  *|>   Rocket with exhaust
  **^   Rocket with double trail
  _|>_  Rocket on launch pad

Orientations Around the Arc:
  Ground → |> → /> → ^> → ^ → <^ → v → <v → <\ → <| → Ground
  (Perfect U-shape trajectory!)
```

---

**Created with:** Pure ASCII creativity
**No emojis:** Just classic terminal characters
**Inspiration:** Real rocket physics + ASCII art tradition
