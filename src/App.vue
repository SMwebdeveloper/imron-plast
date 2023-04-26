<template>
  <div class="bg-gray-50 h-screen">
    <Navbar/>
    <h2 class="mb-2 text-xl text-[red]">Vue world</h2>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
</style>
