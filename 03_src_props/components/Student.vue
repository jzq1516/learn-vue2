<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{age+1}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        msg: '尚硅谷的学生'
      }
    },
		// 简单接收数据
		props: ['name', 'sex', 'age'] 
		// 接收的同时对数据类型限制
		// props: {
		// 	name: String,
		// 	sex: String,
		// 	age: Number
		// }
		// 接收的同时对数据类型限制，默认值的指定，必要性的限制
		// props: {
		// 	name: {
		// 		type: String,  // name是字符串
		// 		required: true // name是必要的
		// 	},
		// 	age: {
		// 		type: Number,
		// 		default: 99 // 默认值
		// 	},
		// 	sex: {
		// 		type: String,
		// 		required: true
		// 	}
		// }
  }
</script>