<template lang="">
  <div class="text-center bg-[white] flex flex-col mx-auto items-center shadow-md rounded-md w-[180px] h-[220px] md:w-[250px] md:h-[260px]  lg:h-[300px]">
    <img :src="getPic(product.img)" :alt="product.title" class="max-w-[150px] h-[70%] object-contain mb-3">
    <h5 class="text-[12px] md:text-[14px] lg:text-[16px] max-w-[250px]">{{product.title}}</h5>
  </div>
</template>
<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true
    },
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
