<script>
  import ToDo from '../components/ToDo.vue';
  import Sidebar from "../components/Sidebar.vue"
import { onMounted } from 'vue';

  export default {
    components: {
      ToDo,
      Sidebar
    },

    data (){
      return {
        toDoList: [],
        completedToDoList: [],

        taskTitle: "",
        isCompleted: false,
      }
    },

    methods: {

      async getToDo() {
        const response = await fetch("http://localhost:3000/todos");
        const data = await response.json();
        this.toDoList = data;
      },

      async addToDo() {
        const body = {description: this.taskTitle, is_completed: this.isCompleted}

        const response = await fetch("http://localhost:3000/todos", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
        });

        window.location="/";

      },

      async deleteToDo(i){
        const response = await fetch(`http://localhost:3000/todos/${i}`, {
          method: "DELETE"
        });

        this.toDoList = this.toDoList.filter(todo => todo.id != i);
        this.completedToDoList = this.toDoList.filter(todo => todo.is_completed == true);
      },

      async completeToDo(i){
        const currentCompletion = this.toDoList.find(item => item.id == i).is_completed;
        this.toDoList.find(item => item.id == i).is_completed = !currentCompletion;
        const body = {is_completed: !currentCompletion}

        const response = await fetch(`http://localhost:3000/todos/${i}`, {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
        });

        this.completedToDoList = this.toDoList.filter(todo => todo.is_completed == true);
        console.log(this.completedToDoList);
      }

    },

    mounted() {
      this.getToDo();
    }
  }
</script>

<template>
  <main>
    <div class="column-1" >
      <input 
        type ="text" 
        v-model=taskTitle 
        v-on:keyup.enter="addToDo"
        class="to-do-input"
        placeholder="add a to do!"
      />
      
        <h1 v-if="toDoList.length == 0" class="blank-page"> nothing to do!</h1>
      
        <ToDo 
          v-for="(toDo, i) in toDoList"
          :key="toDo.id"
          :title="toDo.description"
          :isCompleted="toDo.is_completed"
          @delete-to-do="deleteToDo(toDo.id)"
          @complete-to-do="completeToDo(toDo.id)"
        />
    </div>

    <div class="column-2">
      <Sidebar 
        :tasks-completed=completedToDoList.length
        :tasks-total=toDoList.length
      />
    </div>

  </main>
</template>

<style>
  .to-do-input {
    width: 90%;
    border-width: 0 0 2px;
    border-color: var(--grey);
    padding: 5px 16px;
    margin: 16px;
    margin-bottom: 0;

  }

  main {
    display: flex;
  }

  .column-1 {
    flex: 60%;
    height:100vh;
    overflow: scroll;
    display: inline-block;
  }

  .column-2 {
    flex: 40%;
    height:100vh;
    display: inline-block;
  }

  .blank-page {
    font-size: 16px;
    margin: 16px;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey);
  }

</style>