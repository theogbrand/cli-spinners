# Firework Animations Guide

## Inspired by Claude's Sparkle Characters

These firework animations are original remixes inspired by Anthropic Claude's spinner, using the beautiful star/asterisk characters to create explosive, celebratory animations!

## Character Palette

The six Claude-inspired characters used:

```
·  (U+00B7)  middle dot / bullet
✻  (U+273B)  teardrop-spoked asterisk
✽  (U+273D)  heavy teardrop-spoked asterisk
✶  (U+2736)  six pointed black star
✳  (U+2733)  eight spoked asterisk
✢  (U+2722)  four balloon-spoked asterisk
```

### Visual Progression
```
·  →  ✻  →  ✽  →  ✶  →  ✳  →  ✢
small   burst  bigger  star   radial  balloon
dot     pattern         shape  spokes  spokes
```

## The 5 Firework Animations

### 1. **firework** - Simple Pulse
```
Interval: 100ms | 11 frames | Style: Single sparkle cycle

·       ← Small dot
✻       ← First burst
✽       ← Expanding
✶       ← Star form
✳       ← Maximum spread
✢       ← Peak burst
✶       ← Contracting
✽       ← ...
✻       ← ...
·       ← Back to small
        ← Fade out
```

**Effect:** Single firework pulsing from small to large and back
**Best for:** Simple loading, minimal animations
**Complexity:** ⭐ Simple

---

### 2. **fireworks** - Multiple Bursts ⭐
```
Interval: 120ms | 11 frames | Style: Dual fireworks

Frame 1:    ·        ·      Two ignition points
Frame 2:    ✻        ✻      Initial bursts
Frame 3:   ✽✻✽      ✽✻✽    Expanding symmetrically
Frame 4:   ✶✽✶   ·  ✶✽✶    New burst starts center
Frame 5:  ✳✶✢✶✳  ✻ ✳✶✢✶✳   Maximum complexity!
Frame 6:  ✢ ✳ ✢ ✽✻✽ ✢ ✳ ✢  Spreading out
Frame 7: ·  ✢  · ✶✽✶ ·  ✢ · Particles separating
Frame 8:     ·   ✳✶✳   ·    Fading
Frame 9:          ✢ ✢       Small remnants
Frame 10:         · ·        Almost gone
Frame 11:                    Complete fade
```

**Effect:** Two fireworks bursting simultaneously with overlapping patterns
**Best for:** Celebratory moments, success messages, exciting processes
**Complexity:** ⭐⭐⭐⭐⭐ Very complex

---

### 3. **fireworkBurst** - Single Explosion
```
Interval: 80ms | 11 frames | Style: Centered burst

      ·          Ignition point (center)
      ✻          Initial spark
     ✽✻✽         First expansion
    ✶✽✻✽✶        Growing larger
   ✳✶✽✻✽✶✳       Continuing to expand
  ✢✳✶✽✻✽✶✳✢      Maximum size!
 · ✢✳✶✻✶✳✢ ·     Particles flying outward
   · ✢✳✳✢ ·       Spreading out
     · ✢ ·         Few particles remain
       ·           Single spark
                   Complete fade
```

**Effect:** Classic firework explosion from center point
**Best for:** Completion animations, achievement notifications
**Complexity:** ⭐⭐⭐⭐ Complex

---

### 4. **fireworkCascade** - Diagonal Waterfall
```
Interval: 90ms | 17 frames | Style: Cascading effect

·              Top-left start
✻              Initial burst
✽✻             Cascading diagonally
✶✽·            Multiple particles
✳✶ ✻           Spreading pattern
✢✳ ✽✻          Trail developing
 ✢ ✶✽·         Continuing cascade
  · ✳✶ ✻       Moving right
    ✢✳ ✽✻      Waterfall effect
     ✢ ✶✽·     ...
      · ✳✶ ✻   ...
        ✢✳ ✽✻  ...
         ✢ ✶✽  Almost at end
          · ✳  Few particles
            ✢  Final spark
               Fade
               Complete
```

**Effect:** Firework particles cascading diagonally like a waterfall
**Best for:** Progressive operations, data flow, streaming
**Complexity:** ⭐⭐⭐ Medium-complex

---

