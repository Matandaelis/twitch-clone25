---
name: add-or-update-design-system-or-theme
description: Workflow command scaffold for add-or-update-design-system-or-theme in twitch-clone25.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-or-update-design-system-or-theme

Use this workflow when working on **add-or-update-design-system-or-theme** in `twitch-clone25`.

## Goal

Updates or introduces new design tokens, global styles, or theming (e.g., Tailwind config, Theme.js, Global.js).

## Common Files

- `src/assets/styles/Theme.js`
- `src/assets/styles/Global.js`
- `tailwind.config.js`
- `src/index.css`
- `package.json`
- `package-lock.json`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Edit or add theme/style files (e.g., src/assets/styles/Theme.js, Global.js, tailwind.config.js)
- Update package.json and package-lock.json for dependencies
- Update index.css or other entry CSS files
- Update component files to use new tokens or classes

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.