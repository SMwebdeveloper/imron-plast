<template>
  <div
    class="mb-5 fixed top-0 left-0 w-full z-10 duration-300"
    :class="`${sidebarScroll ? 'bg-[rgba(255,255,255,0.5)] backdrop-blur-md shadow-md' : ''}`"
  >
    <div class="container mx-auto px-3 md:px-0">
      <div
        class="relative flex w-full items-center justify-between"
      >
        <div class="flex items-center justify-between w-full lg:w-[50%]">
          <div>
            <img
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
              src="@/assets/images/site-logo.svg"
              alt="site-logo"
              class="w-[120px] md:w-[150px] h-[50px] object-cover ml-[-15px]"
            />
          </div>

          <button
            data-aos="fade-left"
            data-aos-duration="400"
            class="lg:hidden block text-3xl cursor-pointer"
            @click="toggleBtn"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>

        <ul
          class="hidden lg:flex"
          data-aos="fade-left"
          data-aos-duration="400"
          data-aos-easing="ease-in-sine"
        >
          <li
            class="text-[16px] font-medium mr-7 last:mr-0 text-[#072430] hover:text-blue-400 transition-all capitalize duration-200 delay-100"
            v-for="item in navigation"
            :key="item.title"
          >
            <a @click="menu = false" :href="item.href">{{ item.title }}</a>
          </li>
        </ul>
        <!-- sidebar -->
        <div
          class="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] transition-all delay-100 duration-200"
          :class="`${menu ? 'block pb-3 w-full' : 'hidden'}`"
        >
          <ul
            class="absolute w-[200px] h-screen top-0 right-0 bg-[rgba(255,255,255,0.9)] backdrop-blur-md p-5 duration-400 delay-150"
            :class="{ navbar: menu }"
          >
            <li
              class="text-3xl cursor-pointer text-right mb-3"
              @click="toggleBtn"
            >
              <i class="fa-solid fa-times"></i>
            </li>
            <li
              class="text-[20px] font-medium text-[#072430] mb-4 last:mb-0 hover:text-[#999696] duration-75 capitalize"
              v-for="item in navigation"
              :key="item.title"
            >
              <a @click="menu = false" :href="item.href">{{ item.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      navigation: [
        {
          title: "О нас",
          href: "#about",
        },
        {
          title: "Каталог",
          href: "#products",
        },
        {
          title: "Партнеры",
          href: "#partners",
        },
        {
          title: "Доставка",
          href: "#delivery",
        },
        {
          title: "адрес",
          href: "#location",
        },
      ],
      menu: false,
      sidebarScroll: false,
    };
  },
  methods: {
    toggleBtn() {
      return (this.menu = !this.menu);
    },
    navbarScroll() {
      if (window.scrollY > 300) {
        console.log(this.sidebarScroll);
        return (this.sidebarScroll = true);
      } else {
        console.log(this.sidebarScroll);
        return (this.sidebarScroll = false);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.navbarScroll);
  },
};
</script>
<style lang=""></style>
