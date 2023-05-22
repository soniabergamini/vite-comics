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
    <ul>
        <li v-for="item in DCassets">
            <a href="#">
                <img :src="item.path" :alt="item.alt">
                <span>{{ item.text.toUpperCase() }}</span>
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;

ul {
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 0.75rem;

    li {
        width: calc(100% / 5 - 1em);
        justify-content: center;
        display: flex;

        a {
            align-items: center;
            display: flex;
            gap: 1em;
            justify-content: center;

            img {
                max-width: 3rem;
                max-height: 2.75rem;
            }

            span {
                min-width: fit-content;
            }
        }
    }
}
</style>
