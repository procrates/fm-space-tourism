<template>
  <div
    class="text-white bg-green-400"
    :class="{ 'absolute w-full h-screen top-0 left-0': menu }"
  >
    <div class="container flex flex-wrap sm:mx-auto">
      <div class="w-auto p-6">
        <!-- Title -->
        <h1 class="hidden sm:block">Menu Mobile First</h1>
        <!-- Icon -->
        <div class="block sm:hidden">
          <i class="fa fa-rocket"></i>
        </div>
      </div>
      <!-- Desktop nav list -->
      <nav class="hidden sm:block">
        <ul class="flex">
          <li v-for="(item, index) in items" :key="index">
            <a :href="item.href" class="block p-6 hover:bg-green-500">
              {{ item.title }}
            </a>
          </li>
        </ul>
      </nav>
      <!-- Toggle menu mobile icon -->
      <div class="p-6 ml-auto sm:hidden" @click="menu = !menu">menu</div>
    </div>
    <!-- Mobile nav list -->
    <nav v-show="menu" class="w-full">
      <ul class="flex flex-col text-center">
        <li v-for="(item, index) in items" :key="index">
          <a :href="item.href" class="block p-6 hover:bg-green-500">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- <div class="static px-6 pt-6 overflow-hidden overscroll-none md:px-0 md:py-0">
    <div class="flex justify-between">
      <NuxtLink to="/" class="md:ml-10 md:mt-6">
        <img src="~/assets/shared/logo.svg" class="w-10 h-10" />
      </NuxtLink>
      <button @click="mobileNavState = !mobileNavState" class="md:hidden">
        <img src="~/assets/shared/icon-hamburger.svg" alt />
      </button>
      <nav
        key="nav"
        class="
          flex flex-col
          content-center
          text-sm
          bg-white bg-opacity-5
          md:block
          w-[450px]
          px-12
          h-24
          backdrop-blur-sm
        "
      >
        <ul
          class="flex flex-row justify-between h-full space-x-3 text-sm font-normal tracking-widest font-barlow-con"
        >
          <li class="h-9 text-light-blue">
            <nuxt-link to="/">
              <span class="inline-block uppercase">Home</span>
            </nuxt-link>
          </li>
          <li
            v-for="(menuLink, index) in $store.state.menu.menuLinks"
            :key="menuLink.id"
            :data-index="index"
            class="text-light-blue"
          >
            <nuxt-link :to="`/${menuLink.link.type}/${menuLink.link.uid}`">
              <span class="inline-block uppercase">{{
                $prismic.asText(menuLink.label)
              }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <transition
      class=""
      enter-active-class="transition-all duration-300"
      enter-class="translate-x-full opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300"
      leave-class="opacity-100"
      leave-to-class="translate-x-full opacity-0"
    >
      <nav
        v-show="mobileNavState"
        key="nav"
        class="absolute inset-y-0 right-0 z-20 flex flex-col w-2/3 overflow-x-hidden bg-black md:hidden backdrop-blur-sm bg-opacity-40 overscroll-none"
      >
        <button
          @click="mobileNavState = !mobileNavState"
          class="self-end mt-2 mr-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-light-blue"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <ul class="flex flex-col mx-auto mt-16 space-y-6">
          <li class="text-xl font-semibold text-light-blue">
            <nuxt-link to="/">
              <span class="no-underline text-light-blue"> 00 </span>
              <span class="inline-block uppercase">Home</span>
            </nuxt-link>
          </li>
          <li
            v-for="(menuLink, index) in $store.state.menu.menuLinks"
            :key="menuLink.id"
            :data-index="index"
            class="text-xl font-semibold text-light-blue"
          >
            <nuxt-link :to="`/${menuLink.link.type}/${menuLink.link.uid}`">
              <span class="no-underline text-light-blue">
                0{{ index + 1 }}
              </span>
              <span class="inline-block uppercase">{{
                $prismic.asText(menuLink.label)
              }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>
  </div> -->
</template>

<script>
export default {
  watch: {
    $route() {
      this.mobileNavState = false
    },
  },
  data() {
    return {
      mobileNavState: false,
      menu: false,
      items: [
        {
          title: 'Home',
          href: '#home',
        },
        {
          title: 'About',
          href: '#about',
        },
        {
          title: 'Contact',
          href: '#contact',
        },
        {
          title: 'App',
          href: '#app',
        },
      ],
    }
  },
}
</script>