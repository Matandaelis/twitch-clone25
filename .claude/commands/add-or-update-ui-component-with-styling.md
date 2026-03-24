---
name: add-or-update-ui-component-with-styling
description: Workflow command scaffold for add-or-update-ui-component-with-styling in twitch-clone25.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-or-update-ui-component-with-styling

Use this workflow when working on **add-or-update-ui-component-with-styling** in `twitch-clone25`.

## Goal

Adds or updates a UI component and its associated styled file, often for new UI elements or design changes.

## Common Files

- `src/components/**/*.jsx`
- `src/components/**/*.styled.js`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create or update React component (*.jsx) in relevant folder
- Create or update matching styled component (*.styled.js)
- Import and use the component in a parent component or view

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.