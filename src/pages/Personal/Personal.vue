<template>
  <div class="login-app">
    <div class="find-header">
        <div class="header-box">
            <a href="#">
                <i class="iconfont icon-shouye"></i>
            </a>
            <div class="find-home">
                <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
            </div>
            <span>
                <a class="search" href="#"><i class="iconfont icon-sousuo"></i></a>
                <a class="cart" href="#"><i class="iconfont icon-gouwuche"></i></a>
            </span>
        </div>
    </div>
    <div class="content" style="display:none">
            <div class="img">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"/>
            </div>
            <div class="buttons">
              <div class="btn-phone">
                <i class="iconfont icon-shouji"></i>
                <span>手机号快速登录</span>
              </div>
              <div class="btn-password">
              <i class="iconfont icon-youxiang"></i>
              <span>邮箱账号登录</span>
              </div>
            </div> 
    </div>   
    <div class="login-content">
      <div class="img">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png"/>
      </div>
      <div class="content">
         <form>
            <div class="phone-to-login">
              <input type="text" placeholder="请输入手机号"/>
              <div class="phone-area">
                <input type="text" placeholder="请输入短信验证码"/>
                <span>获取验证码</span>
              </div>
            </div>
         </form>
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
  .login-app
    width 100%
    height px2rem(1334px)
    background-color #F2F5F4
    .find-header
        position  fixed
        top 0
        left 0
        width 100%
        //box-sizing border-box
        height px2rem(172px)
        //background #fff 
        
        .header-box
          display flex
          padding 0 10px
          box-sizing border-box
          justify-content space-between
          align-items center
          width 100%
          height px2rem(88px)
          line-height px2rem(88px)
          font-size 14px
          border-bottom 1px solid #dedede
          background #fff
          .iconfont
            font-size 23px
          .find-home
            width px2rem(172px)
            height px2rem(54px)
            margin-left px2rem(50px)
            img
              width px2rem(172px)
              height px2rem(54spx)
            .homing
              padding-left 6px
          .search
            margin-right 16px
    .content
      width 100%
      height px2rem(1334px)
      padding px2rem(260px) 0
      .img
        width px2rem(268px)
        height px2rem(90px)
        margin 0 auto
        margin-bottom px2rem(200px)
        img
          width px2rem(268px)
          height px2rem(90px)
          margin-bottom px2rem(260px)
      .buttons
        .btn-phone
          width px2rem(670px)
          height px2rem(98px)
          display flex
          justify-content:center
          background-color #dd1a21
          font-size px2rem(28px)
          line-height px2rem(98px)
          vertical-align middle
          margin 20px auto
          color #fff
          .iconfont
            font-size px2rem(40px)
            margin-right px2rem(20px)
        .btn-password
          width px2rem(670px)
          height px2rem(96px)
          display flex
          justify-content:center
          border 1px solid #dd1a21
          font-size px2rem(28px)
          line-height px2rem(96px)
          vertical-align middle
          margin 0 auto
          color #dd1a21
          .iconfont
            font-size px2rem(40px)
            margin-right px2rem(20px)
</style>
