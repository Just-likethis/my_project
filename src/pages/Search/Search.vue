<template>
  <div class="searchContainer">
    <div class="hearderContainer">
      <div class="searchWraper">
        <div class="search">
          <div class="searchInput">
            <i class="iconfont icon-sousuo"></i>
            <input @keyup="getList" v-model="searchName"  placeholder="请输入关键字搜索" value="" @keyup.enter="submit"/>
          </div>
        <div class="cancle" @click="$router.back()">取消</div>
      </div>
    </div>
     
    </div>
    <div class="hotkeywordsContainer" style="display: block" v-if="!searchName">
      <div class="searchHistories on" >
          <div class="historyDesc">
            <span>历史记录</span>
            <i class="iconfont icon-Iconinfoicon-" @click="clear"></i>
          </div>
          <div class="historyList">
            <ul>
              <li class="historyItem" v-for="(item, index) in history" :key="index">{{history[index]}}</li>
            </ul>
          </div>
      </div>
      <div class="hotSearch">
        <div class="title">热门搜索</div>
        <div class="navList">
          <ul>
            <li v-for="(item, index) in rotkey.hotKeywordVOList" :key="index">{{item.keyword}}</li>
          </ul>
        </div>
      </div>
    </div>
  <!-- 搜索结果内容区 -->
    <div class="SearchContent" v-else-if="searchName">
      <ul>
        <li v-for="(item, index) in value" :key="index">{{value[index]}}</li>
      </ul>
    </div>
  </div>
</template> 

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: 'Search',
    data(){
      return({
        searchName:'',
        history:[]
      })
    },
    methods : {
      getList(){
        this.$store.dispatch('getKeyword',this.searchName)
      },
      submit(){
        console.log(this.searchName);
        console.log(this.history)
        if(this.history instanceof Array){
            this.history.push(this.searchName)
            localStorage.setItem('hou', JSON.stringify(this.history));
        }
        
      },
      clear(){
        localStorage.removeItem('hou')
        this.history=[]
      }
    },
    computed : {
      ...mapState({
        value : state=> state.Search.value
      }),
      ...mapState({
        rotkey : state=>state.Search.rotkey
      })
    },
    mounted(){
        this.$store.dispatch('gethotkeyword')  //读取搜索热词
        let data1 = JSON.parse(localStorage.getItem('hou'));
        if(data1 instanceof Array){
            this.history=data1  //读取存储的热词
        }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  
  *
    box-sizing border-box
  px2rem(designpx )
    $rem = 75px
    return (designpx / $rem )rem
  body 
    background #eeeeee
    .searchContainer
      padding-top px2rem(88px)
      width 100%
      height 100%
      overflow hidden
      .hearderContainer
        position fixed
        left 0
        top 0
      
        .searchWraper
          width 100%
          height px2rem(88px)
          padding 0 px2rem(30px)
          .search
            display flex
            align-items center
            justify-content space-between
            height 100%
            .searchInput
              display flex
              align-items center
              width px2rem(604px)
              height px2rem(56px)
              padding 0 px2rem(20px)
              background-color #eeeeee
              .iconfont
                width px2rem(28px)
                height px2rem(28px) 
                margin-right px2rem(16px)
              input 
                width px2rem(520px)
                height px2rem(39px)
                background-color transparent
              input::-webkit-input-placeholder
                font-size 0.3733333rem
            .cancle
              width px2rem(56px)
              height px2rem(30px)
              margin-left px2rem(30px)
              font-size px2rem(28px)
              vertical-align middle
      .hotkeywordsContainer
        background-color #ffffff
        width 100%
        margin 0 0 px2rem(20px)
        font-size px2rem(24px)
        .searchHistories
          position relative
          width 100%
          padding 0 px2rem(30px)
          font-size px2rem(24px)
         
          .historyDesc
            display flex
            width px2rem(690px)
            height px2rem(90px)
            justify-content space-between
            align-items center
            .icon-Iconinfoicon-
              font-size 20px
          .historyList
            .historyItem
              float left
              padding 0 px2rem(15px)
              margin 0 px2rem(32px) px2rem(32px) 0
              border 1px solid #cccccc
              border-radius px2rem(5px)
              height px2rem(47px)
              line-height px2rem(47px)
        .hotSearch
          width 100%
          .title
            display flex
            width 100%
            padding 0 px2rem(30px) px2rem(30px)
            font-size px-rem(28px)
            height px2rem(90px)
            line-height px2rem(90px)
          .navList
            display flex
            flex-wrap wrap
            width px2rem(720px)
            padding-left px2rem(30px)
            ul
              li
                display flex
                align-items center
                padding 0 px2rem(15px)
                margin 0 px2rem(32px) px2rem(32px) 0
                border 1px solid #cccccc
                border-radius px2rem(5px)
                height px2rem(47px)
                line-height px2r
                float left
</style>