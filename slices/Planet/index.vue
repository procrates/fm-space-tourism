<template>
  <section  v-if="menuItems" class="flex flex-col items-center pb-10 text-white">
    <h2 class="uppercase"><span class="mr-3">0{{ slice.primary.order }}</span> <span>{{ slice.primary.pageLabel }}</span></h2>
    <div class="block mt-7">

      <prismic-image :field="slice.primary.image" class="object-cover w-44"/>
    </div>
    <nav class="flex mt-7 ">
      <NuxtLink to="#" nuxt-link-active="underline" v-for="(item, i) in menuItems" :key="`slice-item-${i}`" class="mr-3 uppercase last-child:mr-none font-barlow-con text-light-blue">
        {{item.uid}}
      </NuxtLink>
    </nav>
    <span class="mt-6 text-6xl font-bellefair">{{ slice.primary.title }}</span>
    <div class="block mx-4 mt-2">
      <prismic-rich-text :field="slice.primary.description" class="text-base text-center text-light-blue font-barlow-reg"/>
    </div>
    <div class="w-11/12 my-10 border-t border-gray-600 align-center"></div>
    <div class="mb-3 text-sm uppercase font-barlow-con text-light-blue">Avg. Distance</div>
    <span class="mb-3 text-3xl font-bellefair">{{ slice.primary.distance }}</span>
    <div class="mb-3 text-sm uppercase font-barlow-con text-light-blue">Est. Travle time</div>
    <span class="mb-3 text-3xl font-bellefair">{{ slice.primary.time }}</span>
  </section>
</template>

<script>
export default {
  name: "Planet",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
    menuItems:{
      type: Array,
      required:true,
      default(){
        return []
      }
    }
  },
}
</script>