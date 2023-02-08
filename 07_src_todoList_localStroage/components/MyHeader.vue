<template>
	<div class="todo-header">
		<input type="text" placeholder="请输入你的任务名称，按回车确认" v-model="title" @keyup.enter="add">
	</div>
</template>

<script>
	import {nanoid} from 'nanoid'
	
	export default {
		name: 'MyHeader',
		props: ['addTodo'],
		data() {
			return {
				title: ''
			}
		},
		methods: {
			add(e) {
				// 校验输入
				if (!this.title.trim()) return alert('输入不能为空！')
				// 将用户的输入包装成一个todo对象
				const todo = {id: nanoid(), title: this.title, done: false}
				this.addTodo(todo)
				// 清空输入框
				this.title = ''
			}
		}
	}
</script>

<style scoped>
	/* todo-header */
	.todo-header {
		width: 580px;
		margin: 10px auto 20px;
	}
	
	.todo-header input {
		width: 100%;
		height: 35px;
		border: 1px solid #ccc;
		border-radius: 5px;
		box-sizing: border-box;
		padding-left: 10px;
		outline: none;
	}
	
</style>
