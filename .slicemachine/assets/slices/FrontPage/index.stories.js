import MyComponent from '../../../../slices/FrontPage';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FrontPage'
}


export const _DefaultSlice = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default-slice","name":"Default slice","slice_type":"front_page","items":[],"primary":{"title":[{"type":"heading1","text":"Mesh synergistic infomediaries","spans":[]}],"description":[{"type":"paragraph","text":"Pariatur culpa pariatur culpa proident elit adipisicing reprehenderit Lorem. Non mollit aliquip est et magna excepteur ad enim dolore culpa veniam. Sint est id incididunt laborum in nisi aute qui occaecat magna ipsum nisi consectetur consequat.","spans":[]}]},"id":"_DefaultSlice"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_DefaultSlice.storyName = 'Default slice'
