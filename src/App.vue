<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>
  <header class="bg-white my-0 mx-auto flex justify-center">
    <AppHeader />
  </header>
  <main class="text-white">
    <AppMain />
  </main>
  <footer class="text-white">
    <AppFooter />
  </footer>
</template>

<style scoped></style>
