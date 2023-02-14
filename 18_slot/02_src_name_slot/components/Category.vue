<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义插槽 -->
    <slot name="center">我是一些默认值，当使用者没有传递具体结构，我会出现1</slot>
    <slot name="footer">我是一些默认值，当使用者没有传递具体结构，我会出现2</slot>
  </div>
</template>

<script>
  export default {
    name: 'Category',
    props: ['listData', 'title']
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