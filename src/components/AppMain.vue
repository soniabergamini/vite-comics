<script>
import AppMainBanner from './AppMainBanner.vue'

export default {
    name: "AppMain",
    components: {
        AppMainBanner
    }
}

</script>

<template>
    <!-- Main Contents -->
    <div class="bg-secondaryBlack w-full my-0 mx-auto flex items-center flex-col">
        <section class="max-w-5xl w-full h-32 flex items-center p-[0.5em]">
            <p class="text-xl"> - - > Content goes here </p>
        </section>
    </div>

    <!-- Main Banner -->
    <div class="bg-primaryBlu w-full my-0 mx-auto flex items-center flex-col">
        <section class="max-w-5xl w-full h-32 items-center flex">
            <AppMainBanner />
        </section>
    </div>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;
</style>
