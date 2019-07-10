<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="todoName" @keyup.enter="add" />
  </div>
</template>
<script>
export default {
  //写方法的
  methods: {
      //添加数据的
      add(){
        //先获取用户输入的数据
        const todoName=this.todoName.trim()
        //用户已经输入内容
        if(todoName){
          //产生一个对象
          const todo={
            id:Date.now(),
            title:todoName,
            isShow:false
          }
          this.addTodo(todo)
          //清空
          this.todoName=''
        }
      }
  },
  data () {
    return {
      todoName:''  
    }
  },
  props:{
    addTodo:{
      type:Function,//类型是函数
      required:true //必须的
    }
  }
};
</script>
<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>