<template lang="">
  <div class="pt-16" id="partners">
    <div class="container mx-auto md:px-0 px-3 text-center">
      <h2 class="text-[24px] md:text-[28px] lg:text-[32px] text-blue-400 font-semibold mb-3 lg:mb-8">Партнеры</h2>
      <div class="hidden lg:flex items-center justify-between">
        <img
          v-for="item in partners"
          :key="item.id"
          :src="getPic(item.img)"
          alt="brand image logo"
          class="w-[150px] h-[150px] object-contain mr-6 last:mr-0"
        />
      </div>
      <div class='lg:hidden'>
      <carousel
        :perPage="1"
        paginationEnable="true"
        paginationColor="#b3b3b3"
        paginationActiveColor="#494ce8"
      >
        <slide v-for="(item, index) in partners" :key="index">
          <img :src="getPic(item.img)" alt="brand logo" class="w-[220px]  h-[150px]  object-contain mb-0 mx-auto my-auto" />
        </slide>
      </carousel>
    </div>
    </div>
  </div>
</template>
<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "ParternsComponent",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      partners: [
        {
          id: "fasdffs",
          img: "rash-milk-logo.png",
        },
        {
          id: "fadad",
          img: "evaks.png",
        },
        {
          id: "fkkg",
          img: "havas.svg",
        },
        {
          id: "asdfa",
          img: "asia-uz.png",
        },
        {
          id: "fasdf",
          img: "istiqlol-g.png",
        }
      ],
    };
  },
  methods: {
    getPic(img) {
      return require(`@/assets/images/${img}`);
    },
  },
};
</script>
<style lang=""></style>
