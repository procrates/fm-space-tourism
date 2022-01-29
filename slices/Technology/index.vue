<template>
  <section
    class="flex flex-col items-center py-6 text-white  xl:py-0 xl:mt-14 xl:mb-5 md:mb-16 md:py-0 md:w-full xl:justify-between xl:flex-row xl:items-start"
  >
    <h1
      class="text-base tracking-widest uppercase  xl:hidden md:self-start font-barlow-con md:ml-10 md:mt-10 xl:text-3xl"
    >
      <span class="mr-4 font-bold opacity-25 text-light-blue">{{
        slice.primary.pageNumber
      }}</span
      >{{ slice.primary.pageTitle }}
    </h1>
    <div
      class="
        xl:order-last
        py-8
        md:py-14 md:w-full
        xl:w-[527px] xl:py-0 xl:mt-16
      "
    >
      <figure class="md:w-full">
        <prismic-image
          :field="slice.primary.imageLandscape"
          v-if="innerWidth < 1440"
          class="object-cover md:h-full h-[170px] md:h-full md:mx-auto"
        />
        <prismic-image
          :field="slice.primary.imagePortrait"
          v-if="innerWidth >= 1440"
          class="justify-end object-cover"
        />
      </figure>
    </div>

    <div
      class="
        mx-auto
        text-center
        md:max-w-md md:text-center
        xl:flex xl:flex-col xl:max-w-max xl:mx-0 xl:ml-[165px]
      "
    >
      <h1
        class="hidden text-base tracking-widest uppercase  xl:block xl:ml-0 md:self-start font-barlow-con md:ml-10 md:mt-10 xl:mb-20 xl:text-3xl"
      >
        <span class="mr-4 font-bold opacity-25 text-light-blue">{{
          slice.primary.pageNumber
        }}</span
        >{{ slice.primary.pageTitle }}
      </h1>
      <div
        class="mx-auto text-center  md:max-w-md md:text-center xl:flex xl:mx-0 xl:max-w-xl"
      >
        <nav
          class="flex justify-center pb-8 space-x-4  xl:flex-col xl:space-x-0 xl:space-y-4"
        >
          <NuxtLink
            :to="`/technology/${item.uid}`"
            v-for="(item, i) in menuItems"
            :key="`slice-item-${i}`"
            class="flex-none text-light-blue"
          >
            <div
              class="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full  xl:w-20 xl:h-20"
              :class="
                $route.params.uid === item.uid
                  ? 'bg-light text-dark'
                  : ' bg-transparent'
              "
            >
              {{ i + 1 }}
            </div>
          </NuxtLink>
        </nav>
        <div class="text-center xl:text-left xl:ml-10">
          <h3 class="pb-2 uppercase opacity-50 font-bellefair font-base">
            {{ slice.primary.terminology }}
          </h3>
          <h2
            class="pb-4 mt-1 text-2xl uppercase  font-bellefair md:text-4xl xl:text-6xl"
          >
            {{ slice.primary.title }}
          </h2>

          <prismic-rich-text
            :field="slice.primary.description"
            class="mx-6 text-base font-barlow-reg text-light-blue xl:mx-0"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Technology',
  data() {
    return {
      innerWidth: null,
    }
  },
  mounted() {
    this.innerWidth = window.innerWidth
  },
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