<template lang="">
    <div id="products" class="mb-5 lg:mb-16 pt-16">
      <div class="container mx-auto px-3 md:px-0">
        <div class="text-center">
            <h2 class="text-[20px] md:text-[28px] lg:text-[36px] text-blue-400 font-semibold mb-3">Каталог</h2>
            <div class="flex flex-wrap gap-5 justify-center items-center  mb-8">
                <ProductItems v-for="product in products" :key="product.title" :product="product"/>
                <ProductItems  v-for="product in productsSecond" :key="product.title" v-show="more" :product="product"/>
            </div>
            <button @click="more = !more"  class="mx-auto py-3 px-8 text-[18px] text-center text-blue-500 border-blue-500 border-solid border-[1px] hover:bg-blue-500 hover:text-white duration-300 rounded-xl mb-10">
              <p v-if="!more">Более</p>
              <p v-if="more">Меньше</p>
            </button>
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
        productsSecond: data.secondProducts,
        more: false
    }
  }
}
</script>
<style lang="">
</style>