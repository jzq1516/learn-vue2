<template>
  <div class="app">
    <h2>{{msg}}</h2>

    <!-- 通过父组件给子组件传递函数类型的props实现：子传父传递数据 -->
    <School :getSchoolName="getSchoolName"/>  

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子传父传递数据（第一种写法，使用@或v-on） -->
    <Student @atguigu="getStudentName" @demo="m1"/>  

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子传父传递数据（第二种写法，使用ref） -->
    <!-- <Student ref="student"/>   -->


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
    },
    methods: {
      getSchoolName(name) {
        console.log('App收到了学校名：', name)
      },
      getStudentName(name) {
        console.log('App收到了学生名：', name)
      },
      m1() {
        console.log('demo被调用了');
      }
    },
    mounted() {
      // this.$refs.student.$on('atguigu', this.getStudentName) // 绑定自定义事件
      // this.$refs.student.$once('atguigu', this.getStudentName) // 绑定自定义事件（一次性）
    }
  }
</script>

<style>
  .app {
    background-color: gray;
    padding: 5px;
  }
</style>