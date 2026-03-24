---
name: add-new-view-or-page
description: Workflow command scaffold for add-new-view-or-page in twitch-clone25.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-new-view-or-page

Use this workflow when working on **add-new-view-or-page** in `twitch-clone25`.

## Goal

Adds a new page or view to the application, typically under src/views, sometimes with associated components.

## Common Files

- `src/views/*.jsx`
- `src/views/*.styled.js`
- `src/App.jsx`
- `src/components/*/*.jsx`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create new view file in src/views/ViewName.jsx
- Optionally create a styled file in src/views/ViewName.styled.js
- Update navigation or routing in src/App.jsx or related files
- Add or update components used in the new view

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.