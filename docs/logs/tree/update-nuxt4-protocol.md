# Update: Nuxt 4 Alignment & Protocol Constraints

Date: 2025-12-05 18:30

## Actions

1.  **Verified Structure**: Confirmed `app/stores/` exists and is correctly populated. (Addressed user concern about "deletion").
2.  **Updated Configuration**:
    - Modified `nuxt.config.ts` to explicitly point Pinia to `app/stores/**`.
3.  **Updated Protocol (`docs/prompt.md`)**:
    - **Constraint**: Enforced Nuxt 4 structure (`app/` directory for all source).
    - **Constraint**: Enforced `pnpm` as the sole package manager.
4.  **Updated Registry (`docs/structure.md`)**:
    - Reflected the `app/` based paths for all modules.
    - Added `pnpm` requirement.

## Network Updates
- **Pinia Module**: Path updated to `app/stores/counter.ts`.
- **Registry**: Now explicitly requires `app/` prefix for new files.
