<template>
  <slice-zone
    :type="$route.params.page"
    :uid="$route.params.uid"
    :sliceProps="{ menuItems }"
    class="md:flex md:h-full md:flex-1"
  />
</template>

<script>
import SliceZone from 'vue-slicezone'
export default {
  name: 'Page',
  scrollToTop: false,
  components: {
    SliceZone,
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at('document.type', params.page),
      {
        orderings: `[my.${params.page}.order]`,
      }
    )
    if (document) {
      return { menuItems: document.results }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>