<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img slot="center" src="https://img.zcool.cn/community/01306a5b28ba31a80121bbec1eff68.jpg@1280w_1l_2o_100sh.jpg" alt="">
      <a slot="footer" href="javascript:;">更多美食</a>
    </Category>
    <Category title="游戏" :listData="games">
      <ul slot="center">
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="javascript:;">单机游戏</a>
        <a href="javascript:;">网络游戏</a>
      </div>
    </Category>
    <Category title="电影" :listData="films">
      <video  
        controls
        slot="center"
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="javascript:;">经典</a>
          <a href="javascript:;">热门</a>
          <a href="javascript:;">推荐</a>
        </div>
        <h4>欢迎前来观影！</h4>
      </template>
    </Category>
  </div>
</template>

<script>

  import Category from './components/Category';

  export default {
    name: 'App',
    components: {
      Category
    },
    data() {
      return {
        foods: ['火锅', '烧烤', '牛排'],
        games: ['红色警戒', '穿越火线', '超级玛丽'],
        films: ['《教父》', '《拆弹专家》', '《流浪地球》']
      }
    }
  }
</script>

<style>
  .container,.foot {
    display: flex;
    justify-content: space-around;
  }
  
  img,video {
    width: 100%;
  }

  h4 {
    text-align: center;
  }
</style>

