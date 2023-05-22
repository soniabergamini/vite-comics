<script>

export default {
    name: "AppMainBanner",
    components: {
    }
}

</script>

<template>
    <ul>
        <li>
            <a href="#">
                <img src="../assets/img/buy-comics-digital-comics.png" alt="buy-digital-img">
                <span>DIGITAL COMICS</span>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="../assets/img/buy-comics-merchandise.png" alt="buy-merch-img">
                <span>DC MERCHANDISE</span>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="../assets/img/buy-comics-subscriptions.png" alt="buy-sub-img">
                <span>SUBSCRIPTION</span>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="../assets/img/buy-comics-shop-locator.png" alt="shop-locator-img">
                <span>COMIC SHOP LOCATOR</span>
            </a>
        </li>
        <li>
            <a href="#">
                <img src="../assets/img/buy-dc-power-visa.svg" alt="power-visa-img">
                <span>DC POWER VISA</span>
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
