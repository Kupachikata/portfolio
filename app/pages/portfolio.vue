<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-12">My Portfolio</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       <a v-for="project in projects" :key="project.id" :href="project.link" target="_blank" rel="noopener noreferrer" class="rounded-2xl overflow-hidden bg-surface border border-white/5 hover:border-accent/50 transition-all group shadow-lg block">
          <div class="h-48 bg-gray-800 relative overflow-hidden">
             <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
             <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <span class="px-4 py-2 bg-primary rounded-full text-white text-sm font-semibold">View Project</span>
             </div>
          </div>
          <div class="p-6">
             <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
             <p class="text-gray-400 text-sm mb-4">{{ project.category }}</p>
             <p class="text-gray-400 text-sm line-clamp-2 mb-4">{{ project.description }}</p>
          </div>
       </a>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Portfolio - Kupakwashe Chikata'
})

const projects = [
  {
     id: 1,
     title: 'Online Store Website',
     category: 'Web Application',
     description: 'Developing a website using Nuxt that can be used by shops for online shopping.',
     image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
     link: 'https://onlinestorelandingpage.netlify.app/'
  },
  {
     id: 2,
     title: 'DreamPos',
     category: 'Online Point of Sale System',
     description: 'Collaborated with other developers at Hushsoft Technologies in designing the front-end of the DreamPos.',
     image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
     link: 'https://github.com/hushsoft/propos-dashboard-dev'
  },
  {
     id: 3,
     title: 'More Life',
     category: 'Collaboration',
     description: 'A collaborative project I worked on.',
     image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
     link: 'https://morelifeinvestment.netlify.app/'
  },
  {
      id: 4,
     title: 'Rankify',
     category: 'Rank Management System',
     description: 'Lead a team of five in automating a rank management system for Lifestyle association. Implemented automation of ranking calculations.',
     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
     link: '#'
   },
   {
      id: 5,
      title: 'OK Zim App',
      category: 'Smart Shopping & Stock Navigation',
      description: 'A user-centric application designed to revolutionize the shopping experience. Features include real-time stock visibility across branches, navigation to store locations with available stock, and integrated smart shopping tools.',
      image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#'
   }
]
</script>
