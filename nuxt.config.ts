// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@nuxtjs/google-fonts',
        '@nuxt/content',
        'nuxt-icon',
        '@formkit/nuxt',
        '@hypernym/nuxt-gsap'
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    image: {},
    googleFonts: {}
})
