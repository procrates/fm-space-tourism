<template>
  <div class="text-white">
    <div class="flex flex-wrap justify-between sm:mx-auto xl:mt-10">
      <!-- Title -->
      <NuxtLink to="/" class="mt-6 ml-6 md:ml-10 md:mt-6 xl:mt-7">
        <img src="~/assets/shared/logo.svg" class="w-10 h-10" />
      </NuxtLink>
      <!-- Desktop nav list -->
      <div
        class="
          hidden
          xl:block
          absolute
          z-10
          text-white
          border-b
          w-[530px]
          top-[88px]
          left-[110px]
          border-gray-500
          opacity-50
        "
      ></div>
      <nav
        class="
          content-center
          hidden
          w-2/3
          h-24
          px-12
          xl:pl-[123px] xl:pr-[165px]
          bg-white
          xl:w-7/12
          bg-opacity-5
          md:flex
          backdrop-blur-lg
          justify-evenly
        "
      >
        <ul
          class="flex items-center justify-around w-full space-x-3 text-sm font-normal tracking-widest  font-barlow-con"
        >
          <li class="h-full text-light-blue">
            <nuxt-link
              to="/"
              class="flex h-full border-b-2 border-transparent  hover:border-b-2 hover:border-gray-500"
              exact
              active-class="border-b-2 border-light"
              exact-active-class="border-b-2 border-light"
            >
              <span
                class="self-center hidden mr-2 font-bold no-underline  xl:inline-block text-light"
              >
                00
              </span>
              <span class="self-center inline-block uppercase">Home</span>
            </nuxt-link>
          </li>
          <li
            v-for="(menuLink, index) in $store.state.menu.menuLinks"
            :key="menuLink.id"
            :data-index="index"
            class="h-full text-light-blue"
          >
            <nuxt-link
              :to="`/${menuLink.link.type}/${menuLink.link.uid}`"
              class="flex h-full border-b-2 border-transparent  hover:border-b-2 hover:border-gray-500"
              exact
              active-class="border-b-2 border-light"
              exact-active-class="border-b-2 border-light"
            >
              <span
                class="self-center hidden mr-2 font-bold no-underline  xl:inline-block text-light"
              >
                0{{ index + 1 }}
              </span>
              <span class="self-center inline-block uppercase">{{
                $prismic.asText(menuLink.label)
              }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <!-- Toggle menu mobile icon -->
      <button @click="menu = !menu" class="mt-8 mr-6 md:hidden">
        <img src="~/assets/shared/icon-hamburger.svg" alt />
      </button>
    </div>
    <!-- Mobile nav list -->
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
        v-show="menu"
        class="absolute inset-y-0 right-0 z-20 flex flex-col w-2/3 h-screen overflow-x-hidden bg-white  md:hidden backdrop-blur-2xl bg-opacity-5 overscroll-none"
      >
        <button @click="menu = !menu" class="self-end mt-8 mr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-light-blue"
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
        <ul
          class="flex flex-col h-full mt-16 ml-10 font-normal tracking-widest  font-barlow-con"
        >
          <li class="mb-8 text-light-blue">
            <nuxt-link to="/" class="hover:underline">
              <span class="no-underline text-light-blue"> 00 </span>
              <span class="uppercase">Home</span>
            </nuxt-link>
          </li>
          <li
            v-for="(menuLink, index) in $store.state.menu.menuLinks"
            :key="menuLink.id"
            :data-index="index"
            class="mb-8 text-light-blue"
          >
            <nuxt-link :to="`/${menuLink.link.type}/${menuLink.link.uid}`">
              <span class="no-underline text-light-blue">
                0{{ index + 1 }}
              </span>
              <span class="uppercase">{{
                $prismic.asText(menuLink.label)
              }}</span>
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </transition>
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
      this.menu = false
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