### 5. **fireworkLaunch** - Launch & Burst
```
Interval: 100ms | 16 frames | Style: Launch sequence

_              Ground level (launch pad)
·              Launch!
 ·             Rising
  ·            Climbing
   ·           ...
    ·          ...
     ✻         Ignition at altitude!
     ✽✻✽       Initial burst
    ✶✽✻✽✶      Expanding
   ✳✶✽✻✽✶✳     Growing
  ✢✳✶✽✻✽✶✳✢    Maximum explosion!
 · ✢✳✶✻✶✳✢ ·   Spreading
   · ✢✳✳✢ ·     Fading
     · ✢ ·       Dimming
       ·         Last spark
                 Complete
```

**Effect:** Complete firework sequence: launch from ground → rise → burst
**Best for:** Deployment sequences, launch operations, builds
**Complexity:** ⭐⭐⭐⭐ Complex

---

### 6. **fireworkSparkle** - Rotating Sparkles
```
Interval: 70ms | 12 frames | Style: Circular rotation

✻   ✶   ✳      Multiple sparkles
 ✽ ✶ ✳ ✢   ·   Rotating pattern
✶ ✳ ✢ · ✻      ...
✳ ✢ · ✻ ✽ ✶    ...
✢ · ✻ ✽ ✶ ✳    Full circle
· ✻ ✽ ✶ ✳ ✢    Continuing
✻ ✽ ✶ ✳ ✢ ·    ...
✽ ✶ ✳ ✢ · ✻    ...
✶ ✳ ✢ · ✻ ✽    ...
✳ ✢ · ✻ ✽ ✶    ...
✢ · ✻ ✽ ✶ ✳    ...
· ✻ ✽ ✶ ✳ ✢    Back to start
```

**Effect:** Sparkles rotating in a circular pattern
**Best for:** Continuous processes, background tasks, syncing
**Complexity:** ⭐⭐ Medium

---

## Animation Characteristics

### Speed Comparison
```
Fastest:  fireworkSparkle  (70ms)  - Quick rotation
Fast:     fireworkBurst    (80ms)  - Rapid explosion
Medium:   fireworkCascade  (90ms)  - Flowing waterfall
Slow:     firework         (100ms) - Gentle pulse
          fireworkLaunch   (100ms) - Steady sequence
Slowest:  fireworks        (120ms) - Grand display
```

### Visual Complexity
```
Simple:        firework           (single pulse)
               fireworkSparkle    (rotating pattern)

Medium:        fireworkCascade    (diagonal flow)

Complex:       fireworkBurst      (centered explosion)
               fireworkLaunch     (full sequence)

Very Complex:  fireworks          (multiple bursts)
```

### Frame Counts
```
Shortest:  firework         (11 frames)
           fireworks        (11 frames)
           fireworkBurst    (11 frames)
           fireworkSparkle  (12 frames)

Medium:    fireworkLaunch   (16 frames)

Longest:   fireworkCascade  (17 frames)
```

## Design Patterns

### 1. Burst Pattern (Center Explosion)
Used in: `firework`, `fireworks`, `fireworkBurst`, `fireworkLaunch`
```
    ·      Start small
   ✻✻✻     Expand
  ✽✽✽✽✽    Grow
 ✶✶✶✶✶✶✶   Maximum
  ✳✳✳✳✳    Contract
   ✢✢✢     Fade
    ·      End
```

### 2. Flow Pattern (Directional Movement)
Used in: `fireworkCascade`
```
·           Start
 ✻          Move
  ✽         Flow
   ✶        Continue
    ✳       Direction
     ✢      End
```

### 3. Rotation Pattern (Circular Motion)
Used in: `fireworkSparkle`
```
✻ ✶ ✳ ✢ · (rotating arrangement)
· ✻ ✶ ✳ ✢ (shifted position)
✢ · ✻ ✶ ✳ (continuing rotation)
```

### 4. Sequence Pattern (Multi-stage)
Used in: `fireworkLaunch`
```
Stage 1: Launch (ground → air)
Stage 2: Flight (rising dot)
Stage 3: Ignition (first burst)
Stage 4: Explosion (full burst)
Stage 5: Fade (disappear)
```

## Use Case Guide

