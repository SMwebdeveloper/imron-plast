<template>
  <div class="bg-gray-50 h-screen">
    <Navbar/>
    <About/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import About from './components/About.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    About
  }
}
</script>

<style>
</style>
