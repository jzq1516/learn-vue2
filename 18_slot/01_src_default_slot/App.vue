<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img src="https://img.zcool.cn/community/01306a5b28ba31a80121bbec1eff68.jpg@1280w_1l_2o_100sh.jpg" alt="">
    </Category>
    <Category title="游戏" :listData="games">
      <ul>
        <li v-for="(g,index) in games" :key="index">{{g}}</li>
      </ul>
    </Category>
    <Category title="电影" :listData="films">
      <video 
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        controls
      ></video>
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
  .container {
    display: flex;
    justify-content: space-around;
  }
  
  img,video {
    width: 100%;
  }
</style>

