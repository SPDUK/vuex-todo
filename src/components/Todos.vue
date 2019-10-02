<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span> <span class="incomplete-box"></span> = Incomplete </span>
      <span> <span class="complete-box"></span> = Complete </span>
    </div>

    <div class="todos">
      <!-- :key is shorthand for v-bind:key  -->
      <div
        v-for="todo in allTodos"
        @dblclick="onDblClick(todo)"
        :key="todo.id"
        class="todo"
        :class="{ 'is-complete': todo.completed }"
      >
        <i @click="deleteTodo(todo.id)" class="fas fa-trash"></i>
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
//  mapGetters basically lets  us use getters from the store inside computed
// similar to connect in react, makes the store getter functions available to this component
// because we have the computed value, we can use it in the template
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"]),
  // spread actions because so we have other methods too
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        ...todo,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
