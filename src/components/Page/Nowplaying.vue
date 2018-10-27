<template>
    <div>
        
    </div>
</template>

<script>

export default {
    data() {   
        return {  
            nowplaying: [],
            soonplaying: []
        }
    },
  
    created() {
        this.$store.dispatch("getNowPlaying");     
        // this.$store.dispatch("getSoonPlaying");     
        this.nowplaying = this.$store.state.nowPlayingList
        // this.soonplaying = this.$store.state.soonPlayingList
        console.log(this.$store.state.nowPlayingList)
        // console.log(this.$store.state.soonPlayingList)
        // console.log(this.nowplaying[0].cover.origin)
    },
//     computed:{
//       nowplayingList(){
//          return this.$store.nowPlayingList
//       }
//   },
}
</script>

<style lang="scss" scoped>
    

</style>
