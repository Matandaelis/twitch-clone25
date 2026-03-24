---
name: add-new-component-with-styles
description: Workflow command scaffold for add-new-component-with-styles in twitch-clone25.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-new-component-with-styles

Use this workflow when working on **add-new-component-with-styles** in `twitch-clone25`.

## Goal

Adds a new UI component along with its styled file, typically for modular UI development.

## Common Files

- `src/components/*/*.jsx`
- `src/components/*/*.styled.js`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create new component file in src/components/ComponentGroup/ComponentName.jsx
- Create corresponding styled file in src/components/ComponentGroup/ComponentName.styled.js

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.