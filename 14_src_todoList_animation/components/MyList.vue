<template>
	<ul class="todo-main">
		<transition-group name="todo" appear>
      <MyItem 
        v-for="todoObj in todos" 
        :key="todoObj.id" 
        :todo='todoObj' 
      />
    </transition-group>
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

  /* 过渡动画 */
  .todo-enter-active {
    animation: txt-ani 0.5s linear;
  }

  .todo-leave-active {
    animation: txt-ani 0.5s linear reverse;
  }

  @keyframes txt-ani {
    from {
      transform: translateX(100%);
    } 
    to {
      transform: translateX(0);
    }
  }

</style>
