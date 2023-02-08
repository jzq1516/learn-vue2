<template>
	<li class="todo-item">
		<label>
			<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
			<!-- 如下代码也能实现功能，但是不推荐使用，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
			<span>{{todo.title}}</span>
		</label>
		<a href="javascript:;" class="btn" @click="handleDelete(todo.id)">删除</a>
	</li>
</template>

<script>
	export default {
		name: 'MyItem',
		// 声明接收对象
		props: ['todo'],
		methods: {
			handleCheck(id) {
				// this.checkTodo(id)
				this.$bus.$emit('checkTodo',id)
			},
			handleDelete(id) {
				if(confirm('确认删除吗？')) {
					// this.deleteTodo(id)
					this.$bus.$emit('deleteTodo',id)
				}
			}
		}
	}
</script>

<style scoped>
	/* todo-item */
	.todo-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 35px;
		padding: 0 10px;
		box-sizing: border-box;
		border-top: 1px solid #ccc;
	}
	
	.todo-item span {
		margin-left: 5px;
	}
	
	.todo-item:first-child {
		border-top: none;
	}
	
	.todo-item .btn {
		display: none;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 25px;
		border-radius: 5px;
		background-color: crimson;
		color: #fff;
		text-decoration: none;
		font-size: 14px;
	}
	
	.todo-item:hover {
		background-color: #87CEEB;
	}
	
	.todo-item:hover .btn {
		display: flex;
	}
	
</style>
