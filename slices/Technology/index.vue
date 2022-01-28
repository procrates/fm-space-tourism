<template>
  <section class="py-6 text-center text-white">
    <h1 class="text-base tracking-widest uppercase font-barlow-con">
      <span class="mr-4 font-bold opacity-25 text-light-blue">{{
        slice.primary.pageNumber
      }}</span
      >{{ slice.primary.pageTitle }}
    </h1>
    <div class="py-8">
      <figure>
        <prismic-image
          :field="slice.primary.imageLandscape"
          v-if="innerWidth < 1440"
          class="object-cover h-44"
        />
        <prismic-image
          :field="slice.primary.imagePortrait"
          v-if="innerWidth >= 1440"
          class="justify-end object-cover"
        />
      </figure>
    </div>
    <nav class="flex justify-center pb-8 space-x-4">
      <NuxtLink
        :to="`/technology/${item.uid}`"
        v-for="(item, i) in menuItems"
        :key="`slice-item-${i}`"
        class="flex-none text-light-blue"
      >
        <div
          class="flex items-center justify-center w-10 h-10 border border-gray-500 rounded-full "
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
    <h3 class="pb-2 uppercase opacity-50 font-bellefair font-base">
      {{ slice.primary.terminology }}
    </h3>
    <h2 class="pb-4 mt-1 text-2xl uppercase font-bellefair">
      {{ slice.primary.title }}
    </h2>

    <prismic-rich-text
      :field="slice.primary.description"
      class="mx-6 text-base font-barlow-reg text-light-blue"
    />
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