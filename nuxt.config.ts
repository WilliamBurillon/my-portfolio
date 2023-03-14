// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    css:[
        //@
        '@/styles/index.scss'
    ],
    modules:[
        '@nuxt/content',
        'nuxt-icon'
    ],
    content : {
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

    }
})
