<template>
  <div class="demo">
    <h2>学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
	
  export default {
    name: 'School',
    data() {
      return {
				name: '尚硅谷',
				address: '北京'
      }
    },
    mounted() {
      // console.log('School', this.$bus);
      this.$bus.$on('hello', (value)=> {
        console.log('School',value);
      })
    },
    beforeDestroy() {
      this.$bus.$off('hello')
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