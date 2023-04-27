<template lang="">
    <div id="products" class="mb-5 lg:mb-16">
      <div class="container mx-auto md:px-0 px-3">
        <div class="text-center">
            <h2 class="text-[20px] md:text-[28px] lg:text-[36px] text-[#4f83a7] font-semibold mb-3">Каталог</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 text-center mb-16">
                <ProductItems v-for="product in products" :key="product.title" :product="product"/>
            </div>
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
  }
}
</script>
<style lang="">
</style>