| Animation | Best For | Vibe |
|-----------|----------|------|
| firework | Simple loading | Gentle, minimal |
| fireworks | Success/celebration | Exciting, grand |
| fireworkBurst | Task completion | Satisfying, impactful |
| fireworkCascade | Data processing | Flowing, progressive |
| fireworkLaunch | Deployments | Dramatic, sequential |
| fireworkSparkle | Background tasks | Subtle, continuous |

## Comparison with Claude's Original

### Claude's Spinner (hypothetical)
```
Likely uses these chars in sequence:
· → ✻ → ✽ → ✶ → ✳ → ✢ → repeat
(Simple rotation or pulse)
```

### Our Firework Remixes
```
Instead of simple rotation, we created:
✓ Explosive burst patterns
✓ Multi-point fireworks
✓ Cascading effects
✓ Launch sequences
✓ Rotating sparkles
✓ Spatial arrangements

More dynamic, more celebratory!
```

## Creative Techniques Used

### 1. Spatial Arrangement
Characters positioned to create shapes:
```
     ✽✻✽        Symmetrical burst
    ✶✽✻✽✶
   ✳✶✽✻✽✶✳      Centered expansion
```

### 2. Character Progression
Size/complexity increases:
```
· (smallest) → ✻ → ✽ → ✶ → ✳ → ✢ (largest)
```

### 3. Multi-point Ignition
Multiple fireworks simultaneously:
```
   ·        ·        Two ignition points
   ✻        ✻        Burst together
  ✽✻✽      ✽✻✽      Create larger effect
```

### 4. Fade Patterns
Gradual disappearance:
```
✢✳✶✽✻✽✶✳✢  (full)
 · ✢✳✳✢ ·  (fading)
   · ✢ ·    (almost gone)
     ·      (final spark)
            (gone)
```

## Technical Details

### Unicode Support
All characters are part of Unicode:
- ✻ ✽ ✶ ✳ ✢ are "Dingbats" block (U+2700–U+27BF)
- · is "Latin-1 Supplement" (U+0080–U+00FF)
- Widely supported in modern terminals

### Performance
- Lightweight (6 characters total)
- Fast rendering
- Low memory footprint
- Smooth animations at 70-120ms intervals

### Terminal Compatibility
- ✓ Modern terminals (excellent)
- ✓ macOS Terminal (excellent)
- ✓ iTerm2 (excellent)
- ✓ Windows Terminal (excellent)
- ⚠ Some legacy terminals (may show as boxes)

## Usage Examples

### Basic
```javascript
import cliSpinners from 'cli-spinners';

console.log(cliSpinners.fireworks.frames[5]);
// ✢ ✳ ✢ ✽✻✽ ✢ ✳ ✢
```

### With ora
```javascript
import ora from 'ora';
import cliSpinners from 'cli-spinners';

const spinner = ora({
  text: 'Deploying to production...',
  spinner: cliSpinners.fireworkLaunch
}).start();

await deploy();
spinner.succeed('🎆 Deployment successful!');
```

### Custom Demo
```bash
node example.js fireworks        # See multiple bursts
node example.js fireworkBurst    # See single explosion
node example.js fireworkLaunch   # See full sequence
node example.js fireworkSparkle  # See rotation
```

## Why Fireworks?

### Symbolism
- **Celebration** - Perfect for success messages
- **Excitement** - Dynamic, eye-catching
- **Achievement** - Reward feeling
- **Energy** - Active, not passive

### Visual Appeal
- **Radial patterns** - Naturally pleasing
- **Growth & fade** - Complete lifecycle
- **Multiple elements** - Rich complexity
- **Movement** - Not static

### Emotional Impact
- **Joy** - Positive association
- **Completion** - Finishing with flair
- **Spectacle** - Memorable moments
- **Energy** - Exciting processes

## Artistic Vision

```
     ✽✻✽
    ✶✽✻✽✶         "We took Claude's sparkle
   ✳✶✽✻✽✶✳         and turned it into
  ✢✳✶✽✻✽✶✳✢        an explosive celebration!"
 · ✢✳✶✻✶✳✢ ·
```

---

**Inspired by:** Anthropic Claude's beautiful ASCII characters
**Remixed into:** 5 original firework animations
**Characters:** · ✻ ✽ ✶ ✳ ✢ (6 sparkle characters)
**Total Frames:** 77 across all animations
**Effect:** Celebratory, explosive, dynamic! 🎆
