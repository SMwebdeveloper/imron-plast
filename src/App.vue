<template>
  <div class="bg-gray-50 h-full pt-[100px] overflow-x-hidden">
    <Navbar/>
    <About/>
    <Products/>
    <Delivery/>
    <Location/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import About from './components/About.vue';
import Products from './components/Products.vue';
import Location from './components/Location.vue';
import Delivery from './components/Delivery.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    About,
    Products,
    Delivery,
    Location,
    Footer
  }
}
</script>

<style>
</style>
