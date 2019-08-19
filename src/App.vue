<template>
  <div id="app">
   <router-view></router-view>
   <Footer/>
  </div>
</template>

<script type="text/ecmascript-6">
import Footer from './compoments/Footer/Footer.vue'
  export default {
    name:'app',
    components:{
      Footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 
</style>

