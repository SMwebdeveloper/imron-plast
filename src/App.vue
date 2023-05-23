<template>
  <div class="bg-gray-50 h-full bg-gradient-to-r from-[#f5f5f5] to-[#f8f8f8] overflow-x-hidden">
    <Navbar/>
    <Hero/>
    <About/>
    <Products/>
    <Partners/>
    <Delivery/>
    <Location/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Products from './components/Products.vue';
import Partners from './components/Partners.vue';
import Delivery from './components/Delivery.vue';
import Location from './components/Location.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    About,
    Products,
    Partners,
    Delivery,
    Location,
    Footer
  }
}
</script>

<style>
</style>
