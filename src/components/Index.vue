<template>
  <div class="index container">
    <div class="card" v-for="shake in shakes" :key="shake.id">
      <div class="card-content">
        <h2 class="indigo-text">{{ shake.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing,index) in shake.ings" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul> 
      </div>
    </div>
  </div>
</template>

<script>
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
  
}
</script>

