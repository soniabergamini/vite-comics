<script>

export default {
    name: "AppSlides",
    props: {
        slides: {
            thumb: String,
            series: String
        }
    }
}

</script>

<template>
    <!-- Current Series Slides  -->
    <section class="w-full flex items-center flex-wrap justify-around gap-[1em] mb-4">
        <template v-for="item in slides">
            <div
                class="w-[calc(100%/3-1rem)] md:w-[calc(100%/4-1rem)] lg:w-[calc(100%/6-1rem)] flex items-center flex-col gap-y-2.5 pad-[0.5em] h-48 cursor-pointer text-left">
                <img :src="item.thumb" alt="cover-img" class="object-cover h-[150px] w-[150px] object-top">
                <span class="text-[0.625rem]">{{ item.series.toUpperCase() }}</span>
            </div>
        </template>
    </section>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;
</style>