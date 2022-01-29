<template>
  <section
    class="text-center  text-light md:grid md:grid-cols-1 md:flex-1 md:mt-10 xl:flex xl:w-full xl:mx-40"
  >
    <h1
      class="text-base tracking-widest uppercase  xl:hidden font-barlow-con md:place-self-start md:ml-10"
    >
      <span class="mr-4 font-bold opacity-25 text-light-blue">{{
        slice.primary.pageNumber
      }}</span
      >{{ slice.primary.pageTitle }}
    </h1>
    <div class="py-8 md:order-last md:py-0 xl:self-end xl:ml-20">
      <prismic-image
        :field="slice.primary.image"
        class="object-cover h-56 md:h-[572px] mx-auto"
      />
      <div
        class="h-1 mx-5 border-t border-opacity-25 min-w-min md:hidden"
      ></div>
    </div>
    <nav class="flex justify-center order-5 space-x-4 xl:hidden md:mb-10 pb-7">
      <NuxtLink
        :to="`/crew/${item.uid}`"
        v-for="(item, i) in menuItems"
        :key="`slice-item-${i}`"
        class="flex-none text-light-blue"
      >
        <div
          class="w-2.5 h-2.5 rounded-full"
          :class="$route.params.uid === item.uid ? 'bg-white' : 'bg-gray-500'"
        ></div>
      </NuxtLink>
    </nav>
    <div
      class=" md:max-w-lg md:mx-auto md:pt-14 md:mb-10 xl:mx-0 xl:text-left xl:min-w-max xl:pt-0 xl:justify-around xl:h-full xl:flex-1 xl:flex xl:flex-col"
    >
      <h1
        class="hidden text-base tracking-widest uppercase  xl:block font-barlow-con md:place-self-start md:ml-10 xl:ml-0 xl:mb-16 xl:text-3xl"
      >
        <span class="mr-4 font-bold opacity-25 text-light-blue">{{
          slice.primary.pageNumber
        }}</span
        >{{ slice.primary.pageTitle }}
      </h1>
      <div>
        <h3
          class="pb-2 uppercase opacity-50  font-bellefair font-base md:text-2xl xl:text-4xl"
        >
          {{ slice.primary.role }}
        </h3>
        <h2
          class="pb-4 mt-1 text-2xl uppercase  font-bellefair md:text-4xl xl:text-6xl"
        >
          {{ slice.primary.Name }}
        </h2>
        <prismic-rich-text
          :field="slice.primary.description"
          class="mx-6 text-base  font-barlow-reg text-light-blue xl:mx-0 xl:max-w-sm"
        />
      </div>
      <nav
        class="flex justify-center order-5 space-x-4 md:mb-10 xl:justify-start"
      >
        <NuxtLink
          :to="`/crew/${item.uid}`"
          v-for="(item, i) in menuItems"
          :key="`slice-item-${i}`"
          class="flex-none hidden xl:block text-light-blue"
        >
          <div
            class="w-2.5 h-2.5 rounded-full"
            :class="$route.params.uid === item.uid ? 'bg-white' : 'bg-gray-500'"
          ></div>
        </NuxtLink>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Crew',
  scrollToTop: false,
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