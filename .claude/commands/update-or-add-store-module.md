---
name: update-or-add-store-module
description: Workflow command scaffold for update-or-add-store-module in twitch-clone25.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /update-or-add-store-module

Use this workflow when working on **update-or-add-store-module** in `twitch-clone25`.

## Goal

Adds or updates Redux store modules for new features or state slices.

## Common Files

- `src/store/*.js`
- `src/store/index.js`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update store module file in src/store (e.g., src/store/feature.js)
- Update src/store/index.js to include the new or updated module
- Update or create selectors as needed

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.