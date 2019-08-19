<template>
  <div id="classIfication">
    <div class="m-itemCateListHd">
      <div class="m-topSearchIpt">
        <div class="placeholder">
          <i class="iconfont icon-search1"></i>
          搜索商品，共20222款好物</div>
      </div>
    </div>
    <div class="content">
      <div class="listRouting">
        <ul>
          <li class="activeLi">
            <a href="" class="active">推荐专区</a>
          </li>
          <li>
            <a href="1">夏凉专区</a>
          </li>
          <li>
            <a href="1">爆品专区</a>
          </li>
          <li>
            <a href="1">新品专区</a>
          </li>
          <li>
            <a href="1">居家生活</a>
          </li>
          <li>
            <a href="1">服饰鞋包</a>
          </li>
          <li>
              <a href="1">美食酒水</a>
          </li>
          <li>
              <a href="1">个护清洁</a>
          </li>
          <li>
              <a href="1">母婴亲子</a>
          </li>
          <li>
              <a href="1">运动旅行</a>
          </li>
          <li>
              <a href="1">数码家电</a>
          </li>
          <li>
              <a href="1">全球特色</a>
          </li>
          
        </ul>
      </div>
      <div class="listDetails">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/a97ca145b7e9ad2f89bdb096691ca0f4.jpg?imageView&amp;quality=75&amp;thumbnail=0x196"></div>
            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/25d770a02a3ef0aa3ba0e94857a9187f.jpg?imageView&amp;quality=75&amp;thumbnail=0x196"></div>
          </div>
          <!--如果需要分页器-->
          <div class="swiper-pagination"></div>
        </div>
        <div class="listDetailsList">
            <ul>
              <li>
                <a href="11">
                  <img src="https://yanxuan.nosdn.127.net/c66f70a639390c0df03abc2c2572f8c0.jpg?imageView&amp;quality=85&amp;thumbnail=144x144">
                </a>
                <div>清爽美食</div>
              </li>
              <li>
                <a href="11">
                  <img src="https://yanxuan.nosdn.127.net/341d6f82d91ce695558c7658584065f8.png?imageView&amp;quality=85&amp;thumbnail=144x144">
                </a>
                <div>降温好物</div>
              </li>
              <li>
                <a href="11">
                    <img src="https://yanxuan.nosdn.127.net/d7918c253f72ab2096a9fdffae134e8c.png?imageView&amp;quality=85&amp;thumbnail=144x144">
                </a>
                <div>烈日防晒</div>
              </li>
              <li>
                <a href="11">
                    <img src="https://yanxuan.nosdn.127.net/687edce4aa9e094b866dd194e0929e0f.png?imageView&amp;quality=85&amp;thumbnail=144x144">
                </a>
                <div>夏季养生</div>
              </li>
              <li>
                <a href="11">
                    <img src="https://yanxuan.nosdn.127.net/9348f10430a770ff354618663a0ca135.png?imageView&amp;quality=85&amp;thumbnail=144x144">
                </a>
                <div>防蚊驱虫</div>
              </li>
              <li>
                <a href="11">
                    <img src="https://yanxuan.nosdn.127.net/72353acdb3d9aa2969c5725a08f86008.png?imageView&amp;quality=85&amp;thumbnail=144x144">
                </a>
                <div>夏凉床品</div>
              </li>
              <li>
                <a href="11">
                    <img src="https://yanxuan.nosdn.127.net/563f86bc6c9cd3db4bd651c0cafd53a7.png?imageView&amp;quality=85&amp;thumbnail=144x144">
                </a>
                <div>清凉洗护</div>
              </li>
              <li>
                  <a href="11">
                      <img src="https://yanxuan.nosdn.127.net/9ad5dcd5882f908b3eb0195c3fefdaa8.png?imageView&amp;quality=85&amp;thumbnail=144x144">
                  </a>
                  <div>夏日传达</div>
              </li>
              <li>
                <a href="11">
                    <img src="https://yanxuan.nosdn.127.net/d65e9c8ed4c93cc4a9144b3fc80ff553.png?imageView&amp;quality=85&amp;thumbnail=144x144">
                </a>
                <div>室内运动好物</div>
              </li>
            </ul>
          </div>
      </div>
      
    </div>
  </div>
    
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll' 

  export default {
    mounted() {
      //滑动scroll
      const scroll = new BScroll('.listRouting',{
            scrollY: true
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  px2rem(designpx)
    $rem =75px;
    return (designpx / $rem )rem
  #classIfication
    width 100%
    height 100%
    .m-itemCateListHd
      width 100%
      height px2rem(88px)
      padding px2rem(16px) px2rem(30px)
      box-sizing border-box
      border-bottom px2rem(1px) solid #eee
      .m-topSearchIpt
        width px2rem(690px)
        height px2rem(56px)
        line-height px2rem(56px)
        background-color #eee
        border-radius px2rem(10px)
        text-align center
        .placeholder
          color #666
          font-size px2rem(28px)
          vertical-align middle
          .icon-search1
            font-size px2rem(35px)
            margin-right px2rem(10px)
            vertical-align middle
    .content
      width 100%
      height px2rem(1158px)
      overflow hidden
      .listRouting
        width px2rem(162px)
        height px2rem(1158px)
        position relative
        overflow hidden
        float left
        ul 
          // padding px2rem(40px) 0
          position absolute
          left 0
          top 0px
          width px2rem(162px)  
          height px2rem(1159px)
          .activeLi
            border-left px2rem(5px) solid #ab2b2b       
          li
            width  100%
            height px2rem(50px)
            line-height px2rem(50px)
            font-size px2rem(28px)
            text-align center
            padding-top px2rem(40px)
            .active
              color #ab2b2b
            &:first-child
              padding-top 0
      .listDetails
        box-sizing border-box
        float left
        width px2rem(588px)
        padding px2rem(30px) px2rem(30px) px2rem(21px)
        .swiper-container
          margin-bottom  px2rem(32px)
          .swiper-wrapper
            .swiper-slide
              img
                width px2rem(528px)
                height px2rem(192px)
          .swiper-pagination
            bottom 30px
            .swiper-pagination-bullet 
              width 40px
              height 5px
              background-color #f9f9f9
              border-radius 0
        .listDetailsList
          width px2rem(528px)
          ul 
            width px2rem(528px)
            li
              float left
              width 33.333%
              height px2rem(216px) 
              div
                font-size px2rem(24px)
                text-align center
                width px2rem(144px)
              a
                width px2rem(144px)
                height px2rem(216px) 
                img
                  width px2rem(144px)
                  height px2rem(144px)
</style>
