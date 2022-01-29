<template>
  <section
    class="flex flex-col items-center pb-10 text-white  md:w-full xl:flex-row xl:justify-center"
  >
    <div class="xl:flex xl:flex-col xl:items-end xl:px-[166px]">
      <h2
        class="py-6 tracking-widest uppercase  md:justify-self-start md:ml-10 md:mt-10 xl:self-start xl:mt-0 xl:-ml-10 xl:text-3xl xl:font-normal font-barlow-con xl:mb-16"
      >
        <span class="mr-3 font-bold opacity-50 text-light-blue"
          >0{{ slice.primary.order }}</span
        >
        <span>{{ slice.primary.pageLabel }}</span>
      </h2>
      <div
        class="
          block
          mt-7
          w-44
          h-44
          xl:w-[450px] xl:h-[450px]
          md:w-80 md:h-80
          mx-auto
        "
      >
        <prismic-image
          :field="slice.primary.image"
          class="object-cover xl:w-[450px] xl:h-[450px]"
        />
      </div>
    </div>
    <div class="mx-auto text-center xl:text-left xl:mx-0">
      <nav
        class="flex justify-center py-5 mx-auto mt-5  md:mx-auto xl:mb-9 xl:mx-0 xl:justify-start"
      >
        <NuxtLink
          :to="`/destinations/${item.uid}`"
          v-for="(item, i) in menuItems"
          exact
          exact-active-class="border-b-2 "
          :key="`slice-item-${i}`"
          class="mr-3 uppercase  last-child:mr-none font-barlow-con text-light-blue"
        >
          <span class="mb-3">
            {{ item.uid }}
          </span>
        </NuxtLink>
      </nav>
      <span
        class="text-6xl uppercase  font-bellefair md:text-lg md:mx-auto xl:text-8xl"
        >{{ slice.primary.title }}</span
      >
      <div class="block mx-4 mt-2 md:max-w-md md:mx-auto">
        <prismic-rich-text
          :field="slice.primary.description"
          class="text-base text-center  text-light-blue font-barlow-reg xl:text-left"
        />
      </div>
      <div
        class="w-11/12 my-10 border-t border-gray-600  xl:mt-14 align-center md:mx-auto xl:w-full"
      ></div>
      <div
        class="text-center  md:flex md:justify-around md:w-full md:max-w-md md:mx-auto xl:text-left xl:justify-start xl:gap-x-8"
      >
        <div>
          <div
            class="mb-3 text-sm tracking-widest uppercase  font-barlow-con text-light-blue"
          >
            Avg. Distance
          </div>
          <span class="mb-3 text-3xl uppercase font-bellefair">{{
            slice.primary.distance
          }}</span>
        </div>
        <div>
          <div
            class="mb-3 text-sm tracking-widest uppercase  font-barlow-con text-light-blue"
          >
            Est. Travle time
          </div>
          <span class="mb-3 text-3xl uppercase font-bellefair">{{
            slice.primary.time
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Planet',
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
    menuItems: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
}
</script>