<template>
    <div v-if="bgImg !== undefined" class="h-full min-h-screen bg-black bg-opacity-25 bg-cover font-family-bellefair bg-blend-screen" :style="{ backgroundImage: `url(${bgImg})` }"  >

        <MobileHeader></MobileHeader>
        <Nuxt />
    </div>
</template>
<script>
export default {
    data(){
        return{ bgImg: undefined}
    },
    watch: {
        '$route.query': '$fetch'
    },
    async fetch(){
        const isFrontPage = this.$route.name === "index"
        const pageType = this.$route.params.page
        console.log('isfp', isFrontPage)
        console.log('pagetype', pageType)
        const document = await this.$prismic.api.query(
        // With a document type matching "page"
            this.$prismic.predicates.at('document.type', isFrontPage ? 'front-page' : pageType )
        )
        if (document) {
            console.log('doc', document.results[0].data)
            this.bgImg= document.results[0].data.background_image.url 
        } else {
            this.error({ statusCode: 404, message: 'Page not found' })
        }
    }
}
</script>