<template>
  <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <h1 class="text-4xl font-bold text-center text-white mb-2">Contact Me</h1>
    <p class="text-gray-400 text-center mb-4">Have a project in mind? Let's talk.</p>
    <p class="text-primary text-center text-lg font-semibold mb-8">Call or send a message to: <a href="tel:0719457934" class="hover:underline">0719457934</a></p>
    
    <div class="bg-surface p-8 rounded-2xl border border-white/5 shadow-2xl">
       <form @submit.prevent="sendMessage" class="space-y-6">
          <div>
             <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
             <input v-model="name" type="text" id="name" class="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Your Name" required />
          </div>
          <div>
             <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
             <input v-model="email" type="email" id="email" class="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="your@email.com" required />
          </div>
          <div>
             <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
             <textarea v-model="message" id="message" rows="4" class="w-full px-4 py-3 bg-background border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="How can I help you?" required></textarea>
          </div>
          <button type="submit" class="w-full py-4 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:shadow-primary/50 transition-all transform hover:-translate-y-1">
             Send Message
          </button>
       </form>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact - Kupakwashe Chikata'
})

const name = ref('')
const email = ref('')
const message = ref('')

const sendMessage = () => {
  const subject = `Portfolio Contact from ${name.value}`
  const body = `Name: ${name.value}%0D%0AEmail: ${email.value}%0D%0A%0D%0AMessage:%0D%0A${message.value}`
  window.location.href = `mailto:kupachikata@gmail.com?subject=${subject}&body=${body}`
}
</script>
