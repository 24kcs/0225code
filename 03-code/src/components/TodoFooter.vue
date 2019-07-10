<template>
  <div class="todo-footer">
    <slot name="left"/>
    <slot name="center"/>
    <slot name="right"/>
  </div>
</template>
<script>
export default {
  // //计算属性
  // computed: {
  //   //选中的个数
  //     count(){
  //       //有多少个选中了,count就是多少
  //       return this.todos.reduce((pre,todo)=>pre+(todo.isShow?1:0),0)
  //     },
  //   //选中的状态
  //   isChecked:{
  //     //当前复选框是否选中,就看todos中有多少个todo及一共选中的个数和前面的todos.length是否一致
  //     get(){
  //       return this.todos.length===this.count&&this.count>0
  //     },
  //     set(val){
  //       //设置当前的选中状态,改变的是todos中所有的todo的isShow
  //       this.checkAllTodos(val)
  //     }
  //   }
  // },
  // props:{
  //   todos:Array,
  //   checkAllTodos:Function
  // }
};
</script>
<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>