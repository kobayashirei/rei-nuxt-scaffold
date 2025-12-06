# Bug Fix: Demo Page Type Error

Date: 2025-12-05 19:15

## Issue
TypeScript error in `app/pages/demo.vue`:
`Type 'PointerEvent' is not compatible with type 'AsyncDataExecuteOptions'.`

## Cause
The `refresh` function from `useFetch` expects an optional options object, but `@click` passes a `PointerEvent`. TypeScript detects this mismatch.

## Resolution
Wrapped the call in an arrow function to ignore the event argument:
```vue
<button @click="() => refresh()">Refresh Data</button>
```
