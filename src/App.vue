<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
      <router-link to="/"></router-link> |
    </div>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style lang="scss">

</style>
