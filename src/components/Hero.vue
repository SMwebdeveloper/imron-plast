<template lang="">
  <div class="">
    <div class="container mx-auto px-3">
      <div class="flex flex-col items-center pt-[80px] sm:pt-[110px] md:pt-[150px] h-[100vh]">
        <div class="text-[32px] sm:text-[52px] md:text-[52px] lg:text-[65px] 2xl:text-[72px] text-center lg:w-[70%] text-[#084e5a] mx-auto font-bold mb-[50px] sm:mb-[60px] md:mb-[90px] lg:mb-[120px]">
          <h2 class="m-0">Имрон Пласт:</h2>
          <VueTyper
            :text="[
              'Качественная продукция',
              'Быстрая доставка',
            ]"
            :repeat="Infinity"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="100"
            :type-delay="100"
            :pre-erase-delay="2000"
            :erase-delay="100"
            erase-style="backspace"
            :erase-on-complete="false"
            caret-animation="solid"
          ></VueTyper>
        </div>

        <div class="text-center">
          <p class="text-[14px] md:text-[16px] lg:text-[20px] text-[#2197a7] font-medium mb-2">Выгода от честности всегда превышает выгоду.</p>
          <button class="border-[#1a8d9c] text-[#1a8d9c] fonst-medium border-solid border-[1px] py-2 px-6 rounded-lg duration-300 hover:border-white hover:bg-[#1a8d9c] hover:text-white">Вперед</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueTyper } from "vue-typer";
export default {
  name: "HeroComponent",
  components: {
    VueTyper,
  },
  data() {
    return {
      lab: 2,
    };
  },
  watch: {
    lab: function () {
      console.log(3);
    },
  },
};
</script>
<style lang=""></style>
