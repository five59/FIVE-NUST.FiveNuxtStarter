// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image',
        '@nuxtjs/google-fonts',
        '@nuxt/content',
        'nuxt-icon',
        '@formkit/nuxt'
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
    },
    image: {},
    googleFonts: {
        families: {
            // Roboto: true,
            // 'Josefin+Sans': true,
            // Lato: [100, 300],
            // Raleway: {
            //   wght: [100, 400],
            //   ital: [100]
        },
    }
})
