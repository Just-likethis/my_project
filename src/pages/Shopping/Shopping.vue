<template>
  <div id="shopping">
    <div class="shopHeader">
      <div class="top">
        <div class="logo">购物车</div>  
        <div class="txt">领劵</div>
      </div>  
      <div class="title">
        <ul>
          <li>
            <i class="iconfont icon-huaban"></i>  
            <span>30天无忧退货</span>
          </li>  
          <li>
            <i class="iconfont icon-huaban"></i>  
            <span>48小时快速退款</span>
          </li>  
          <li>
            <i class="iconfont icon-huaban"></i>  
            <span>满88元包邮费</span>
          </li>  
        </ul>  
      </div>  
    </div>   
    <div class="content">
      <div class="imgBox">
        <div class="img"></div>
      </div>
      <div class="txt">去添加点什么吧</div>
      <div class="btn">
        <div>登录</div>
      </div>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
px2rem(designpx )
    $rem =75px;
    return (designpx / $rem )rem
#shopping
  width 100%
  height 100%
  .shopHeader
    width 100%
    height px2rem(158px)
    .top
      width 100%
      height px2rem(88px)
      padding 0 px2rem(30px) 0 px2rem(30px)
      box-sizing border-box
      background-color #fff
      .logo
        font-size: .48rem;
        float left
        height px2rem(88px)
        width px2rem(108px)
        line-height 225%
      .txt
        width px2rem(90px)
        height px2rem(88px)
        line-height px2rem(88px)
        color #B4282D
        float right
        font-size: .4rem;
        text-align left
    .title
      width 100%
      height  px2rem(70px)
      background-color #eee
      padding 0 px2rem(30px) 0 px2rem(30px)
      box-sizing border-box
      ul
        width 100%
        height 100%
        li
          float left
          width 33.3333%
          height px2rem(70px)
          line-height px2rem(70px) 
          i
            vertical-align:middle
            font-size 26px
          span 
            vertical-align:middle
            color #666
  .content
    width px2rem(750px)
    height px2rem(1176px)
    line-height px2rem(1176px)
    background-color #f4f4f4
    display flex
    flex-direction column
    justify-content center
    align-items center
    .imgBox
      width px2rem(750px)
      height px2rem(300px)
      .img
        width px2rem(248px)
        height px2rem(248px)
        background url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png) no-repeat
        background-size 100% 100%
        margin auto
    .txt
      width px2rem(750px)
      height px2rem(27px)
      line-height px2rem(27px)
      color #999
      font-size: .37333rem;
      margin-top -30px
    .btn
      width px2rem(750px)
      height px2rem(92px)
      line-height px2rem(92px)
      padding 0 px2rem(135px) 0 px2rem(135px)
      box-sizing border-box
      margin-top 20px
      div
        background-color: #b4282d;
        width 100%
        height 100%
        color #fff
        font-size: .4rem;

</style>
