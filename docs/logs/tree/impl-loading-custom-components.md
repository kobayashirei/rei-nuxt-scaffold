# Implementation: Custom Components & Route Loading

Date: 2025-12-13 14:15

## Context

User requested:
1.  **Custom Component Import Example**: How to create and use custom components with auto-imports.
2.  **Route Transition Loading**: A "white screen" prevention mechanism (loading overlay) during route changes.

## Actions

### 1. Fix Configuration Bug
- **Issue**: `app/config/config.ts` contained an accidental `import { title } from "process"`, causing Vite build errors (`process` externalized).
- **Fix**: Removed the invalid import line.

### 2. Implement Route Loading (`PageLoading`)
- **Component**: Created `app/components/PageLoading.vue`.
  - **Features**: Full-screen overlay, backdrop blur, spinner animation, fade transition.
  - **Props**: `show` (boolean).
- **Integration**: Updated `app/app.vue`.
  - **Logic**: Used `nuxtApp.hook('page:start')` to show and `page:finish` to hide the loader. Added a 200ms delay on finish to prevent flickering on fast transitions.
  - **Usage**: `<PageLoading :show="loading" />` placed globally in the layout.

### 3. Implement Custom Component (`CustomCard`)
- **Component**: Created `app/components/custom/Card.vue`.
  - **Features**: Slots for `header`, `default` (body), and `footer`. Styled with shadow and hover effects.
  - **Auto-Import**: Nuxt automatically registers this as `<CustomCard>` (based on directory structure `custom/` + `Card.vue`).
- **Demo**: Updated `app/pages/demo.vue` to include a usage example of `<CustomCard>`.

### 4. Internationalization (i18n)
- **Updates**: Added translations for `nav.tailwind`, `custom_component`, `custom_desc`, and `custom_footer` in `en.json` and `zh.json`.
- **Fix**: Removed angle brackets (`<` and `>`) from JSON strings to prevent `unplugin-vue-i18n` build errors.

## Verification
- **Build**: `pnpm build` passed successfully after i18n fixes.
- **Structure**: Registered new components in `docs/structure.md`.

## Outcome
The project now has a robust route transition loader and a clear example of nested custom component usage, fully integrated with the existing architecture.
