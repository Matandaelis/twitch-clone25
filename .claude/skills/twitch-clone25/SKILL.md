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

Follow these commit message conventions based on 40 analyzed commits.

### Commit Style: Free-form Messages

### Prefixes Used

- `feat`

### Message Guidelines

- Average message length: ~36 characters
- Keep first line concise and descriptive
- Use imperative mood ("Add feature" not "Added feature")


*Commit message example*

```text
feat: optimize platform for mobile-first approach with clickable elements
```

*Commit message example*

```text
feat: implement liveshopping technical enhancements
```

*Commit message example*

```text
Merge pull request #3 from Matandaelis/cto/implement-live-commerce-tailwind-system
```

*Commit message example*

```text
feat: Expand LiveKit live shopping platform
```

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

### Feature Development

Standard feature implementation workflow

**Frequency**: ~6 times per month

**Steps**:
1. Add feature implementation
2. Add tests for feature
3. Update documentation

**Files typically involved**:
- `src/components/categories/categoriesmobile/*`
- `src/components/channels/channelsmobile/*`
- `src/components/header/headerdesktop/*`

**Example commit sequence**:
```
mobile designs add to folders and create header for desktop design
change some colors
change some mobile design, create sidebar and slider, create desktop channels
```

### Add Or Enhance Feature With Component And Redux

Implements or enhances a feature by adding/updating React components, their styled files, and related Redux store slices.

**Frequency**: ~2 times per month

**Steps**:
1. Create or update React component(s) in src/components/ or src/views/
2. Create or update corresponding styled component files (*.styled.js)
3. Update or add Redux store slice(s) in src/store/
4. Update or create utility/helper files if needed
5. Wire up new components in parent views or App.jsx

**Files typically involved**:
- `src/components/*/*.jsx`
- `src/components/*/*.styled.js`
- `src/store/*.js`
- `src/views/*.jsx`
- `src/views/*.styled.js`
- `src/App.jsx`

**Example commit sequence**:
```
Create or update React component(s) in src/components/ or src/views/
Create or update corresponding styled component files (*.styled.js)
Update or add Redux store slice(s) in src/store/
Update or create utility/helper files if needed
Wire up new components in parent views or App.jsx
```

### Add Or Update Ui Component With Styling

Adds or updates a UI component and its associated styled file, often for new UI elements or design changes.

**Frequency**: ~2 times per month

**Steps**:
1. Create or update React component (*.jsx) in relevant folder
2. Create or update matching styled component (*.styled.js)
3. Import and use the component in a parent component or view

**Files typically involved**:
- `src/components/**/*.jsx`
- `src/components/**/*.styled.js`

**Example commit sequence**:
```
Create or update React component (*.jsx) in relevant folder
Create or update matching styled component (*.styled.js)
Import and use the component in a parent component or view
```

### Implement Responsive Or Theme Design

Refactors or enhances styling for responsiveness (mobile/desktop) or theme (dark mode, colors) by updating global styles, theme files, and component styles.

**Frequency**: ~1 times per month

**Steps**:
1. Update src/assets/styles/Global.js and/or src/assets/styles/Theme.js
2. Update component styled files (*.styled.js) for new breakpoints or theme variables
3. Update relevant components to use new styles or props

**Files typically involved**:
- `src/assets/styles/Global.js`
- `src/assets/styles/Theme.js`
- `src/components/**/*.styled.js`
- `src/views/**/*.styled.js`

**Example commit sequence**:
```
Update src/assets/styles/Global.js and/or src/assets/styles/Theme.js
Update component styled files (*.styled.js) for new breakpoints or theme variables
Update relevant components to use new styles or props
```

### Add Or Enhance Live Shopping Or Streaming Feature

Implements or enhances live shopping/streaming features by adding/updating streaming/product components, Redux slices, and integrating with LiveKit.

**Frequency**: ~2 times per month

**Steps**:
1. Add or update React components in src/components/Streaming/ and src/components/Products/
2. Add or update Redux slices in src/store/ (e.g., cart.js, streaming.js, product.js, analytics.js, reactions.js)
3. Update or create utility files for LiveKit integration
4. Update views (e.g., src/views/Stream/StreamRoom.jsx) to use new features

**Files typically involved**:
- `src/components/Streaming/*.jsx`
- `src/components/Streaming/*.styled.js`
- `src/components/Products/*.jsx`
- `src/components/Products/*.styled.js`
- `src/store/*.js`
- `src/utils/livekit.js`
- `src/views/Stream/StreamRoom.jsx`

**Example commit sequence**:
```
Add or update React components in src/components/Streaming/ and src/components/Products/
Add or update Redux slices in src/store/ (e.g., cart.js, streaming.js, product.js, analytics.js, reactions.js)
Update or create utility files for LiveKit integration
Update views (e.g., src/views/Stream/StreamRoom.jsx) to use new features
```

### Integrate Or Update Css Framework

Adds or updates a CSS framework (e.g., Tailwind), including configuration and integration with components and global styles.

**Frequency**: ~1 times per month

**Steps**:
1. Install or update package.json and package-lock.json with framework dependencies
2. Add or update framework config files (e.g., tailwind.config.js, postcss.config.js)
3. Update src/index.css and/or global styles
4. Refactor or create components to use new utility classes or framework features

**Files typically involved**:
- `package.json`
- `package-lock.json`
- `tailwind.config.js`
- `postcss.config.js`
- `src/index.css`
- `src/components/**/*.jsx`
- `src/views/**/*.jsx`

**Example commit sequence**:
```
Install or update package.json and package-lock.json with framework dependencies
Add or update framework config files (e.g., tailwind.config.js, postcss.config.js)
Update src/index.css and/or global styles
Refactor or create components to use new utility classes or framework features
```

### Add Or Update Readme

Updates the README.md file for documentation purposes.

**Frequency**: ~1 times per month

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
