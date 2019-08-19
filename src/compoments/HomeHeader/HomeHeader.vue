<template>
   <div class="header-box">
        <div class="search-header">
            <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
            <div class="search-box">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" placeholder="搜索商品，共21726件好物">
            </div>
            <span class="login-box">登录</span>
        </div>
        <div class="search-nav">
            <ul class="nav-box">
                <li class="active">
                    <a href="#">推荐</a>
                </li>
                <li>
                    <a href="#">居家生活</a>
                </li>
                <li>
                    <a href="#">服饰鞋包</a>
                </li>
                <li>
                    <a href="#">美食酒水</a>
                    </li>
                    <li>
                    <a href="#">个人用品</a>
                    </li>
            </ul> 
            <div class="down">
                <i class="iconfont icon-xiajiantou"></i>
            </div>
        </div>
   </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixin.styl' 
  px2rem(designpx )
    $rem =75px;
    return (designpx / $rem )rem
  .header-box
    z-index 99
    position fixed
    top 0
    left 0
    width 100%
    height px2rem(148px)
    background-color #fff
    .search-header
      display flex
      box-sizing border-box
      padding 8px 14px
      justify-content space-around
      align-items center
      img 
        width 66px
        height 20px
      .search-box
        width 221px
        height 28px
        background-color #ededed
        color #666666
        font-size 12px
        text-align center
        display flex
        box-sizing border-box
        padding-left 10px
        input 
          width 221px
          height 28px
          background-color #ededed
          padding-left 10px
        i 
          line-height 28px
      .login-box
        width 38px
        height 21px
        border 1px solid #b4282d
        border-radius 4px
        font-size 12px
        color #b4282d
        text-align center
        line-height 21px
    .search-nav
      position relative
      width 100%
      height px2rem(60px)
      box-sizing border-box
      padding 0 10px
      overflow hidden
      .down
        position absolute
        right 0
        top 0px
        width 50px
        height 30px
        background-color #fff 
        text-align center
        line-height 30px
        i 
          font-size 16px
      .nav-box
        width 1000px
        height px2rem(60px)
        display flex
        li
          line-height px2rem(60px)
          margin 0 10px
          a
            font-size 14px
            color #333 
            vertical-align middle
            padding 0 6px   
          &.active
            border-bottom 2px solid #b4282d
            a
              color #b4282d

</style>
