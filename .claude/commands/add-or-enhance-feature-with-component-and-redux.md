---
name: add-or-enhance-feature-with-component-and-redux
description: Workflow command scaffold for add-or-enhance-feature-with-component-and-redux in twitch-clone25.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-or-enhance-feature-with-component-and-redux

Use this workflow when working on **add-or-enhance-feature-with-component-and-redux** in `twitch-clone25`.

## Goal

Implements or enhances a feature by adding/updating React components, their styled files, and related Redux store slices.

## Common Files

- `src/components/*/*.jsx`
- `src/components/*/*.styled.js`
- `src/store/*.js`
- `src/views/*.jsx`
- `src/views/*.styled.js`
- `src/App.jsx`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update React component(s) in src/components/ or src/views/
- Create or update corresponding styled component files (*.styled.js)
- Update or add Redux store slice(s) in src/store/
- Update or create utility/helper files if needed
- Wire up new components in parent views or App.jsx

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.