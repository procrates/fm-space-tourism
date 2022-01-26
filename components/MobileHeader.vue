<template>
    <div class="static p-5 overflow-hidden overscroll-none">
        <div class="flex justify-between">

        <NuxtLink to="/" >
            <img src="~/assets/shared/logo.svg" />
        </NuxtLink>
        <button @click="mobileNavState = !mobileNavState">
            <img src="~/assets/shared/icon-hamburger.svg" alt />
        </button>
        </div>
        <transition
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
                class="absolute inset-y-0 right-0 z-20 flex flex-col w-2/3 overflow-x-hidden bg-black backdrop-blur-sm bg-opacity-40 overscroll-none"
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
                    <li
                        v-for="(item,index) in navItems"
                        :key="index"
                        :data-index="index"
                        class="text-xl font-semibold text-light-blue"
                    >
                        <NuxtLink :to="item.slug" class="no-underline">
                            <span class="no-underline text-light-blue">

                                0{{index}}
                            </span>
                            <span class="inline-block uppercase">{{ item.label }}</span>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </transition>
    </div>
</template>

<script>
export default {
watch: {
      $route() {
        this.mobileNavState = false;
      },
    },
data(){
    return{
        mobileNavState: false,
        navItems: [
            {
                id: 0,
                label: "Home",
                slug: "/"
            },
            {
                id: 1,
                label: "destinations",
                slug: "/destinations/moon"
            },
            {
                id: 2,
                label: "crew",
                slug: "/crew/douglas-hurley"
            },
            {
                id: 3,
                label: "technology",
                slug: "/technology/x1"
            },
        ]
    }
}

}
</script>