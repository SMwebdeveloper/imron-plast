<template>
  <div class="bg-gray-50 h-full">
    <Navbar/>
    <About/>
    <Products/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import About from './components/About.vue';
import Products from './components/Products.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    About,
    Products
  }
}
</script>

<style>
</style>
