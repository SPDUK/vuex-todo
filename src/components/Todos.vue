<template>
  <div>
    <h3>Todos</h3>
    <div class="todos">
      <!-- :key is shorthand for v-bind:key  -->
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
//  mapGetters basically lets  us use getters from the store inside computed
// similar to connect in react, makes the store getter functions available to this component
// because we have the computed value, we can use it in the template
import { mapGetters } from "vuex";
export default {
  name: "Todos",
  computed: mapGetters(["allTodos"])
};
</script>

<style></style>
