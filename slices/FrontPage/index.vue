<template>
  <section class="flex flex-col items-center justify-between h-full mx-10 mt-10 text-light">
    <span class="text-base uppercase text-light-blue font-barlow-con ">{{ slice.primary.SubHeading }}</span>
    <prismic-rich-text :field="slice.primary.title" class="text-lg uppercase font-bellefair" />
    <prismic-rich-text :field="slice.primary.description" class="leading-7 text-center font-barlow-reg text-light-blue"/>

    <NuxtLink :to="`/${slice.primary.link.type}/${slice.primary.link.uid}`" class="flex items-center justify-center w-40 h-40 mt-10 text-xl uppercase transition-all duration-100 rounded-full hover:ring-lg ring-opacity-100 bg-light text-dark hover:ring-light-blue font-bellefair">
      <span>
        {{ slice.primary.ButtonText }}
      </span>
    </NuxtLink>
  </section>
</template>

<script>
export default {
  name: "Frontpage",
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
}
</script>
