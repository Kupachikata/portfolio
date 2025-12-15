<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-12 text-center md:text-left">My Services</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
       <div v-for="service in services" :key="service.title" class="p-8 bg-surface border border-white/5 rounded-2xl hover:border-primary/50 transition-colors group">
          <div class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
             <!-- Placeholder Icon -->
             <span class="text-2xl font-bold">{{ service.icon }}</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">{{ service.title }}</h3>
          <p class="text-gray-400">{{ service.description }}</p>
       </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Services - Kupakwashe Chikata'
})

const services = [
  {
     title: 'Frontend Development',
     description: 'Building responsive, fast, and interactive websites using modern frameworks like Nuxt and Vue.',
     icon: '</>'
  },
  {
     title: 'UI/UX Design',
     description: 'Designing intuitive and aesthetically pleasing interfaces that enhance user experience.',
     icon: 'UI'
  },
  {
     title: 'Web Optimization',
     description: 'Improving website performance, SEO, and accessibility to reach a wider audience.',
     icon: 'Sp'
  },
  {
     title: 'SQL Query Writing',
     description: 'Designing efficient database queries, stored procedures, and optimizing database performance.',
     icon: 'SQL'
  },
  {
     title: 'Data Analysis',
     description: 'Creating interactive dashboards and reports using Power BI to derive actionable insights from data.',
     icon: 'An'
  }
]
</script>
