<template>
  <nav class="bg-glass backdrop-blur-md fixed w-full z-50 top-0 border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Kupakwashe.
          </NuxtLink>
        </div>
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <NuxtLink to="/" class="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" active-class="text-primary font-bold">Home</NuxtLink>
            <NuxtLink to="/about" class="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" active-class="text-primary font-bold">About</NuxtLink>
            <NuxtLink to="/services" class="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" active-class="text-primary font-bold">Services</NuxtLink>
            <NuxtLink to="/portfolio" class="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" active-class="text-primary font-bold">Portfolio</NuxtLink>
            <NuxtLink to="/contact" class="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" active-class="text-primary font-bold">Contact</NuxtLink>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button @click="isOpen = !isOpen" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors">
            <span class="sr-only">Open main menu</span>
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-show="isOpen" class="md:hidden bg-background border-b border-white/10">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NuxtLink to="/" class="hover:text-primary block px-3 py-2 rounded-md text-base font-medium" active-class="text-primary font-bold" @click="isOpen = false">Home</NuxtLink>
        <NuxtLink to="/about" class="hover:text-primary block px-3 py-2 rounded-md text-base font-medium" active-class="text-primary font-bold" @click="isOpen = false">About</NuxtLink>
        <NuxtLink to="/services" class="hover:text-primary block px-3 py-2 rounded-md text-base font-medium" active-class="text-primary font-bold" @click="isOpen = false">Services</NuxtLink>
        <NuxtLink to="/portfolio" class="hover:text-primary block px-3 py-2 rounded-md text-base font-medium" active-class="text-primary font-bold" @click="isOpen = false">Portfolio</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-primary block px-3 py-2 rounded-md text-base font-medium" active-class="text-primary font-bold" @click="isOpen = false">Contact</NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false)
</script>

<style scoped>
.bg-glass {
  background-color: rgba(2, 6, 23, 0.8); /* background color with opacity */
}
</style>
