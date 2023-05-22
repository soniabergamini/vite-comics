<script>

export default {
    name: "AppMainBanner",
    data() {
        return {
            DCassets: [
                { path: '/buy-comics-digital-comics.png', alt: 'buy-digital-img', text: 'Digital Comics' },
                { path: '/buy-comics-merchandise.png', alt: 'buy-merch-img', text: 'DC Merchandise' },
                { path: '/buy-comics-subscriptions.png', alt: 'buy-sub-img', text: 'Subscription' },
                { path: '/buy-comics-shop-locator.png', alt: 'shop-locator-img', text: 'Comic Shop Locator' },
                { path: '/buy-dc-power-visa.svg', alt: 'power-visa-img', text: 'DC Power Visa' }
            ]
        }
    }
}

</script>

<template>
    <ul class="flex justify-evenly items-center w-full">
        <li v-for="item in DCassets" class="flex justify-center h-20">
            <a href="#" class="lg:flex-row">
                <img :src="item.path" :alt="item.alt">
                <span class="min-w-fit text-[0.625rem] md:text-xs">{{ item.text.toUpperCase() }}</span>
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../variables.scss' as *;

li {
    width: calc(100% / 5 - 1em);

    &:hover {
        box-shadow: 0px 10px 13px -7px #000000, 0px 50px 19px 16px rgba(0, 0, 0, 0);
    }

    a {
        align-items: center;
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 1em;
        justify-content: center;

        img {
            max-width: 3rem;
            max-height: 2.75rem;
        }
    }
}
</style>
