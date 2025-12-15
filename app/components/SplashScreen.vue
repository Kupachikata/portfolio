<template>
  <transition name="fade">
    <div v-if="loading" class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-white overflow-hidden">
      <!-- Gooey Filter -->
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <!-- Animated Blobs -->
      <div class="gooey-container relative w-64 h-64 flex items-center justify-center filter-goo">
        <div class="blob blob-1 absolute w-16 h-16 bg-primary rounded-full animate-orbit-1"></div>
        <div class="blob blob-2 absolute w-16 h-16 bg-accent rounded-full animate-orbit-2"></div>
        <div class="blob blob-3 absolute w-16 h-16 bg-white rounded-full animate-orbit-3"></div>
        
        <!-- Center Text -->
        <div class="relative z-10 text-4xl font-bold font-mono tracking-widest text-white mix-blend-overlay">
           KC
        </div>
      </div>
      
      <p class="mt-8 text-primary font-medium tracking-[0.2em] animate-pulse">INITIALIZING EXPERIENCE</p>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    required: true
  }
})
</script>

<style scoped>
.filter-goo {
  filter: url('#goo');
}

.blob {
  opacity: 0.8;
}

@keyframes orbit-1 {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -40px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes orbit-2 {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-40px, -40px) scale(0.9); }
  66% { transform: translate(30px, 10px) scale(1.1); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes orbit-3 {
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(0, 50px) scale(0.8); }
  100% { transform: translate(0, 0) scale(1); }
}

.animate-orbit-1 { animation: orbit-1 4s infinite ease-in-out; }
.animate-orbit-2 { animation: orbit-2 5s infinite ease-in-out; }
.animate-orbit-3 { animation: orbit-3 6s infinite ease-in-out; }

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Ensure filter works on Chrome/Safari */
.filter-goo {
   -webkit-filter: url('#goo');
   filter: url('#goo');
}
</style>
