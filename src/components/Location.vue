<template lang="">
  <div class="mb-3 lg:mb-16">
    <div class="container mx-auto md:px-0 px-3 text-center">
      <h3
        class="mx-auto text-[20px] md:text-[24px] lg:text-[28px] text-[#4f83a7] font-semibold mb-3 md:mb-7 lg:mb-10"
      >
        Расположение и контакты
      </h3>

      <div
        class="flex flex-col lg:flex-row items-center lg:items-start justify-between px-28"
      >
        <div class="mb-7 lg:mb-0 flex flex-col items-center lg:items-start">
          <h5
            class="text-[18px] lg:text-left w-[300px] md:w-[400px] lg:w-[500px] md:text-[20px] lg:text-[22px] font-semibold text-[#2e696b] mb-3 md:mb-7"
          >
            Наш адрес: <br />
            <span
              class="font-bold text-[#880f0f] text-[20px] md:text-[22px] lg:text-[24px]"
              >г. Фаргона улица Авиаторов 2</span
            >
          </h5>
          <div>
            <h5
              class="text-[18px] lg:text-left w-[300px] md:w-[400px] lg:w-[500px] md:text-[20px] lg:text-[22px] font-semibold text-[#2e696b] mb-3"
            >
              Наш профиль в социальных сетях:
            </h5>
            <div class="flex items-center justify-center lg:justify-start ">
              <a
                href="https://t.me/imronplast"
                target="_blank"
                class="mr-5 text-[16px] font-medium"
              >
                <i
                  class="fa-brands fa-telegram text-[26px] text-blue-400 duration-150 hover:text-gray-600 mt-1"
                ></i>
              </a>
              <a
                href="https://www.instagram.com/salafan_paketlar/"
                target="_blank"
              >
                <i
                  class="fa-brands fa-instagram text-[27px] text-red-500 duration-150 hover:text-gray-600"
                ></i>
              </a>
            </div>
          </div>
        </div>
        <!-- maps -->
        <div class="border-solid border-gray-500 border-[4px] rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.598379387589!2d71.7932696763313!3d40.37342879518404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb85c72cf64211%3A0x53ba3e91d7bf0cf4!2sIMRON%20Plast!5e0!3m2!1suz!2s!4v1682595174684!5m2!1suz!2s"
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
export default {
  name: "LocationComponent",
};
</script>
<style lang=""></style>
