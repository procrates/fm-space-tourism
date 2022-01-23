<template>
  <section>
    <slice-zone type="front-page" queryType="single" />
  </section>
</template>

<script>
import SliceZone from "vue-slicezone";
export default {
  name: "Frontpage",
  components: {
    SliceZone
  }
};
</script>