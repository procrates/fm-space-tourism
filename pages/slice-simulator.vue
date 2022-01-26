<template>
  <SliceSimulator :state="state" #default="props" >
    <SliceZone v-bind="props" class="bg-black"/>
  </SliceSimulator>
</template>

<script>
import { SliceSimulator } from "@prismicio/slice-simulator-vue";
import SliceZone from "vue-slicezone";

import state from "~/.slicemachine/libraries-state.json";

export default {
  components: {
    SliceSimulator,
    SliceZone
  },
  data() {
    return { state };
  },
  mounted(){
      console.log('state', state)
  }
}
</script>