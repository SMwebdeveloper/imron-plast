<template lang="">
    <div>
      <div class="container mx-auto md:px-0 px-3">
        <div class="text-center">
            <h2 class="text-[20px] md:text-[28px] lg:text-[36px] text-[#4f83a7] font-semibold mb-3">Каталог</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3 text-center">
                <ProductItems v-for="product in products" :key="product.title" :product="product"/>
            </div>
           <div>
             <h3>пакеты с вашим логотипом</h3>
             <!-- carousel -->
           </div>
        </div>
      </div>
    </div>
</template>
<script>
import ProductItems from './ProductItems.vue';
import data from '@/data.json'
export default {
  name: 'ProductComponent',
  components: {
    ProductItems
  },
  data () {
    return {
        products: data.products
    }
  },
  mounted () {
    console.log(this.products)
  }
}
</script>
<style lang="">
</style>