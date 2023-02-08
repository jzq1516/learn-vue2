<template>
  <div class="demo">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <button @click="sendSchoolName">把学生名给School</button>
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
      sendSchoolName() {
        this.$bus.$emit('hello', this.name)
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