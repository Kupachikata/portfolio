<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-8">About Me</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
       <div>
          <h2 class="text-2xl font-bold text-white mb-6 border-b border-primary/30 pb-2">Professional Experience</h2>
          
          <div class="mb-8 relative pl-6 border-l-2 border-primary/30">
             <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
             <h3 class="text-xl font-semibold text-white">Intern (Development & PowerBI)</h3>
             <p class="text-primary font-medium mb-1">OK Zimbabwe Ltd | 08/2024 - Present</p>
             <p class="text-gray-400 text-sm mb-3">Harare, Zimbabwe</p>
             <p class="text-gray-300 leading-relaxed">
                Currently under internship, contributing to the development of the user-facing OK Zim App, focusing on smart shopping features and stock navigation. Utilizing Power BI to design and maintain data-driven reports and dashboards for strategic business insights.
             </p>
          </div>

          <div class="mb-8 relative pl-6 border-l-2 border-primary/30">
             <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
             <h3 class="text-xl font-semibold text-white">Junior Frontend Developer</h3>
             <p class="text-primary font-medium mb-1">Hushsoft Technologies | 12/2024 - 04/2025</p>
             <p class="text-gray-400 text-sm mb-3">Harare, Zimbabwe</p>
             <p class="text-gray-300 leading-relaxed">
                Collaborated with a team of developers as a junior front-end developer whilst learning the NUXT framework.
             </p>
          </div>

          <h2 class="text-2xl font-bold text-white mb-6 border-b border-primary/30 pb-2">Education</h2>
          
          <div class="space-y-6">
             <div>
                <h3 class="text-lg font-semibold text-white">Bachelor in Technology degree in Computer Science</h3>
                <p class="text-gray-400">Harare Institute of Technology | 08/2023 - Present</p>
             </div>
             <div>
                <h3 class="text-lg font-semibold text-white">Advanced Level</h3>
                <p class="text-gray-400">Dzivaresekwa High 1 | 02/2021 - 12/2022</p>
             </div>
             <div>
                 <h3 class="text-lg font-semibold text-white">Ordinary Level</h3>
                 <p class="text-gray-400">Queen Elizabeth Girls School | 01/2016 - 12/2020</p>
              </div>
          </div>
          
          <h2 class="text-2xl font-bold text-white mt-8 mb-4">Skills</h2>
          <div class="flex flex-wrap gap-6 mb-8">
            <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-center animate-float group" :style="{ animationDelay: skill.delay }">
               <div class="w-16 h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center p-3 shadow-lg group-hover:border-primary/50 transition-colors" :title="skill.name">
                  <img :src="skill.icon" :alt="skill.name" class="w-full h-full object-contain" />
               </div>
               <span class="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{{ skill.name }}</span>
            </div>
          </div>

          <h2 class="text-2xl font-bold text-white mb-4">Certifications</h2>
          <ul class="list-disc list-inside text-gray-300 space-y-1">
             <li>SheCodes Introduction to coding</li>
             <li>Introduction to Web development</li>
          </ul>

       </div>
       <div class="relative sticky top-24">
          <div class="absolute inset-0 bg-gradient-to-r from-primary to-accent blur-2xl opacity-20 rounded-full"></div>
          <img src="/profile.jpg" alt="About Me" class="relative rounded-2xl shadow-2xl border border-white/10 hover:scale-[1.02] transition-transform duration-500 w-full object-cover h-[500px]" />
       </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'About - Kupakwashe Chikata'
})

const skills = [
   { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', delay: '0s' },
   { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', delay: '0.2s' },
   { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', delay: '0.4s' }, // Using MySQL as generic SQL rep
   { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', delay: '0.6s' },
   { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', delay: '0.8s' },
   { name: 'Nuxt', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg', delay: '1s' },
   { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', delay: '1.2s' },
   { name: 'Power BI', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', delay: '1.4s' },
   { name: 'SSMS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', delay: '1.8s' },
   { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', delay: '2.0s' },
   { name: 'Report Builder', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', delay: '2.2s' }
]
</script>

<style scoped>
@keyframes float {
   0%, 100% { transform: translateY(0); }
   50% { transform: translateY(-10px); }
}
.animate-float {
   animation: float 3s ease-in-out infinite;
}
</style>
