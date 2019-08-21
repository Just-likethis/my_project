<template>
  <div>
    <div class="general-Things-Head">
        <div class="head-Left">
            <i class="iconfont ">&#xe607;</i>
        </div>
        <div class="head-Middle">
            <span class="active">发现</span>
            <span>甄选家</span>
        </div>
        <div class="head-Right">
            <i class="iconfont icon-sousuo icon"></i>                    
            <i class="iconfont icon-gouwuche"></i>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.general-Things-Head
        width 100%
        height 1.5rem
        line-height 1.5rem
        position fixed
        top 0 
        left 0
        display flex
        justify-content space-around
        border-bottom .1rem solid #f4f4f4
        background-color #fff
        z-index 99
        i
          font-size .7rem
          // margin 0 .3rem
        .head-Middle
          .active
            color #b4282d
            font-size .6rem
            font-weight bold
          span 
            font-size .3rem
            color #7f7f7f
        .head-Right
          .icon
            margin-right .3rem
 
</style>
