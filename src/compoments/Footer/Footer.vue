<template>
  <ul>
    <li :class="{active: $route.path === '/home'}" @click="goto('/home')">
      <div class="footer-icon">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>首页</span>
    </li>
    <li :class="{active: $route.path === '/cartory' || $route.path.indexOf('/cartory') !== -1}" @click="goto('/cartory')">
      <div class="footer-icon" >
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>分类</span>
    </li>
    <li :class="{active: $route.path === '/identifying' || $route.path.indexOf('/identifying') !== -1}" @click="goto('/identifying')">
      <div class="footer-icon">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>识物</span>
    </li>
    <li :class="{active: $route.path === '/shopping'}" @click="goto('/shopping')">
      <div class="footer-icon">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>购物车</span>
    </li>
    <li :class="{active: $route.path === '/personal'}" @click="goto('/personal')">
      <div class="footer-icon">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>个人</span>
    </li>
  </ul>
</template>
<script>
  export default {
    methods: {
      goto (path) {
        this.$router.replace(path);
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  px2rem(designpx )
    $rem =75px;
    return (designpx / $rem )rem
  @import "../../common/stylus/mixin.styl"
  ul
    border-top px2rem(1px) solid #d9d9d9
    position fixed
    bottom 0
    left 0
    display flex
    justify-content space-around
    height px2rem(98px)
    width 100%
    font-size px2rem(24px)
    background-color #fff
    margin-top px2rem(-100px)
    z-index 99
    li
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      height px2rem(98px)
      .footer-icon
        position relative
        width px2rem(40px)
        height px2rem(40px)
        overflow hidden
        img
          position absolute
          left 0
          top 0
          width px2rem(40px)
          height px2rem(490px)
      &:nth-of-type(1)
        img
          top px2rem(-245px)
      &:nth-of-type(2)
        img
          top px2rem(-147px)
      &:nth-of-type(3)
        img
          top px2rem(-343px)
      &:nth-of-type(4)
        img
          top px2rem(-49px)
      &:nth-of-type(5)
        img
          top px2rem(-441px)
      &.active
        color $red
        img
          transform translateY(px2rem(49px))
</style>
