<template>
  <section>
      {{$route.params.uid}}
    <slice-zone type="destinations" :uid="$route.params.uid" />
  </section>
</template>

<script>
import SliceZone from "vue-slicezone";
export default {
  name: "Homepage",
  components: {
    SliceZone
  }
};
</script>