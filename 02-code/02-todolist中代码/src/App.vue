<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"></TodoHeader>
      <TodoList :todos="todos" :deleteTodo="deleteTodo"></TodoList>
      <TodoFooter></TodoFooter>
      <!-- <todo-footer></todo-footer> -->
    </div>
  </div>
</template>
<script>
//引入三个子组件
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  methods: {
    //为数组中添加一个对象数据
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    //删除数据的方法
    deleteTodo(index){
      this.todos.splice(index,1)
    }
  },
  data() {
    return {
      todos: [
        { id: 1, title: "宝马", isShow: false },
        { id: 2, title: "奔驰", isShow: true },
        { id: 3, title: "玛莎拉蒂", isShow: false }
      ]
    };
  },
  //注册组件
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
};
</script>
<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>