<template lang="">
  <div class="text-center bg-[white] flex flex-col mx-auto items-center shadow-md rounded-md w-[150px] h-[180px] md:w-[250px] md:h-[260px] lg:w-[300px] lg:h-[300px] pb-3 px-2">
    <img :src="getPic(product.img)" :alt="product.title" class="w-[100px] md:w-[220px] h-[70%] object-contain mb-5">
    <h5 class="text-[10px] md:text-[14px] text-[#318888] lg:text-[16px] max-w-[140px] md:max-w-[200px]">{{product.title}}</h5>
  </div>
</template>
<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    getPic(img) {
        console.log(img)
        return require(`@/assets/${img}.png`);
    }
  }
};
</script>
<style lang=""></style>
