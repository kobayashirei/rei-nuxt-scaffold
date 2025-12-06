<template>
  <div class="about-page">
    <h1>About Project</h1>
    <div class="content">
      <p>
        This scaffold follows the "Split Context" architecture recommended for Nuxt 4.
      </p>
      <ul>
        <li><strong>Frontend</strong>: All Vue files are in <code>app/</code>.</li>
        <li><strong>Backend</strong>: API routes are in <code>server/</code>.</li>
        <li><strong>Config</strong>: Root level configuration.</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
}
.content {
  line-height: 1.6;
  color: #444;
}
ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}
li {
  margin-bottom: 0.5rem;
}
</style>
