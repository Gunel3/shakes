<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    <Index :shakes="shakes"/> 
    </div>
    <router-view/>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Index from '@/components/Index.vue'
export default {
   data() {
    return {
      shakes: [
        {
          title: "Brew",
          slug: "brew",
          ings: ["banana", "coffee", "milk"],
          id: "1"
        },
        {
          title: "Morning mood",
          slug: "morning-mood",
          ings: ["mango", "lime", "juice"],
          id: "2"
        }
      ]
    }
  },
  components: {
    Navbar,
    Index
  }
}
</script>
<style lang="scss">

</style>
