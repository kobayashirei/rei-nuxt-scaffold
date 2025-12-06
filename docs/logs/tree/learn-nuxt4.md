# Learning Update: Nuxt 4 Architecture

Date: 2025-12-05 18:45

## Actions

1.  **Researched Nuxt 4**:
    - Confirmed the new directory structure: `app/` is the default source directory.
    - Confirmed `server/`, `public/`, and config files remain in root.
    - Validated that `nuxt.config.ts` does not require explicit `srcDir` if files are correctly placed in `app/`.

2.  **Updated Documentation**:
    - **Registry (`docs/structure.md`)**:
        - Updated to reflect the "Split Context" architecture (App vs Server).
        - Explicitly mapped `app/` contents vs Root contents.
    - **Protocol (`docs/prompt.md`)**:
        - Added detailed constraint section for Nuxt 4 structure.
        - Enforced `pnpm` usage.

## Network Updates
- **Architecture**: Officially switched to Nuxt 4 Split Context pattern.
