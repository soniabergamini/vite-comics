<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import json from './dc-comics.json'

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      slidesItems: json,
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
  <header>
    <AppHeader :navItems="navItems" />
  </header>
  <main class="text-white">
    <AppMain :slides="slidesItems" />
  </main>
  <footer class="text-white">
    <AppFooter :mainItems="navItems" />
  </footer>
</template>

<style lang="scss" scoped></style>
