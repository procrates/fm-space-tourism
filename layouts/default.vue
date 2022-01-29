<template>
  <div
    class="relative min-h-screen overflow-scroll bg-cover  font-family-bellefair md:flex md:flex-col"
  >
    <div
      v-if="bgImgComputed"
      class="fixed inset-0 w-full min-h-screen transition-opacity duration-200 bg-cover "
      :style="{ backgroundImage: `url(${bgImgComputed})` }"
      style="background-blend-mode: screen; z-index: -1; background-color: #000"
    ></div>
    <Header></Header>
    <nuxt />
  </div>
</template>
<script>
export default {
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic)
  },
  data() {
    return {
      bgImg: {},
      innerWidth: null,
    }
  },
  watch: {
    '$route.query': '$fetch',
  },
  mounted() {
    console.log('', this.bgImg)
    this.innerWidth = window.innerWidth
  },
  computed: {
    bgImgComputed() {
      if (this.innerWidth <= 375 && this.innerWidth < 768) {
        return this.bgImg.background_image_mobile.url
      }
      if (this.innerWidth >= 768 && this.innerWidth < 1440) {
        return this.bgImg.background_image_tablet.url
      }
      if (this.innerWidth <= 1440) {
        return this.bgImg.background_image_desktop.url
      }
      return null
    },
  },
  async fetch() {
    const isFrontPage = this.$route.name === 'index'
    const pageType = this.$route.params.page
    const pageUid = this.$route.params.uid
    try {
      if (isFrontPage) {
        const document = await this.$prismic.api.getSingle('front-page')
        if (document) {
          console.log('docuemnt', document)
          this.bgImg = document.data
        } else {
          this.bgImg = null
          this.$nuxt.error({
            statusCode: 404,
            message: 'Post not found',
          })
        }
      } else if (!isFrontPage && pageType && pageUid) {
        const document = await this.$prismic.api.getByUID(pageType, pageUid)
        if (document) {
          console.log('docuemnt', document.data)
          this.bgImg = document.data
        } else {
          this.bgImg = null
          this.$nuxt.error({
            statusCode: 404,
            message: 'Post not found',
          })
        }
      } else {
        console.log('last else')
        this.bgImg = null
        this.$nuxt.error({
          statusCode: 404,
          message: 'Post not found',
        })
      }
    } catch (e) {
      this.bgImg = null
      console.log('error', e)
    }
  },
}
</script>