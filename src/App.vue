<template>
  <div class="bg-gray-50 h-full">
    <Navbar/>
    <About/>
    <Products/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import About from './components/About.vue';
import Products from './components/Products.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    About,
    Products,
    Footer
  }
}
</script>

<style>
</style>
