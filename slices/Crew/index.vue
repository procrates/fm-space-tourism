<template>
  <section class="pb-5 text-center text-light">
    <h1 class="my-5 uppercase font-barlow-con"><span class="mr-5 font-bold opacity-25 text-light-blue">{{ slice.primary.pageNumber }}</span>{{ slice.primary.pageTitle }}</h1>
    <div>
    <prismic-image :field="slice.primary.image" class="object-cover mx-auto w-44 "/>
    <span class="w-2/3 border-t-2 border-gray-300"></span>
    </div>
    <nav class="flex mt-7 ">
      <ul class="mx-auto list-disc">

      <NuxtLink :to="`/destinations/${item.uid}`"  v-for="(item, i) in menuItems" :key="`slice-item-${i}`" class="mx-auto text-light-blue">

        <li class="text-4xl"></li>
      </NuxtLink>
      </ul>
    </nav>
    <h3 class="mt-5 uppercase opacity-50 font-bellefair font-base">{{ slice.primary.role }}</h3>
    <h2 class="mt-1 text-2xl uppercase font-bellefair">{{ slice.primary.Name }}</h2>
    <prismic-rich-text :field="slice.primary.description" class="mx-6 text-base font-barlow-reg text-light-blue"/>
  </section>
</template>

<script>
export default {
  name: "Crew",
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