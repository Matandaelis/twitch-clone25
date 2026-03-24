---
name: add-new-view-page
description: Workflow command scaffold for add-new-view-page in twitch-clone25.
allowed_tools: ["Bash", "Read", "Write", "Grep", "Glob"]
---

# /add-new-view-page

Use this workflow when working on **add-new-view-page** in `twitch-clone25`.

## Goal

Creates a new view/page for navigation or feature expansion.

## Common Files

- `src/views/*.jsx`
- `src/views/*.styled.js`

## Suggested Sequence

1. Understand the current state and failure mode before editing.
2. Make the smallest coherent change that satisfies the workflow goal.
3. Run the most relevant verification for touched files.
4. Summarize what changed and what still needs review.

## Typical Commit Signals

- Create new view file in src/views (e.g., src/views/NewPage.jsx)
- Optionally create corresponding styled file (e.g., src/views/NewPage.styled.js)
- Update navigation or router logic to include the new view

## Notes

- Treat this as a scaffold, not a hard-coded script.
- Update the command if the workflow evolves materially.