---
name: feature-development-multiple-views-and-store
description: Workflow command scaffold for feature-development-multiple-views-and-store in twitch-clone25.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /feature-development-multiple-views-and-store

Use this workflow when working on **feature-development-multiple-views-and-store** in `twitch-clone25`.

## Goal

Implements a new feature or page, touching view files, store (Redux) files, and often related components.

## Common Files

- `src/views/*.jsx`
- `src/store/*.js`
- `src/components/**/*.jsx`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update view files (e.g., src/views/FeaturePage.jsx)
- Create or update store files (e.g., src/store/feature.js, src/store/index.js)
- Create or update component files as needed
- Update navigation or parent files to include new feature

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.