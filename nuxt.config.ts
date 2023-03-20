// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: 'static',
    css:[
        //@
        '@/styles/index.scss'
    ],
    modules:[
        '@nuxt/content',
        'nuxt-icon'
    ],
    content: {
        documentDriven: true,
        highlight: {
            // Theme used in all color schemes.
            theme: 'github-dark-dimmed'
        }
    },
    buildModules: [
        '@nuxtjs/google-fonts'
    ],
    head: {
        title: 'William Burillon',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ],

    },
    app: {
        head: {
            title: 'William Burillon',
        }
    }
})
