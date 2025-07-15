<script setup lang="ts">
import topnavigation from './components/topnavigation.vue';
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <topnavigation></topnavigation>
  </header>
  <div>

  <RouterView />
</div>
</template>

<style scoped>
  @reference './assets/main.css';
 .wrapper {
  
 }
</style>
