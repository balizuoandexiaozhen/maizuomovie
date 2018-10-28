<template>
  <div id="app">
    <HeaderNav/>
    <router-view class="content" />
  </div>
</template>

<script>

import HeaderNav from '@/components/Page/HeaderNav'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    HeaderNav
  },
  methods: {

  }
}
</script>

<style lang="scss" >
  @import './assets/css/style.css';
   $sc:25;
   #app {
     height: 100%;
   }
  .content{
      margin-top:50/$sc+rem;
  }
</style>
