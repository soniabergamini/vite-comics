<script>

export default {
    name: "AppHeader"
}

</script>

<template>
    <!-- Header Nav -->
    <nav class="flex justify-between max-w-5xl border w-full p-[0.5em]">

        <!-- DC Brand Logo -->
        <div>
            <a href="#">
                <img src="../assets/img/dc-logo.png" alt="dc-logo" class="">
            </a>
        </div>

        <!-- Nav Menu Links -->
        <div class="h-full">
            <ul class="flex gap-[1em] text-xs h-full items-center">
                <li class="hover:border-b-4 h-full flex items-center border-primaryBlu hover:text-primaryBlu font-bold">
                    <a href="#">CHARACTERS</a>
                </li>
                <li class="hover:border-b-4 h-full flex items-center border-primaryBlu hover:text-primaryBlu font-bold">
                    <a href="#">COMICS</a>
                </li>
                <li class="hover:border-b-4 h-full flex items-center border-primaryBlu hover:text-primaryBlu font-bold">
                    <a href="#">MOVIES</a>
                </li>
                <li class="hover:border-b-4 h-full flex items-center border-primaryBlu hover:text-primaryBlu font-bold">
                    <a href="#">TV</a>
                </li>
                <li class="hover:border-b-4 h-full flex items-center border-primaryBlu hover:text-primaryBlu font-bold">
                    <a href="#">GAMES</a>
                </li>
                <li class="hover:border-b-4 h-full flex items-center border-primaryBlu hover:text-primaryBlu font-bold">
                    <a href="#">COLLECTIBLES</a>
                </li>
                <li class="hover:border-b-4 h-full flex items-center border-primaryBlu hover:text-primaryBlu font-bold">
                    <a href="#">VIDEOS</a>
                </li>
                <li class="hover:border-b-4 h-full flex items-center border-primaryBlu hover:text-primaryBlu font-bold">
                    <a href="#">FANS</a>
                </li>
                <li class="hover:border-b-4 h-full flex items-center border-primaryBlu hover:text-primaryBlu font-bold">
                    <a href="#">NEWS</a>
                </li>
                <li class="hover:border-b-4 h-full flex items-center border-primaryBlu hover:text-primaryBlu font-bold">
                    <a href="#">SHOP</a>
                </li>
            </ul>
        </div>

    </nav>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;
</style>