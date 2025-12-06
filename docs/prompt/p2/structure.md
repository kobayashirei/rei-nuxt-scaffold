# Project Structure Registry

> **Status**: Active
> **Last Updated**: 2025-12-05
> **Description**: Central graph of all project components and their relationships.

## 1. Core Architecture
- **Framework**: Nuxt 4
- **State**: Pinia (Persisted)
- **UI**: Vue 3 (Composition API)

## 2. Feature Registry

### State Management (Pinia)
- **Configuration**: [Pinia Setup](./logs/tree/pinia-setup.md)
- **Modules**:
  - `stores/counter.ts`
    - **Role**: Demo counter with persistence.
    - **Network**:
      - *Used By*: `app/app.vue`
      - *Persistence*: Enabled

### Application Entry
- `app/app.vue`
  - **Role**: Root component.
  - **Network**:
    - *Uses*: `stores/counter.ts`
    - *Components*: `<NuxtRouteAnnouncer>`

## 3. Utilities & Tools Registry
*(See `docs/utils.md` for detailed API usage)*

- **External Libs**:
  - `pinia-plugin-persistedstate` (*Used By*: `nuxt.config.ts`)

## 4. Documentation Graph
- **Workflow**: [Prompt / Protocol](./prompt.md)
- **Logs**: [Timeline](./logs/time_line.md)
