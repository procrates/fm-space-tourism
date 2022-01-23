<template>
  <section>
    <slice-zone type="destinations" :uid="$route.params.uid" :sliceProps="{menuItems}" />
  </section>
</template>

<script>

import SliceZone from "vue-slicezone";
export default {
  name: "Homepage",
  components: {
    SliceZone
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.query(
      $prismic.predicates.at('document.type','destinations')
    )
    if (document) {
      return { menuItems: document.results }

    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
};
</script>