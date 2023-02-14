<template>
	<li class="todo-item">
		<label>
			<input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
			<!-- 如下代码也能实现功能，但是不推荐使用，因为修改了props -->
			<!-- <input type="checkbox" v-model="todo.done"/> -->
			<span v-show="!todo.isEdit">{{todo.title}}</span>
      <input 
        type="text" 
        v-show="todo.isEdit" 
        :value="todo.title" 
        @blur="handleBlur(todo,$event)"
        ref="inputTitle"
      />
		</label>
    <div class="operate">
      <a v-show="!todo.isEdit" href="javascript:;" class="btn btn-edite" @click="handleEdite(todo)">编辑</a>
      <a href="javascript:;" class="btn btn-danger" @click="handleDelete(todo.id)">删除</a>
    </div>
	</li>
</template>

<script>

  import pubsub from 'pubsub-js'

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
					// this.$bus.$emit('deleteTodo',id)
          pubsub.publish('deleteTodo', id)
				}
			},
      handleEdite(todo) {
        if (todo.hasOwnProperty('isEdit')) {
          todo.isEdit = true
        } else {
          this.$set(todo, 'isEdit', true)
        }
        this.$nextTick(function() {
          this.$refs.inputTitle.focus()
        })
      },
      handleBlur(todo,event) {
        todo.isEdit = false
        this.$bus.$emit("updateTodo", todo.id, event.target.value)
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

  .todo-item input[type="text"] {
    margin-left: 3px;
    padding-left: 3px;
  }
	
	.todo-item:first-child {
		border-top: none;
	}

  .todo-item .operate {
    display: flex;
  }
	
	.todo-item .btn {
		display: none;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 25px;
		border-radius: 5px;
		text-decoration: none;
		font-size: 14px;
    box-sizing: border-box;
	}
	
	.todo-item:hover {
		background-color: #87CEEB;
	}
	
	.todo-item:hover .btn {
		display: flex;
	}
	
</style>
