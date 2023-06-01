<template lang="">
  <div class="bg-white mb-9 py-5 px-6 lg:px-14">
    <div class="container mx-auto px-3 md:px-0">
      <div
        class="flex flex-col items-center justify-center  w-full"
      >
        <div class="text-center">
          <h3
            class="text-[18px] md:text-[24px] lg:text-[38px] font-semibold text-blue-400 mb-1 md:mb-2 lg:mb-3"
          >
            Пакеты с вашим логотипом
          </h3>
          <h6
            class="text-[12px] md:text-[16px] lg:text-[20px] lg:w-[500px] font-medium text-slate-400 mb-1 md:mb-3"
          >
            Наши продукты с вашим логотипом для продвижения вашего бизнеса
          </h6>
        </div>
        <infinite-slide-bar duration="25s" delay="2s">
        <div class="flex justify-around items-center">
          <div v-for="item in slide" :key="item.id">
            <img
              :src="getPic(item.img)"
              alt="brand logo"
              class=" w-[150px] h-[200px] md:w-[300px] md:h-[350px] object-contain mb-0 mx-auto my-auto"
            />
          </div>
        </div>
      </infinite-slide-bar>
      </div>
    </div>
  </div>
</template>
<script>
import InfiniteSlideBar from "vue-infinite-slide-bar";
export default {
  name: "ProductCarousel",
  components: {
    InfiniteSlideBar
  },
  data() {
    return {
      slide: [
        {
          id: "4",
          img: "bag-logo-5",
        },
        {
          id: "5",
          img: "bag-logo-6",
        },
        {
          id: "6",
          img: "bag-logo-7",
        },
        {
          id: "3",
          img: "havas-png",
        },
        {
          id: "9",
          img: "asia-png",
        },
        {
          id: "10",
          img: "istiqlol-png",
        },
        {
          id: "125",
          img: "asmo-png",
        },
        {
          id: "13",
          img: "davr-png",
        },
        {
          id: "11",
          img: "sarbon-png",
        },
        {
          id: "12",
          img: "gilam-png",
        },
        {
          id: "14",
          img: "rash-milk-png",
        },
        {
          id: "7",
          img: "suv-png",
        },
        {
          id: "18",
          img: "un-png",
        },
        {
          id: "8",
          img: "dinar-png",
        },
      ],
    };
  },
  methods: {
    getPic(img) {
      return require(`@/assets/images/${img}.png`);
    },
  },
};
</script>
<style lang="css">
.VueCarousel-dot-container {
  margin: 0;
}
</style>
