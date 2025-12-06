# Project Structure Registry

> **Status**: Active
> **Last Updated**: 2025-12-05
> **Description**: Central graph of all project components and their relationships.

## 1. Core Architecture
- **Framework**: Nuxt 4
- **Package Manager**: `pnpm` (Strict)
- **Architecture Pattern**: Split Context (App vs Server)

### Directory Map
| Context | Path | Contents |
| :--- | :--- | :--- |
| **App** | `app/` | `pages`, `components`, `stores`, `composables`, `utils`, `assets`, `middleware`, `plugins`, `app.vue` |
| **Root** | `./` | `server/`, `public/`, `content/`, `modules/`, `nuxt.config.ts`, `package.json` |

## 2. Feature Registry

### State Management (Pinia)
- **Configuration**: [Pinia Setup](./logs/tree/pinia-setup.md)
- **Location**: `app/stores/`
- **Modules**:
  - `app/stores/counter.ts`
    - **Role**: Demo counter with persistence.
    - **Network**:
      - *Used By*: `app/pages/demo.vue`
      - *Persistence*: Enabled

### Application Entry
- `app/app.vue`
  - **Role**: Root Vue component.
  - **Network**:
    - *Components*: `<NuxtLayout>`, `<NuxtPage>`, `<NuxtRouteAnnouncer>`

### UI Architecture (Scaffold)
- **Spec**: [Basic Scaffold Spec](./specs/basic-scaffold.md)
- **Layouts**:
  - `app/layouts/default.vue`
    - *Uses*: `AppHeader`, `AppFooter`
- **Components**:
  - `app/components/AppHeader.vue`: Main Navigation.
  - `app/components/AppFooter.vue`: Site Footer.
- **Pages**:
  - `app/pages/index.vue` (Home)
  - `app/pages/about.vue` (About)
  - `app/pages/demo.vue` (Demo)
    - *Uses*: `app/stores/counter.ts`, `server/api/info.ts`

### Server API
- `server/api/info.ts`
  - **Role**: Demo API returning system status.
  - **Network**:
    - *Called By*: `app/pages/demo.vue`

## 3. Utilities & Tools Registry
*(See `docs/utils.md` for detailed API usage)*

- **External Libs**:
  - `pinia-plugin-persistedstate` (*Used By*: `nuxt.config.ts`)

## 4. Documentation Graph
- **Workflow**: [Prompt / Protocol](./prompt.md)
- **Logs**: [Timeline](./logs/time_line.md)
