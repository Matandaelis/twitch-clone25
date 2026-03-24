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

Follow these commit message conventions based on 34 analyzed commits.

### Commit Style: Free-form Messages

### Prefixes Used

- `feat`

### Message Guidelines

- Average message length: ~29 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
feat: add Tailwind CSS live commerce UI system
```

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
- `tailwind.config.js`

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

Adds a new UI component along with its styled file, often for both desktop and mobile variants.

**Frequency**: ~2 times per month

**Steps**:
1. Create new component file in appropriate directory (e.g., src/components/Feature/FeatureName.jsx)
2. Create corresponding styled file (e.g., FeatureName.styled.js)
3. Optionally update parent or index files to use the new component

**Files typically involved**:
- `src/components/*/*.jsx`
- `src/components/*/*.styled.js`

**Example commit sequence**:
```
Create new component file in appropriate directory (e.g., src/components/Feature/FeatureName.jsx)
Create corresponding styled file (e.g., FeatureName.styled.js)
Optionally update parent or index files to use the new component
```

### Feature Development Multiple Views And Store

Implements a new feature or page, touching view files, store (Redux) files, and often related components.

**Frequency**: ~2 times per month

**Steps**:
1. Create or update view files (e.g., src/views/FeaturePage.jsx)
2. Create or update store files (e.g., src/store/feature.js, src/store/index.js)
3. Create or update component files as needed
4. Update navigation or parent files to include new feature

**Files typically involved**:
- `src/views/*.jsx`
- `src/store/*.js`
- `src/components/**/*.jsx`

**Example commit sequence**:
```
Create or update view files (e.g., src/views/FeaturePage.jsx)
Create or update store files (e.g., src/store/feature.js, src/store/index.js)
Create or update component files as needed
Update navigation or parent files to include new feature
```

### Add Or Update Design System Or Theme

Updates or introduces new design tokens, global styles, or theming (e.g., Tailwind config, Theme.js, Global.js).

**Frequency**: ~1 times per month

**Steps**:
1. Edit or add theme/style files (e.g., src/assets/styles/Theme.js, Global.js, tailwind.config.js)
2. Update package.json and package-lock.json for dependencies
3. Update index.css or other entry CSS files
4. Update component files to use new tokens or classes

**Files typically involved**:
- `src/assets/styles/Theme.js`
- `src/assets/styles/Global.js`
- `tailwind.config.js`
- `src/index.css`
- `package.json`
- `package-lock.json`

**Example commit sequence**:
```
Edit or add theme/style files (e.g., src/assets/styles/Theme.js, Global.js, tailwind.config.js)
Update package.json and package-lock.json for dependencies
Update index.css or other entry CSS files
Update component files to use new tokens or classes
```

### Add New View Page

Creates a new page/view for the application, often with a corresponding styled file.

**Frequency**: ~2 times per month

**Steps**:
1. Create new view file (e.g., src/views/PageName.jsx)
2. Optionally create a styled file (e.g., PageName.styled.js)
3. Update navigation or routing to include the new page

**Files typically involved**:
- `src/views/*.jsx`
- `src/views/*.styled.js`

**Example commit sequence**:
```
Create new view file (e.g., src/views/PageName.jsx)
Optionally create a styled file (e.g., PageName.styled.js)
Update navigation or routing to include the new page
```

### Update Readme Or Documentation

Updates the README.md or other documentation files.

**Frequency**: ~2 times per month

**Steps**:
1. Edit README.md
2. Commit changes

**Files typically involved**:
- `README.md`

**Example commit sequence**:
```
Edit README.md
Commit changes
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
