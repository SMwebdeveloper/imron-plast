<template lang="">
  <div
    class="text-center bg-[white] flex flex-col items-center shadow-md rounded-md w-[300px] h-[350px] md:w-[250px] md:h-[260px] lg:w-[295px] m-1 lg:h-[300px] pt-2 pb-3 px-2"
  >
    <div
      class="w-full bg-[#ccc] h-[70%] rounded-md flex items-center justify-center mb-2"
    >
      <img
        :src="getPic(product.img)"
        :alt="product.title"
        class="w-[100%] md:w-[220px] h-[70%] object-contain mx-auto"
      />
    </div>
    <div class="flex w-full justify-between items-center">
      <div class="text-md md:text-base lg:text-lg">
        <i class="fa-solid fa-star mr-1" style="color: #f8c50d"></i>
        <i class="fa-solid fa-star mr-1" style="color: #f8c50d"></i>
        <i class="fa-solid fa-star" style="color: #f8c50d"></i>
      </div>
      <i class="fa-solid fa-bag-shopping text-md md:text-base lg:text-lg text-blue-500"></i>
    </div>
    <h5
      class="text-[18px] md:text-[14px] text-[#030505] font-bold lg:text-[16px] max-w-[200px] md:max-w-[200px] text-center"
    >
      {{ product.title }}
    </h5>
  </div>
</template>
<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getPic(img) {
      return require(`@/assets/images/${img}.png`);
    },
  },
};
</script>
<style lang=""></style>
