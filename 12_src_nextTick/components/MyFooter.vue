<template>
	<div class="todo-footer" v-show="total"> 
		<label>
			<!-- <input type="checkbox" :checked="isAll" @change="checkAll" />已完成{{doneTotal}} / 全部{{total}} -->
			<input type="checkbox" v-model="isAll" />已完成{{doneTotal}} / 全部{{total}}
		</label>
		<a href="javascript:;" class="btn btn-danger" @click="clearAll">清除已完成任务</a>
	</div>
</template>

<script>
	export default {
		name: 'MyFooter',
		props: ['todos'],
		computed: {
			total() {
				return this.todos.length
			},
			doneTotal() {
				return this.todos.reduce((pre, todo)=> pre + (todo.done ? 1 : 0), 0)
			},
			isAll: {
				get() {
					return this.total === this.doneTotal && this.total > 0
				},
				set(value) {
					// this.checkAllTodo(value)
          this.$emit('checkAllTodo', value)
				}
			}
		},
		methods: {
			// checkAll(e) {
			// 	this.checkAllTodo(e.target.checked)
			// }
			clearAll() {
				// this.clearAllTodo()
				this.$emit('clearAllTodo')
			}
		}
	}
</script>

<style scoped>
	/* todo-footer */
	.todo-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 580px;
		height: 35px;
		box-sizing: border-box;
		margin-top: 20px;
	}
	
	.todo-footer label {
		margin-left: 20px;
	}
	
	.todo-footer input {
		margin-right: 20px;
	}
	
	.todo-footer .btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 120px;
		height: 25px;
		border-radius: 5px;
		text-decoration: none;
		font-size: 14px;
	}
</style>
