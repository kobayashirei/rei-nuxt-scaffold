# Basic Scaffold Specification

> **Feature**: Basic Web Application Scaffold
> **Date**: 2025-12-05
> **Status**: Implementation Phase

## 1. Overview
A reference implementation of a standard Nuxt 4 web application structure. It demonstrates routing, layouts, server-side API integration, and state management.

## 2. Architecture

### Network Graph
- **Layouts**:
  - `default.vue`: Wraps all pages.
    - *Uses*: `AppHeader`, `AppFooter`
- **Pages**:
  - `index.vue` (Home): Landing page.
  - `about.vue` (About): Static info.
  - `demo.vue` (Feature Demo):
    - *Uses*: `server/api/info` (Fetch Data)
    - *Uses*: `stores/counter` (State)
- **Server**:
  - `api/info.ts`: Returns mock system info.

## 3. Implementation Details

### Components
- **AppHeader**: Navigation links (`/`, `/about`, `/demo`).
- **AppFooter**: Copyright info.

### Data Flow
1.  **Server**: `api/info.ts` provides JSON `{ version, timestamp }`.
2.  **Client**: `demo.vue` fetches this data using `useFetch`.
3.  **State**: `demo.vue` also interacts with `useCounterStore` to show persistence.

## 4. Nuxt 4 Compliance
- All Vue files in `app/`.
- Server files in `server/`.
