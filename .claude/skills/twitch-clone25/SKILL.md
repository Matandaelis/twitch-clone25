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
feat: Expand LiveKit live shopping platform
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

### Add New Feature With Component And Store

Implements a new feature by creating React component(s), corresponding styled files, and Redux store slice(s).

**Frequency**: ~2 times per month

**Steps**:
1. Create new React component(s) in src/components/FeatureName/FeatureName.jsx
2. Create corresponding styled file(s) in src/components/FeatureName/FeatureName.styled.js
3. Add or update Redux slice in src/store/featurename.js
4. Update src/store/index.js to include the new slice
5. Update or create utility files if needed (e.g., src/utils/feature.js)
6. Update view(s) to use the new component(s)

**Files typically involved**:
- `src/components/*/*.jsx`
- `src/components/*/*.styled.js`
- `src/store/*.js`
- `src/store/index.js`
- `src/views/*/*.jsx`
- `src/utils/*.js`

**Example commit sequence**:
```
Create new React component(s) in src/components/FeatureName/FeatureName.jsx
Create corresponding styled file(s) in src/components/FeatureName/FeatureName.styled.js
Add or update Redux slice in src/store/featurename.js
Update src/store/index.js to include the new slice
Update or create utility files if needed (e.g., src/utils/feature.js)
Update view(s) to use the new component(s)
```

### Add New View Or Page

Adds a new page or view to the application, typically under src/views, sometimes with associated components.

**Frequency**: ~2 times per month

**Steps**:
1. Create new view file in src/views/ViewName.jsx
2. Optionally create a styled file in src/views/ViewName.styled.js
3. Update navigation or routing in src/App.jsx or related files
4. Add or update components used in the new view

**Files typically involved**:
- `src/views/*.jsx`
- `src/views/*.styled.js`
- `src/App.jsx`
- `src/components/*/*.jsx`

**Example commit sequence**:
```
Create new view file in src/views/ViewName.jsx
Optionally create a styled file in src/views/ViewName.styled.js
Update navigation or routing in src/App.jsx or related files
Add or update components used in the new view
```

### Add New Component With Styles

Adds a new UI component along with its styled file, typically for modular UI development.

**Frequency**: ~3 times per month

**Steps**:
1. Create new component file in src/components/ComponentGroup/ComponentName.jsx
2. Create corresponding styled file in src/components/ComponentGroup/ComponentName.styled.js

**Files typically involved**:
- `src/components/*/*.jsx`
- `src/components/*/*.styled.js`

**Example commit sequence**:
```
Create new component file in src/components/ComponentGroup/ComponentName.jsx
Create corresponding styled file in src/components/ComponentGroup/ComponentName.styled.js
```

### Update Or Add Redux Store Slice

Adds or updates a Redux store slice for new state management needs.

**Frequency**: ~2 times per month

**Steps**:
1. Create or update slice file in src/store/featurename.js
2. Update src/store/index.js to include the slice
3. Update components or views to use the new slice

**Files typically involved**:
- `src/store/*.js`
- `src/store/index.js`
- `src/components/*/*.jsx`
- `src/views/*/*.jsx`

**Example commit sequence**:
```
Create or update slice file in src/store/featurename.js
Update src/store/index.js to include the slice
Update components or views to use the new slice
```

### Update Readme Documentation

Updates project documentation in README.md.

**Frequency**: ~2 times per month

**Steps**:
1. Edit README.md

**Files typically involved**:
- `README.md`

**Example commit sequence**:
```
Edit README.md
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
