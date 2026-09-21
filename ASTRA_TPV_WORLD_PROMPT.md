# Astra implementer prompt

Build a polished browser-based third-person exploration demo with an original tiny-planet meadow setting. Use Three.js and TypeScript. The experience is a calm, toy-like low-poly meadow world. There is no clover search, collection system, score, quest, timer, win state, or game-over state.

Use the five supplied Tripo GLB files: explorer character, round-canopy tree, meadow flower patch, stone well, and cozy cottage. Load assets through `GLTFLoader`, normalize their scale from a central asset manifest, clone skinned characters through `SkeletonUtils`, and show a procedural fallback while a file is missing.

Create a compact spherical or strongly curved grassy world that feels larger than it is. Place the cottage and well as primary landmarks. Reuse the tree and flower patch with deterministic variations in rotation and scale. Keep the path and landmark placement intentional so the player always has something recognizable in view. Use `InstancedMesh` for repeated foliage where practical.

Controls and character:

- `WASD` and arrow keys move relative to the camera.
- Hold `Shift` to run.
- `Space` performs a small grounded jump.
- Blend `Idle`, `Walk`, and `Run` animations. Do not allow animation root motion to reset or teleport the character.
- Rotate the avatar smoothly toward its movement direction.
- Keep the character constrained to the curved terrain and aligned to the local surface normal.

Camera:

- Use a third-person orbit camera behind and slightly above the character. This must never become first-person.
- Allow mouse/touch orbit with a limited pitch range and smooth damping.
- Maintain a readable full-body shot at ordinary speed and pull back slightly while running.
- Add collision avoidance so the camera moves forward instead of clipping into the cottage, well, trees, or terrain.

World presentation:

- Bright blue gradient sky, soft sun, contact shadows, ambient fill, light fog, subtle bloom, and restrained color grading.
- Animate grass and flower patches with a very small wind sway. Keep large static models stable.
- Use soft low-poly materials with coherent saturation across every Tripo asset.
- Add only a minimal control hint that fades after first movement. Do not add a HUD.
- Support desktop keyboard/mouse and basic touch controls.
- Provide Low, Medium, and High quality presets. Keep the default smooth on a modern laptop.

Engineering requirements:

- Keep the scene deterministic for repeatable recording.
- Dispose geometries, materials, textures, mixers, and event listeners correctly.
- Pause animation when the tab is hidden.
- Add a small diagnostic API on `window.cozyWorld.snapshot()` returning player position, camera distance, FPS sample, loaded asset names, and renderer memory.
- Include unit tests for camera-relative movement, grounded jumping, world-surface alignment, and root-motion removal, plus one Playwright smoke test that walks, runs, jumps, and orbits the camera.

The completed result should open directly into exploration after assets load. Do not copy the reference game's UI or clover mechanic; reproduce only its calm miniature-world feeling, third-person readability, and simple exploratory movement.
