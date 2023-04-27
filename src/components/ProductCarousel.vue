<template lang="">
  <div class="flex flex-col lg:flex-row items-center lg:justify-between lg:h-[380px] bg-white mb-9 rounded-lg shadow-lg py-5 px-6 lg:px-14">
    <div class="lg:text-left">
      <h3 class="text-[18px] md:text-[24px] lg:text-[28px] font-semibold text-gray-500 mb-1 md:mb-2 lg:mb-3">Пакеты с вашим логотипом</h3>
      <h6 class="text-[12px] md:text-[14px] lg:text-[18px] lg:w-[500px] font-bold text-gray-400">Наши продукты с вашим логотипом для продвижения вашего бизнеса</h6>
    </div>
    <div class='max-w-[550px]'>
      <carousel
        :perPage="1"
        paginationEnable="true"
        paginationColor="#b3b3b3"
        paginationActiveColor="#494ce8"
      >
        <slide v-for="(item, index) in slide" :key="index">
          <img :src="getPic(item.img)" alt="bag logo" class="w-[270px] sm:w-[400px] md:w-[450px] h-[250px] lg:w-[500px] object-contain mb-0 mx-auto my-auto" />
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "ProductCarousel",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slide: [
        {
          id: "1",
          img: "bag-logo/bag-logo-1",
        },
        {
          id: "2",
          img: "bag-logo/bag-logo-3",
        },
        {
          id: "3",
          img: "bag-logo/bag-logo-4",
        },
        {
          id: "4",
          img: "bag-logo/bag-logo-5",
        },
        {
          id: "5",
          img: "bag-logo/bag-logo-6",
        },
        {
          id: "6",
          img: "bag-logo/bag-logo-7",
        },
        {
          id: "7",
          img: "bag-logo/bag-logo-9",
        },
      ],
    };
  },
  methods: {
    getPic(img) {
        return require(`@/assets/${img}.png`);
    }
  }
};
</script>
<style lang="css">
.VueCarousel-dot-container{
    margin: 0;
}
</style>
