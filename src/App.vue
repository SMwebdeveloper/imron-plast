<template>
  <div class="overflow-x-hidden  bg-[#f6f6f6]">
    <Navbar />
    <Hero />
    <About />
    <Choose/>
    <Partners/>
    <Products />
    <ProductCarousel/>
    <!-- <Location/> -->
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Choose from "./components/Choose.vue";
import Products from "./components/Products.vue";
import ProductCarousel from "./components/ProductCarousel.vue";
import Partners from './components/Partners.vue';
// import Location from './components/Location.vue';
// import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
    Navbar,
    Hero,
    About,
    Choose,
    Products,
    ProductCarousel,
    Partners
    // Location,
    // Footer
  },
};
</script>

<style></style>
