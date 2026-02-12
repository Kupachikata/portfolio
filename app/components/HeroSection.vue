<template>
  <section class="relative bg-background overflow-hidden min-h-[calc(100vh-4rem)] flex items-center justify-center">
    <!-- Background Pattern -->
    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none"
         style="background-image: radial-gradient(#4b5563 1px, transparent 1px); background-size: 32px 32px;">
    </div>

    <!-- Gradient Background Effect -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-40 animate-pulse" style="animation-delay: 1s;"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-0">
      
      <!-- Text Content -->
      <div class="w-full lg:w-1/2 text-center lg:text-left">
        <h2 class="text-xl md:text-2xl font-bold tracking-wide uppercase text-primary mb-4">
          Hello, It's Me
        </h2>
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Kupakwashe K.F<br />
          <span class="text-gray-400">Chikata</span>
        </h1>
        <h3 class="text-2xl md:text-4xl font-semibold text-white mb-6 h-[40px] md:h-[50px] flex items-center justify-center lg:justify-start">
          And I'm a&nbsp;<span class="text-secondary">{{ currentRole }}</span><span class="animate-blink text-secondary">|</span>
        </h3>
        <p class="text-[#a1a1aa] text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
          I leverage data analysis and full-stack development to build insightful, responsive, and user-friendly web applications. 
          Bringing creativity, code, and data together to drive innovation.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10">
          <NuxtLink to="/contact" class="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-all transform hover:scale-105 text-center">
            Hire Me
          </NuxtLink>
          <NuxtLink to="/portfolio" class="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all transform hover:scale-105 text-center">
            View Work
          </NuxtLink>
        </div>

        <!-- Social Icons Removed per request -->
      </div>

      <!-- Hero Image -->
      <div class="w-full lg:w-1/2 flex justify-center lg:justify-end relative mb-12 lg:mb-0">
         <!-- Mesh Gradient Glow Behind -->
         <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-primary via-secondary to-accent rounded-full blur-[80px] opacity-40 animate-pulse"></div>
         
         <!-- Image Container with Floating Animation -->
         <div class="relative animate-float">
            <div class="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full p-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
               <!-- Inner Circle/Image -->
               <div class="w-full h-full rounded-full overflow-hidden border-4 border-surface relative bg-surface">
                  <!-- Fallback if img fails or is transparent -->
                  <div class="absolute inset-0 bg-gradient-to-b from-primary/10 to-surface"></div> 
                  <img src="/profile.jpg" alt="Kupakwashe Chikata" class="w-full h-full object-cover relative z-10 hover:scale-110 transition-transform duration-500" />
               </div>
            </div>
         </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const roles = ['Full-Stack Developer', 'Data Analyst', 'UI/UX Enthusiast']
const currentRole = ref('')
const isDeleting = ref(false)
const loopNum = ref(0)
const typingSpeed = ref(100)

const type = () => {
  const i = loopNum.value % roles.length
  const fullText = roles[i]

  if (isDeleting.value) {
    currentRole.value = fullText.substring(0, currentRole.value.length - 1)
  } else {
    currentRole.value = fullText.substring(0, currentRole.value.length + 1)
  }

  let delta = 150 - Math.random() * 50

  if (isDeleting.value) {
    delta /= 2
  }

  if (!isDeleting.value && currentRole.value === fullText) {
    delta = 2000
    isDeleting.value = true
  } else if (isDeleting.value && currentRole.value === '') {
    isDeleting.value = false
    loopNum.value++
    delta = 500
  }

  setTimeout(type, delta)
}

onMounted(() => {
  type()
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
.animate-blink {
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
