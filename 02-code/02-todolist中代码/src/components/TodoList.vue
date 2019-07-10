<template>
  <ul class="todo-main">
    <TodoItem v-for="(todo,index) in todos" :key="todo.id" :todo="todo" :deleteTodo="deleteTodo" :index="index"></TodoItem>
  </ul>
</template>
<script>
//引入TodoItem组件
import TodoItem from './TodoItem.vue'
export default {

//组件之间的通信可以使用props对象,当前的组件(此时在该组件内部,如果使用this,this是当前组件这个实例对象)this.todos---可以直接使用
  props: ['todos','deleteTodo'],
  //注册组件
  components: {
    TodoItem
  }
};
</script>
<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>