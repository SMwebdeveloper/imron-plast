<template>
  <div class="bg-gray-50 h-full pt-[100px]">
    <Navbar/>
    <About/>
    <Products/>
    <Location/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import About from './components/About.vue';
import Products from './components/Products.vue';
import Location from './components/Location.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    About,
    Products,
    Footer,
    Location
  }
}
</script>

<style>
</style>
