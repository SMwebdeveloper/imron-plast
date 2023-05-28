<template lang="">
    <div id="products" class="mb-5 lg:mb-16 pt-16">
      <div class="container mx-auto px-3">
        <div class="text-center">
            <h2 class="text-[20px] md:text-[28px] lg:text-[36px] text-[#4f83a7] font-semibold mb-3">Каталог</h2>
            <div class="flex flex-wrap justify-center items-center  mb-8">
                <ProductItems v-for="product in products" :key="product.title" :product="product"/>
            </div>
            <!-- <button @click="cardLength(2)"  class="mx-auto py-3 px-8 text-[18px] text-center text-blue-500 border-blue-500 border-solid border-[1px] hover:bg-blue-500 hover:text-white duration-300 rounded-xl mb-10">Более</button> -->
           <div>
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
    ProductItems,
  },
  data () {
    return {
        products: data.products,
    }
  }
}
</script>
<style lang="">
</style>