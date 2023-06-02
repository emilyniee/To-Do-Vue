<script>
  import Navbar from "./components/Navbar.vue"
  import { RouterView } from 'vue-router'
  

  export default {
    components: {
      Navbar
    }
    
  }
  
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
  * {
      --light-blue: #B3C8F0;
      --grey: #b3b3b3;
      --red: #ffa0a0;

      margin: 0;
      box-sizing: border-box;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      font-weight: 100;
  }

</style>
