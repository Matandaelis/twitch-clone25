---
name: add-new-feature-with-component-and-store
description: Workflow command scaffold for add-new-feature-with-component-and-store in twitch-clone25.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-new-feature-with-component-and-store

Use this workflow when working on **add-new-feature-with-component-and-store** in `twitch-clone25`.

## Goal

Implements a new feature by creating React component(s), corresponding styled files, and Redux store slice(s).

## Common Files

- `src/components/*/*.jsx`
- `src/components/*/*.styled.js`
- `src/store/*.js`
- `src/store/index.js`
- `src/views/*/*.jsx`
- `src/utils/*.js`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create new React component(s) in src/components/FeatureName/FeatureName.jsx
- Create corresponding styled file(s) in src/components/FeatureName/FeatureName.styled.js
- Add or update Redux slice in src/store/featurename.js
- Update src/store/index.js to include the new slice
- Update or create utility files if needed (e.g., src/utils/feature.js)

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.