<template>
  <div class="min-h-screen flex flex-col bg-background font-sans text-white relative">
    <SplashScreen :loading="isLoading" />
    <FloatingShapes />
    <AppHeader />
    <main class="flex-grow pt-16 relative z-10">
      <slot />
    </main>
    <AppFooter class="relative z-10" />
  </div>
</template>

<script setup>
const isLoading = ref(true)

onMounted(() => {
  // Simulate loading time for splash effect
  setTimeout(() => {
    isLoading.value = false
  }, 2500)
})
</script>
