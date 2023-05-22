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
      MenuItems: json
    }
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main class="text-white">
    <AppMain />
  </main>
  <footer class="text-white">
    <AppFooter />
  </footer>
</template>

<style lang="scss" scoped></style>
