<template lang="">
  <div class="bg-white h-[40vh] sm:h-[70v] lg:h-[100vh]">
    <div class="container mx-auto px-3 md:px-0">
      <div class="flex flex-col items-center pt-[60px] sm:pt-[60px] md:pt-[120px] ">
        <div class="text-[28px] md:text-[48px] lg:text-[65px] 2xl:text-[72px] text-center lg:w-[70%] text-blue-400 mx-auto font-bold mb-[40px] lg:mb-[150px]">
          <h2 class="m-0">Имрон Пласт:</h2>
          <VueTyper
            :text="[
              'Качественная продукция',
              'Быстрая доставка',
              'Опытный партнер'
            ]"
            :repeat="Infinity"
            :shuffle="false"
            initial-action="typing"
            :pre-type-delay="100"
            :type-delay="100"
            :pre-erase-delay="2000"
            :erase-delay="100"
            erase-style="backspace"
            :erase-on-complete="true"
            caret-animation="solid"
          ></VueTyper>
        </div>
        <div class="text-center">
          <p class="text-md sm:text-lg md:text-xl lg:text-2xl text-blue-400 w-[350px] md:w-[450px] lg:w-[650px] font-normal mb-4">У нас есть цель: помочь нашим партнерам быть более успешными.</p>
          <button class="border-blue-400 text-blue-400 fonst-medium border-solid border-[1px] py-2 px-6 rounded-lg duration-300 hover:border-white hover:bg-blue-400 hover:text-white">Вперед</button>
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
  }
};
</script>
<style lang=""></style>
