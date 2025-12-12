<script lang="ts" setup>
const nuxtApp = useNuxtApp()
const loading = ref(false)

nuxtApp.hook('page:start', () => {
  loading.value = true
})

nuxtApp.hook('page:finish', () => {
  // Add a small delay to prevent flickering on fast loads
  setTimeout(() => {
    loading.value = false
  }, 200)
})
</script>

<template>
  <NuxtLayout>
    <PageLoading :show="loading" />
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* @import url(./assets/styles/theme-colors.css); */
</style>