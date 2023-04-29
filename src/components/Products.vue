<template lang="">
    <div id="products" class="mb-5 lg:mb-16 pt-16">
      <div class="container mx-auto md:px-0 px-3">
        <div class="text-center">
            <h2 class="text-[20px] md:text-[28px] lg:text-[36px] text-[#4f83a7] font-semibold mb-3">Каталог</h2>
            <div class="grid items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 mb-8">
                <ProductItems v-for="product in products" :key="product.title" :product="product"/>
            </div>
            <!-- <button  class="mx-auto py-3 px-8 text-[18px] text-white bg-[#1a5c6a] hover:bg-[#249f99] duration-300 rounded-xl mb-10">Более</button> -->
           <div>
             <!-- carousel -->
             <ProductCarousel/>
           </div>
        </div>
      </div>
    </div>
</template>
<script>
import ProductItems from './ProductItems.vue';
import ProductCarousel from './ProductCarousel.vue';
import data from '@/data.json'
export default {
  name: 'ProductComponent',
  components: {
    ProductItems,
    ProductCarousel
  },
  data () {
    return {
        products: data.products
    }
  },
  methods: {
    
  }
}
</script>
<style lang="">
</style>