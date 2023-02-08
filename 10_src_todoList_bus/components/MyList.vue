<template>
	<ul class="todo-main">
		<MyItem 
			v-for="todoObj in todos" 
			:key="todoObj.id" 
			:todo='todoObj' 
		/>
	</ul>
</template>

<script>
	import MyItem from './MyItem.vue'
	
	export default {
		name: 'MyList',
		components:{
			MyItem
		},
		props: ['todos']
	}
</script>

<style scoped>
	/* todo-main */
	.todo-main {
		list-style: none;
		width: 580px;
		margin: 0 auto;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-sizing: border-box;
	}
</style>
