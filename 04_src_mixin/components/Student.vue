<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
	import {hunhe} from "../mixin.js"
	
  export default {
    name: 'Student',
    data() {
      return {
				name: '张三',
				sex: '男'
      }
    },
		mixins: [hunhe]
  }
</script>