<template lang="">
  <div
    class="text-center bg-[white] flex flex-col items-center shadow-md rounded-md w-[150px] h-[180px] md:w-[250px] md:h-[260px] lg:w-[295px] m-1 lg:h-[300px] pt-2 pb-3 px-2"
  >
    <div
      class="w-full bg-[#ccc] h-[70%] rounded-md flex items-center justify-center mb-2"
    >
      <img
        :src="getPic(product.img)"
        :alt="product.title"
        class="w-[100%] md:w-[220px] h-[70%] object-contain mb-5"
      />
    </div>
    <div class="flex w-full justify-between items-center">
      <div>
        <i class="fa-solid fa-star mr-1" style="color: #f8c50d"></i>
        <i class="fa-solid fa-star mr-1" style="color: #f8c50d"></i>
        <i class="fa-solid fa-star mr-1" style="color: #f8c50d"></i>
      </div>
      <i class="fa-solid fa-bag-shopping text-[18px] "></i>
    </div>
    <h5
      class="text-[12px] md:text-[14px] text-[#030505] lg:text-[16px] max-w-[140px] md:max-w-[200px] text-center"
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
