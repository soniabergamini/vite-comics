<script>

export default {
    name: "AppFooter"
}

</script>

<template>
    <!-- Footer Section: Links and Brand Logo -->
    <div id="footerLinks" class="w-full my-0 mx-auto flex items-center flex-col bg-cover">
        <section class="max-w-5xl w-full flex justify-between">

            <!-- All Links -->
            <div class="w-2/5 flex gap-[2rem] px-[0.5em] py-7">

                <!-- 1° column of links -->
                <div>
                    <h3 class="text-sm font-bold mb-3.5">DC COMICS</h3>
                    <ul>
                        <li>
                            <a href="#">Characters</a>
                        </li>
                        <li>
                            <a href="#">Comics</a>
                        </li>
                        <li>
                            <a href="#">Movies</a>
                        </li>
                        <li>
                            <a href="#">TV</a>
                        </li>
                        <li>
                            <a href="#">Games</a>
                        </li>
                        <li>
                            <a href="#">Videos</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                    </ul>
                    <h3 class="text-sm font-bold mt-5 mb-3.5">SHOP</h3>
                    <ul>
                        <li>
                            <a href="#">Shop DC</a>
                        </li>
                        <li>
                            <a href="#">Shop DC Collectibles</a>
                        </li>
                    </ul>
                </div>

                <!-- 2° column of links -->
                <div>
                    <h3 class="text-sm font-bold mb-3.5">DC</h3>
                    <ul>
                        <li>
                            <a href="#">Terms Of Use</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy (New)</a>
                        </li>
                        <li>
                            <a href="#">Ad Choices</a>
                        </li>
                        <li>
                            <a href="#">Advertising</a>
                        </li>
                        <li>
                            <a href="#">Jobs</a>
                        </li>
                        <li>
                            <a href="#">Subscriptions</a>
                        </li>
                        <li>
                            <a href="#">Talent Workshops</a>
                        </li>
                        <li>
                            <a href="#">CPSC Certificates</a>
                        </li>
                        <li>
                            <a href="#">Ratings</a>
                        </li>
                        <li>
                            <a href="#">Shop Help</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <!-- 3° column of links -->
                <div>
                    <h3 class="text-sm font-bold mb-3.5">SITES</h3>
                    <ul>
                        <li>
                            <a href="#">DC</a>
                        </li>
                        <li>
                            <a href="#">MAD Magazine</a>
                        </li>
                        <li>
                            <a href="#">DC Kids</a>
                        </li>
                        <li>
                            <a href="#">DC Universe</a>
                        </li>
                        <li>
                            <a href="#">DC Power Visa</a>
                        </li>
                    </ul>
                </div>

            </div>

            <!-- DC Brand Logo -->
            <div class="w-2/5 bg-cover bg-center"></div>

        </section>

    </div>

    <!-- Final Footer Section: CTA and Social Links -->
    <div class="bg-tertiaryGrey w-full my-0 mx-auto flex items-center flex-col">
        <section class="max-w-5xl w-full h-24 items-center flex p-[0.5em] justify-between">

            <!-- SIGN-UP Button -->
            <button class="border-2 border-primaryBlu text-sm font-bold p-3">SIGN-UP NOW!</button>

            <!-- Social Links -->
            <div class="flex gap-2.5 items-center">
                <h3 class="font-bold text-primaryBlu">FOLLOW US</h3>
                <ul class="flex justify-evenly gap-2.5">
                    <li>
                        <a href="#">
                            <img src="../assets/img/footer-facebook.png" alt="fb-icon">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/footer-twitter.png" alt="fb-icon">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/footer-youtube.png" alt="fb-icon">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/footer-pinterest.png" alt="fb-icon">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="../assets/img/footer-periscope.png" alt="fb-icon">
                        </a>
                    </li>
                </ul>
            </div>

        </section>
    </div>
</template>

<style lang="scss" scoped>
@use '../style.scss' as *;

#footerLinks {
    background-image: url(../assets/img/footer-bg.jpg);

    section>div:first-child {

        li {
            margin-top: -.4em;

            a {
                color: grey;
                font-size: 10px;

                &:hover {
                    color: $primary-blu;
                }
            }
        }
    }

    section>div:last-child {
        background-image: url(../assets/img/dc-logo-bg.png);
    }
}
</style>