<template>
  <div class="app">
    <h2>{{msg}}</h2>
    <School/>
    <Student/>
  </div>
</template>

<script>
  // 引入组件
  import School from './components/School.vue';
  import Student from './components/Student.vue';

  export default {
    name: 'App',
    components: {School,Student},
    data() {
      return {
        msg: '你好啊！'
      }
    }
  }
</script>

<style>
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>