<template lang="">
  <div class="pt-16" id="partners">
    <div class="container mx-auto md:px-0 px-3 text-center">
      <h2
        class="text-[24px] md:text-[28px] lg:text-[32px] text-blue-400 font-semibold mb-3 lg:mb-8"
      >
        Партнеры
      </h2>

      <infinite-slide-bar duration="10s" direction="reverse" delay="3s">
        <div class="flex justify-around items-center">
          <div v-for="item in partners" :key="item.id">
            <img
              :src="getPic(item.img)"
              alt="brand logo"
              class="w-[220px] h-[150px] object-contain mb-0 mx-auto my-auto"
            />
          </div>
        </div>
      </infinite-slide-bar>
    </div>
  </div>
</template>
<script>
import InfiniteSlideBar from "vue-infinite-slide-bar";
export default {
  name: "ParternsComponent",
  components: {
    InfiniteSlideBar,
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
        },
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
