<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义插槽 -->
    <!-- <slot>我是一些默认值，当使用者没有传递具体结构，我会出现1</slot> -->
    <slot :games="games"></slot>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    props: ['listData', 'title'],
    data() {
      return {
        games: ['红色警戒', '穿越火线', '超级玛丽', '原神', '地下城'],
      }
    }
  }
</script>

<style scoped>
  .category {
    width: 200px;
    height: 300px;
    background-color: skyblue;
  }

  h3 {
    text-align: center;
    background-color: orange;
  }
</style>