import Vue from 'vue'

export default async (_, inject) => {
  let sliceMachine = new Vue({
    methods: {
      resolver({ sliceName, i }) {
        return [ import(`/Users/procrates/dev/prismic/testing/slices/${sliceName}.vue`), import(`/Users/procrates/dev/prismic/testing/slices/${sliceName}/index.vue`), import(`/Users/procrates/dev/prismic/testing/slices/${sliceName}/index.js`), import(`/Users/procrates/dev/prismic/testing/slices/${sliceName}/${sliceName}.vue`) ]
      }
    }
  })
  inject('sliceMachine', sliceMachine);
}
