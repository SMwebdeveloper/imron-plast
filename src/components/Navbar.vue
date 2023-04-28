<template>
    <div class="bg-white shadow-md py-2 mb-5 fixed top-0 left-0 w-screen z-10">
       <div class="container mx-auto md:px-0 px-3">
        <div class="flex w-full items-center justify-between flex-col lg:flex-row">
            <div class="flex items-center justify-between lg:w-auto md:w-full sm:w-full w-full">
                <img src="@/assets/site-logo/site-logo.svg" alt="site-logo" class="w-[120px] lg:w-[150px] h-[50px] object-cover ml-[-15px]">
                <div class="lg:hidden block">
                   <button class="text-3xl cursor-pointer" @click="toggleBtn">
                      <ion-icon name="menu-outline" v-if="!menu"></ion-icon>
                      <ion-icon name="close-outline" v-else></ion-icon>
                   </button>
                </div>
            </div>

            <ul class="lg:flex" :class="`${menu ? 'block pb-3 w-full' : 'hidden'}`">
                <li class=" text-[16px] font-medium text-[#072430] mr-7 last:mr-0 hover:text-[#999696] duration-75 capitalize" v-for="item in navigation" :key="item.title">
                  <a :href="item.href">{{ item.title }}</a>
                </li>
            </ul>
        </div>
       </div>
    </div>
</template>
<script>
export default {
  name: "NavbarComponent",
  data () {
    return {
        navigation: [
            {
                title: 'О нас',
                href: '#about'
            },
            {
                title: 'Каталог',
                href: '#products'
            },
            {
                title: 'адрес',
                href: '#location'
            }
        ],
        menu: false
    }
  },
  methods: {
    toggleBtn () {
        return this.menu = !this.menu
    }
  }
}
</script>
<style lang="">

</style>