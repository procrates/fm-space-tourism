<template>
  <slice-zone
    type="front-page"
    queryType="single"
    class="flex flex-col flex-1 h-full md:content-center"
  />
</template>

<script>
import SliceZone from 'vue-slicezone'
export default {
  name: 'Frontpage',

  components: {
    SliceZone,
  },
}
</script>