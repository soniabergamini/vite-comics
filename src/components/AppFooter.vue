<script>

export default {
    name: "AppFooter",
    data() {
        return {
            mainItems: [
                'Characters',
                'Comics',
                'Movies',
                'TV',
                'Games',
                'Videos',
                'News'
            ],
            DCitems: [
                'Terms Of Use',
                'Privacy Policy (New)',
                'Ad Choices',
                'Advertising',
                'Jobs',
                'Subscriptions',
                'Talent Workshops',
                'CPSC Certificates',
                'Ratings',
                'Shop Help',
                'Contact Us'
            ],
            sitesItems: [
                'DC',
                'MAD Magazine',
                'DC Kids',
                'DC Universe',
                'DC Power Visa'
            ],
            socialLinks: [
                { path: '/footer-facebook.png', alt: 'fb-icon' },
                { path: '/footer-twitter.png', alt: 'tw-icon' },
                { path: '/footer-youtube.png', alt: 'yt-icon' },
                { path: '/footer-pinterest.png', alt: 'pt-icon' },
                { path: '/footer-periscope.png', alt: 'peri-icon' }
            ]
        }
    }
}

</script>

<template>
    <!-- Footer Section: Links and Brand Logo -->
    <div id="footerLinks" class="w-full my-0 mx-auto flex items-center flex-col bg-cover">
        <section class="max-w-5xl w-full flex justify-between">

            <!-- All Links -->
            <div class="w-2/5 flex gap-[2rem] px-[0.5em] py-7">

                <!-- 1° column of links: DC Comics & Shop -->
                <div>
                    <h3 class="text-sm font-bold mb-3.5">DC COMICS</h3>
                    <ul>
                        <li v-for="item in mainItems">
                            <a href="#">{{ item }}</a>
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

                <!-- 2° column of links: DC -->
                <div>
                    <h3 class="text-sm font-bold mb-3.5">DC</h3>
                    <ul>
                        <li v-for="item in DCitems">
                            <a href="#">{{ item }}</a>
                        </li>
                    </ul>
                </div>

                <!-- 3° column of links: Sites -->
                <div>
                    <h3 class="text-sm font-bold mb-3.5">SITES</h3>
                    <ul>
                        <li v-for="item in sitesItems">
                            <a href="#">{{ item }}</a>
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
                    <li v-for="item in socialLinks">
                        <a href="#">
                            <img :src="item.path" :alt="item.alt">
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