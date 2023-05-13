<template>
    <div class="mb-5 fixed top-0 left-0 w-screen z-10" :class="`${sidebarScroll ? 'bg-white shadow-md' : ''}`">
       <div class="container mx-auto my-0 px-2">
        <div class="relative flex w-full items-center justify-between flex-col lg:flex-row">
            <div class="flex items-center justify-between lg:w-auto md:w-full sm:w-full w-full">
                <img src="@/assets/images/site-logo.svg" alt="site-logo" class="w-[120px] lg:w-[150px] h-[50px] object-cover ml-[-15px]">
                <div class="lg:hidden block">
                   <button class="text-3xl cursor-pointer" @click="toggleBtn"> 
                    <i class="fa-solid fa-bars"></i>
                   </button>
                </div>
            </div>

            <ul class="hidden lg:flex">
                <li class=" text-[16px] font-medium text-[#072430] mr-7 last:mr-0 hover:text-[#999696] duration-75 capitalize" v-for="item in navigation" :key="item.title">
                  <a @click="menu = false" :href="item.href">{{ item.title }}</a>
                </li>
            </ul>
            <!-- sidebar -->
            <div class="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] transition-all delay-100 duration-200" :class="`${menu ? 'block pb-3 w-full' : 'hidden'}`">
              <ul class="absolute w-[200px] h-screen top-0 right-0 bg-white p-5 duration-400 delay-150" :class="{'navbar': menu}">
                <li class="text-3xl cursor-pointer text-right mb-3" @click="toggleBtn">
                  <i class="fa-solid fa-times"></i>
                </li>
                <li class=" text-[20px] font-medium text-[#072430] mb-4 last:mb-0 hover:text-[#999696] duration-75 capitalize" v-for="item in navigation" :key="item.title">
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
                title: "Партнеры",
                href: '#partners'
            },
            {
                title: 'Доставка',
                href: '#delivery'
            },
            {
                title: 'адрес',
                href: '#location'
            }
        ],
        menu: false,
        sidebarScroll: false
    }
  },
  methods: {
    toggleBtn () {
        return this.menu = !this.menu
    },
    navbarScroll () {
      if (window.scrollY > 500) {
        console.log(this.sidebarScroll)
        return this.sidebarScroll = true
      } else {
        console.log(this.sidebarScroll)
        return this.sidebarScroll = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.navbarScroll)
  }
}
</script>
<style lang="">

</style>