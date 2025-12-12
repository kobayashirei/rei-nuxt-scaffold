<template>
  <div class="custom-card">
    <div class="custom-card-header">
      <slot name="header">Default Header</slot>
    </div>
    <div class="custom-card-body">
      <slot />
    </div>
    <div class="custom-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.custom-card {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background: white;
  transition: transform 0.2s;
}
.custom-card:hover {
  transform: translateY(-2px);
}
.custom-card-header {
  padding: 1rem;
  background: #f8f9fa;
  border-bottom: 1px solid #e0e0e0;
  font-weight: 600;
  color: #333;
}
.custom-card-body {
  padding: 1rem;
  color: #555;
}
.custom-card-footer {
  padding: 0.75rem 1rem;
  background: #f8f9fa;
  border-top: 1px solid #e0e0e0;
  font-size: 0.875rem;
  color: #666;
}
</style>
