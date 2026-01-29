<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
    <!-- Header -->
    <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h1>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, a question, or just want to say hi? I'd love to hear from you. 
            Choose your preferred way to connect below.
        </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        <!-- Interactive Contact Cards -->
        <div class="space-y-6">
            <!-- Email Card -->
            <div class="bg-surface/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:bg-surface hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                <div class="flex items-start space-x-6">
                    <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Email Me</h3>
                        <p class="text-gray-400 mb-4 text-sm leading-relaxed">
                            For project inquiries, collaborations, or just to say hello. I'll get back to you as soon as possible.
                        </p>
                        <a href="mailto:kupachikata@gmail.com" class="text-lg text-primary font-semibold hover:text-white transition-colors flex items-center gap-2">
                            kupachikata@gmail.com
                            <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Phone Card -->
            <div class="bg-surface/50 backdrop-blur-sm p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:bg-surface hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                 <div class="flex items-start space-x-6">
                    <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">Call Me</h3>
                        <p class="text-gray-400 mb-4 text-sm leading-relaxed">
                            Prefer a quick conversation? Feel free to give me a call during business hours.
                        </p>
                        <a href="tel:0719457934" class="text-lg text-primary font-semibold hover:text-white transition-colors flex items-center gap-2">
                            0719 457 934
                             <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-surface p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
           <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
           
           <h3 class="text-2xl font-bold text-white mb-8 relative z-10">Send a Message</h3>
           
           <form @submit.prevent="sendMessage" class="space-y-6 relative z-10">
              <div>
                 <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name</label>
                 <input v-model="name" type="text" id="name" class="w-full px-5 py-3 bg-background/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 focus:bg-background" placeholder="Your Name" required />
              </div>
              <div>
                 <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                 <input v-model="email" type="email" id="email" class="w-full px-5 py-3 bg-background/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 focus:bg-background" placeholder="your@email.com" required />
              </div>
              <div>
                 <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Message</label>
                 <textarea v-model="message" id="message" rows="5" class="w-full px-5 py-3 bg-background/50 border border-gray-700/50 rounded-xl text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600 focus:bg-background resize-none" placeholder="How can I help you?" required></textarea>
              </div>
              <button type="submit" class="w-full py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-primary/50 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                 Send Message
              </button>
           </form>
        </div>
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
