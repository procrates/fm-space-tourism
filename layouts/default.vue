<template>
    <div class="h-full min-h-screen bg-cover bg-home-mobile font-family-bellefair" :class="`bg-${$route.params.page}-mobile`">

        <MobileHeader></MobileHeader>
        <Nuxt />
    </div>
</template>
<script>
export default {
    
}
</script>