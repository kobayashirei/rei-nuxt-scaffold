<template>
  <header class="app-header">
    <nav>
      <NuxtLink to="/" class="brand">Nuxt Scaffold</NuxtLink>
      <div class="links">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/demo">Demo</NuxtLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  border-bottom: 1px solid #eee;
  padding: 1rem 2rem;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}
.brand {
  font-weight: bold;
  font-size: 1.2rem;
  text-decoration: none;
  color: #333;
}
.links {
  display: flex;
  gap: 1.5rem;
}
a {
  text-decoration: none;
  color: #666;
}
a.router-link-active {
  color: #00dc82;
  font-weight: 500;
}
</style>
