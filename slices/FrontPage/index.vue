<template>
  <section
    class="flex flex-col items-center h-full mx-10 mt-10  text-light md:max-w-md md:m-auto xl:flex-row xl:justify-around xl:w-full xl:max-w-full"
  >
    <div
      class="
        xl:w-[450px] xl:h-[382px] xl:flex xl:justify-end xl:flex-col
        text-center
        xl:text-left
      "
    >
      <span
        class="text-base uppercase  text-light-blue font-barlow-con md:text-xl xl:text-3xl"
        >{{ slice.primary.SubHeading }}</span
      >
      <prismic-rich-text
        :field="slice.primary.title"
        class="
          text-lg
          uppercase
          font-bellefair
          md:text-9xl md:py-6
          xl:text-[150px]
        "
      />
      <prismic-rich-text
        :field="slice.primary.description"
        class="leading-7 text-center  font-barlow-reg text-light-blue xl:text-left xl:text-base"
      />
    </div>
    <NuxtLink
      :to="`/${slice.primary.link.type}/${slice.primary.link.uid}`"
      class="
        flex
        items-center
        justify-center
        w-40
        h-40
        xl:w-[240px] xl:h-[240px]
        mt-10
        xl:mt-0 xl:self-end
        text-xl
        uppercase
        transition-all
        duration-100
        rounded-full
        hover:ring-lg
        ring-opacity-100
        bg-light
        text-dark
        hover:ring-light-blue
        font-bellefair
        md:mt-40
      "
    >
      <span>
        {{ slice.primary.ButtonText }}
      </span>
    </NuxtLink>
  </section>
</template>

<script>
export default {
  name: 'Frontpage',
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
