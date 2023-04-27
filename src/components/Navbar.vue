<template>
    <div class="bg-white shadow-md py-2 mb-5">
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
            
            <div  :class="`${menu ? 'block pb-3 w-full' : 'hidden'}`">
                <ul class="flex flex-col items-start lg:flex-row lg:items-center">
                    <li class=" text-[16px] inline-block font-medium text-[#072430] mr-7 last:mr-0 hover:text-[#999696] duration-75 capitalize" v-for="item in navigation" :key="item.title">
                      <a :href="item.href">{{ item.title }}</a>
                    </li>
                </ul>
                <h6 class="p-2 inline-block bg-blue-500 rounded-md text-[14px]md:text-[16px] lg:text-[18px] font-medium text-gray-800">+998-90-390-64-75</h6>
            </div>
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
                title: 'Договор',
                href: '#'
            },
            {
                title: 'Партнеры',
                href: '#'
            },
            {
                title: 'адрес',
                href: '#'
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