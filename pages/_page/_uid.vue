<template>
  <section>
    <slice-zone :type="$route.params.page" :uid="$route.params.uid" :sliceProps="{menuItems}" />
  </section>
</template>

<script>

import SliceZone from "vue-slicezone";
export default {
  name: "Page",
  components: {
    SliceZone
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at('document.type',params.page),
      {
        orderings: '[document.order desc]'
      }
    )
    if (document) {
      return { menuItems: document.results }

    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
};
</script>