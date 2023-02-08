<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>
	
  export default {
    name: 'School',
    props: ['getSchoolName'],
    data() {
      return {
				name: '尚硅谷',
				address: '北京'
      }
    },
    methods: {
      sendSchoolName() {
        this.getSchoolName(this.name)
      }
    }
  }
</script>

<style type="text/css" scoped>
	.demo {
		background-color: orange;
    padding: 5px;
    margin-top: 30px;
	}
</style>