<template lang="">
  <div id="location" class="mb-3 lg:mb-16 pt-3 md:pt-20">
    <div class="container mx-auto md:px-0 px-3 lg:px-0 text-center">
      <h3
        class="text-[20px] md:text-[28px] lg:text-[36px] text-blue-400 font-semibold mb-6  md:mb-12"
      >
        Расположение и контакты
      </h3>

      <div
        class="flex flex-col lg:flex-row items-center lg:items-start justify-between"
      >
        <LocationItem />
        <!-- maps -->
        <div
          class="border-solid border-gray-500 border-[4px] rounded-md "
        >
          <iframe
          class="hidden md:inline-block "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.308415226755!2d71.7549652750373!3d40.3798566578843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85c72cf64211%3A0x53ba3e91d7bf0cf4!2sFargona%20viloyati!5e0!3m2!1suz!2s!4v1685599512699!5m2!1suz!2s"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
          class="inline-block md:hidden"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.308599585619!2d71.75495990961402!3d40.3798525713265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85c72cf64211%3A0x53ba3e91d7bf0cf4!2sIMRON%20Plast!5e0!3m2!1suz!2s!4v1682858051177!5m2!1suz!2s"
            width="400"
            height="300"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LocationItem from "./LocationItem.vue";
export default {
  name: "LocationComponent",
  components: {
    LocationItem,
  },
};
</script>
<style lang=""></style>
