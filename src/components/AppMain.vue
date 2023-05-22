<script>

import AppMainBanner from './AppMainBanner.vue'
import AppSlides from './AppSlides.vue'

export default {
    name: "AppMain",
    components: {
        AppMainBanner,
        AppSlides
    },
    props: {
        slides: {
            thumb: String,
            series: String
        }
    }
}

</script>

<template>
    <!-- Main Contents -->
    <div class="bg-secondaryBlack w-full my-0 mx-auto flex items-center flex-col">
        <section id="slideSec" class="max-w-5xl w-full p-[0.5em]">

            <!-- Current Series Section -->
            <button class="bg-primaryBlu font-bold py-[0.5em] px-[1em] relative">CURRENT SERIES</button>
            <AppSlides :slides="slides" />
            <div class="w-full text-center">
                <button class="bg-primaryBlu font-bold text-xs py-2 px-12 my-4 hover:text-black hover:bg-white">LOAD
                    MORE</button>
            </div>

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
@use '../variables.scss' as *;

#slideSec>button:first-child {
    top: -1.7rem;
}
</style>
