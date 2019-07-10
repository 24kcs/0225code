<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"></TodoHeader>
      <TodoList :todos="todos" :deleteTodo="deleteTodo" :toggleTodo="toggleTodo"></TodoList>
      <TodoFooter :todos="todos" :checkAllTodos="checkAllTodos"></TodoFooter>
      <!-- <todo-footer></todo-footer> -->
    </div>
  </div>
</template>
<script>
//引入三个子组件
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

//引入针对数据做操作的对象
import Storage from './utils/utils.js'

export default {
  methods: {
    //为数组中添加一个对象数据
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    //删除数据的方法
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    //切换数据的状态
    toggleTodo(todo) {
      //todo---宝马对象{id:1,title:'宝马',isShow:false}
      todo.isShow = !todo.isShow;
    },
    //子组件中如果修改了自己的复选框的选中状态,此时,父级组件这边的todos中每个todo的isShow全部要改变
    checkAllTodos(isCheck) {
      //把todos中所有的todo的isShow改变
      this.todos.forEach(todo => {
        todo.isShow = isCheck;
      });
    }
  },
  data() {
    return {
      // todos: [
      //   { id: 1, title: "宝马", isShow: false },
      //   { id: 2, title: "奔驰", isShow: true },
      //   { id: 3, title: "玛莎拉蒂", isShow: false },
      // ]
      //todos:JSON.parse(localStorage.getItem('todos_key')||'[]')
      todos:Storage.getTodos()
    };
  },
  //监视的时候
  watch: {
     todos:{
       deep:true,//深度监视
       //保存数据
      //  handler:function(val){
      //    //localStorage.setItem('todos_key',JSON.stringify(val))
      //    Storage.setTodos(val)
      //  }
      // see:function(){}
      // handler:see
      handler:Storage.setTodos
     }
  },



  //注册组件
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }



};




// var obj={

//   name:'小明',
//   sayHi:function(){}
// }
// var obj2=obj
// obj2.sayHello=obj.sayHi
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






