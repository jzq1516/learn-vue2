<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendStudentName">把学生名给App</button>
    <button @click="unbind">解绑atguigu事件</button>
  </div>
</template>

<script>
	
  export default {
    name: 'Student',
    data() {
      return {
				name: '张三',
				sex: '男'
      }
    },
    methods: {
      sendStudentName() {
        this.$emit('atguigu', this.name)
        this.$emit('demo')
      },
      unbind() {
        // this.$off('atguigu') // 解绑一个自定义事件
        // this.$off(['atguigu', 'demo']) // 解绑多个自定义事件
        this.$off() // 解绑所有自定义事件


      }
    }
  }
</script>

<style type="text/css" scoped>
	.demo {
		background-color: skyblue; 
     padding: 5px;
    margin-top: 30px;
	}
</style>