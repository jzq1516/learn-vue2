<template>
  <div class="todo-wrap">
  	<MyHeader @addTodo="addTodo"/>
  	<MyList :todos="todos" />
  	<MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"/>
  </div>
</template>

<script>

  import pubsub from 'pubsub-js'
	import MyHeader from './components/MyHeader.vue'
	import MyList from './components/MyList.vue'
	import MyFooter from './components/MyFooter.vue'

  export default {
    name: 'App',
    components: {
			MyHeader,
			MyList,
			MyFooter
		},
		data() {
			return {
				todos: JSON.parse(localStorage.getItem('todos')) || []
			}
		},
		methods: {
			addTodo(todoObj) {
				this.todos.unshift(todoObj)
			},
			checkTodo(id) {
				this.todos.forEach((item)=>{
					if (item.id === id) {
						item.done = !item.done
					}
				})
			},
			updateTodo(id,title) {
				this.todos.forEach((item)=>{
					if (item.id === id) {
						item.title = title
					}
				})
			},
			deleteTodo(_,id) {
				this.todos = this.todos.filter(todo => todo.id != id)
			},
			checkAllTodo(done) {
				this.todos.forEach(todo=>todo.done = done)
			},
			clearAllTodo() {
				this.todos = this.todos.filter(todo=>!todo.done)
			}
		},
    watch: {
      todos: {
        deep: true,
        handler(value) {
          localStorage.setItem('todos',JSON.stringify(value))
        }
      }
    },
    mounted() {
      this.$bus.$on('checkTodo', this.checkTodo)
      this.$bus.$on('updateTodo', this.updateTodo)
      // this.$bus.$on('deleteTodo', this.deleteTodo)
      pubsub.subscribe('deleteTodo', this.deleteTodo)
    },
    beforeDestroy() {
      this.$bus.$off(['checkTodo', 'updateTodo'])
      pubsub.unsubscribe('deleteTodo')
    }
  }
</script>

<style type="text/css">
	* {
		margin: 0;
		padding: 0;
	}
	
  .btn-danger {
    background-color: #ed143d;
    border: 1px solid #9b0523;
		color: #fff;
  }

  .btn-edite {
    background-color: #006cff;
    border: 1px solid #0452c0;
		color: #fff;
    margin-right: 5px;
  }

	.todo-wrap {
		width: 600px;
		margin: 20px auto 0;
		border: 1px solid #ccc;
		border-radius: 8px;
		padding-bottom: 20px;
	}

</style>