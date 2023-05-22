<script>

export default {
    name: "AppHeader",
    data() {
        return {
            navItems: [
                'Characters',
                'Comics',
                'Movies',
                'TV',
                'Games',
                'Collectibles',
                'Videos',
                'Fans',
                'News',
                'Shop'
            ]
        }
    }
}

</script>

<template>
    <!-- Header Nav -->
    <nav class="flex justify-between max-w-5xl w-full p-[0.5em]">

        <!-- DC Brand Logo -->
        <div>
            <a href="#">
                <img src="../assets/img/dc-logo.png" alt="dc-logo" class="">
            </a>
        </div>

        <!-- Nav Menu Links -->
        <div class="h-full">
            <ul class="flex gap-[1em] text-xs h-full items-center">
                <li v-for="item in navItems">
                    <a href="#">{{ item.toUpperCase() }}</a>
                </li>
            </ul>
        </div>

    </nav>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;

li {
    display: flex;
    align-items: center;
    height: 100%;
    font-weight: 800;

    &:hover {
        border-bottom: 4px solid $primary-blu;
        color: $primary-blu;
    }
}
</style>