---
name: twitch-clone25-conventions
description: Development conventions and patterns for twitch-clone25. JavaScript Vite project with freeform commits.
---

# Twitch Clone25 Conventions

> Generated from [Matandaelis/twitch-clone25](https://github.com/Matandaelis/twitch-clone25) on 2026-03-24

## Overview

This skill teaches Claude the development patterns and conventions used in twitch-clone25.

## Tech Stack

- **Primary Language**: JavaScript
- **Framework**: Vite
- **Architecture**: type-based module organization
- **Test Location**: separate

## When to Use This Skill

Activate this skill when:
- Making changes to this repository
- Adding new features following established patterns
- Writing tests that match project conventions
- Creating commits with proper message format

## Commit Conventions

Follow these commit message conventions based on 32 analyzed commits.

### Commit Style: Free-form Messages

### Prefixes Used

- `feat`

### Message Guidelines

- Average message length: ~26 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
feat: Convert Twitch clone to live shopping platform with Immer and LiveKit
```

*Commit message example*

```text
update README.md
```

*Commit message example*

```text
router change for ssr, some fixes
```

*Commit message example*

```text
Update README.md
```

*Commit message example*

```text
some fixes, design desktop views
```

*Commit message example*

```text
create categories for home page
```

*Commit message example*

```text
create tags component
```

*Commit message example*

```text
create new view for the right routes
```

## Architecture

### Project Structure: Single Package

This project uses **type-based** module organization.

### Source Layout

```
src/
├── assets/
├── components/
├── helper/
├── store/
├── utils/
├── views/
```

### Entry Points

- `src/App.jsx`
- `src/main.jsx`

### Configuration Files

- `package.json`

### Guidelines

- Group code by type (components, services, utils)
- Keep related functionality in the same type folder
- Avoid circular dependencies between type folders

## Code Style

### Language: JavaScript

### Naming Conventions

| Element | Convention |
|---------|------------|
| Files | PascalCase |
| Functions | camelCase |
| Classes | PascalCase |
| Constants | SCREAMING_SNAKE_CASE |

### Import Style: Relative Imports

### Export Style: Named Exports


*Preferred import style*

```typescript
// Use relative imports
import { Button } from '../components/Button'
import { useAuth } from './hooks/useAuth'
```

*Preferred export style*

```typescript
// Use named exports
export function calculateTotal() { ... }
export const TAX_RATE = 0.1
export interface Order { ... }
```

## Common Workflows

These workflows were detected from analyzing commit patterns.

### Add New Component With Styles

Adds a new UI component along with its styled file for consistent design.

**Frequency**: ~2 times per month

**Steps**:
1. Create new component file in appropriate directory (e.g., src/components/Feature/Feature.jsx)
2. Create corresponding styled file (e.g., src/components/Feature/Feature.styled.js)
3. Optionally update parent view or list to include the new component

**Files typically involved**:
- `src/components/*/*.jsx`
- `src/components/*/*.styled.js`

**Example commit sequence**:
```
Create new component file in appropriate directory (e.g., src/components/Feature/Feature.jsx)
Create corresponding styled file (e.g., src/components/Feature/Feature.styled.js)
Optionally update parent view or list to include the new component
```

### Add New View Page

Creates a new view/page for navigation or feature expansion.

**Frequency**: ~2 times per month

**Steps**:
1. Create new view file in src/views (e.g., src/views/NewPage.jsx)
2. Optionally create corresponding styled file (e.g., src/views/NewPage.styled.js)
3. Update navigation or router logic to include the new view

**Files typically involved**:
- `src/views/*.jsx`
- `src/views/*.styled.js`

**Example commit sequence**:
```
Create new view file in src/views (e.g., src/views/NewPage.jsx)
Optionally create corresponding styled file (e.g., src/views/NewPage.styled.js)
Update navigation or router logic to include the new view
```

### Update Or Add Store Module

Adds or updates Redux store modules for new features or state slices.

**Frequency**: ~2 times per month

**Steps**:
1. Create or update store module file in src/store (e.g., src/store/feature.js)
2. Update src/store/index.js to include the new or updated module
3. Update or create selectors as needed

**Files typically involved**:
- `src/store/*.js`
- `src/store/index.js`

**Example commit sequence**:
```
Create or update store module file in src/store (e.g., src/store/feature.js)
Update src/store/index.js to include the new or updated module
Update or create selectors as needed
```

### Add Shared Ui Widget

Creates a reusable shared UI widget/component (e.g., DarkMode, Tags, Slide).

**Frequency**: ~2 times per month

**Steps**:
1. Create new shared component in src/components/Share (e.g., src/components/Share/Widget.jsx)
2. Create corresponding styled file (e.g., src/components/Share/Widget.styled.js)
3. Integrate widget into relevant views or components

**Files typically involved**:
- `src/components/Share/*.jsx`
- `src/components/Share/*.styled.js`

**Example commit sequence**:
```
Create new shared component in src/components/Share (e.g., src/components/Share/Widget.jsx)
Create corresponding styled file (e.g., src/components/Share/Widget.styled.js)
Integrate widget into relevant views or components
```

### Update Readme Or Docs

Updates the README or documentation files to reflect new features or changes.

**Frequency**: ~2 times per month

**Steps**:
1. Edit README.md or other documentation files
2. Commit with a message referencing documentation update

**Files typically involved**:
- `README.md`

**Example commit sequence**:
```
Edit README.md or other documentation files
Commit with a message referencing documentation update
```


## Best Practices

Based on analysis of the codebase, follow these practices:

### Do

- Use PascalCase for file names
- Prefer named exports

### Don't

- Don't deviate from established patterns without discussion

---

*This skill was auto-generated by [ECC Tools](https://ecc.tools). Review and customize as needed for your team.*
