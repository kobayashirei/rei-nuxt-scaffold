# Networked Structure Registry Protocol (NSRP)

> **Core Directive**: You are an autonomous AI developer operating within a "Registry-Driven" environment. Your context is transient; the **Structure Registry** is permanent. You must maintain a strictly connected network of documentation.

## 1. The Source of Truth: Structure Registry
**File**: `docs/structure.md`
**Role**: The central nervous system of the project. It maps every active feature, module, component, and utility.
**Rule**: If it's not in the Registry, it doesn't exist.

## 2. Technical Constraints & Conventions (Nuxt 4 Standard)
- **Package Manager**: `pnpm` ONLY.
  - **Prohibited**: `npm`, `yarn`.
- **Directory Structure (Split Context)**:
  - **App Context** (`app/`): ALL frontend source code.
    - `app/components/`
    - `app/pages/`
    - `app/layouts/`
    - `app/stores/`
    - `app/middleware/`
    - `app/composables/`
    - `app/utils/`
    - `app/assets/`
    - `app/app.vue`
  - **Server Context** (`server/`): API routes and server middleware.
    - `server/api/`
    - `server/middleware/`
  - **Root Context** (`./`): Configuration and static files.
    - `nuxt.config.ts`
    - `public/`
    - `content/`
    - `modules/`

## 3. The Workflow (LAIU Loop)

### Phase 1: Locate (Pre-computation)
Before writing code or planning, you MUST locate the relevant node in `docs/structure.md`.
- **Query**: "Where does this new requirement fit?"
- **Action**: Identify the parent section (e.g., "App > Pages", "App > Stores").

### Phase 2: Analyze (Context Loading)
Read the Registry entry and any linked Specification Docs (`docs/specs/*.md`).
- **Goal**: Understand the existing connections. Who uses this? What does it use?

### Phase 3: Implement (Execution)
Write the code, adhering to the project's patterns (Nuxt 4, Pinia, etc.).

### Phase 4: Update & Network (Post-computation)
**This is the most critical step.** You must update the documentation to reflect the new reality.

#### A. Update the Registry (`docs/structure.md`)
1.  **Register**: Add the new item (File, Feature, or Component).
2.  **Link**: Provide a relative link to its file or spec.
3.  **Description**: Briefly describe its role.

#### B. Network the Connections (The "Strong Constraint")
You MUST explicitly mark relationships in the Registry or Spec.
- **Dependencies**: What does this new item use? (e.g., `Uses: [CounterStore]`)
- **Dependents**: Who uses this new item? (e.g., `Used By: [AppHeader, DashboardPage]`)

#### C. Specification (`docs/specs/`)
For non-trivial changes, create/update a Spec file:
- `docs/specs/<name>.md`
- Include: "Network Graph" section listing Inputs (Props/Stores) and Outputs (Events/State).

## 4. Example Registry Entry

```markdown
### User Authentication Module
- **Spec**: [Auth Spec](./specs/auth.md)
- **Files**: 
  - `app/middleware/auth.ts` (Route Guard)
  - `app/stores/auth.ts` (State)
- **Network**:
  - *Uses*: `app/utils/api-client`
  - *Used By*: `app/pages/login.vue`, `app/layouts/default.vue`
```

## 5. Prompt Injection
When starting a session:
1.  **READ `docs/structure.md`**.
2.  **CHECK `docs/logs/time_line.md`** for recent changes.
3.  **ACKNOWLEDGE** the current state of the Network.

---
*Failure to update the Registry breaks the chain of thought for the next iteration. Maintain the Network.*
