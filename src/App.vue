<template>
  <div id="app">
    <HeaderNav :city="city"/>
    <router-view @city="receive" class="content"/>
  </div>
</template>

<script>

import HeaderNav from '@/components/Page/HeaderNav'
export default {
  name: 'App',
  data() {
    return {
      city: ""
    }
  },
  components: {
    HeaderNav
  },
  methods: {
    receive(city) {
      this.city = city
      console.log(this.city)
    }
  }
}
</script>

<style lang="scss">
  @import './assets/css/style.css';
   $sc:25;
  .content{
      margin-top:50/$sc+rem;
  }
</style>
