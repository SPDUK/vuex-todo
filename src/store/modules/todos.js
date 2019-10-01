import axios from "axios";

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

// action -> gets response -> mutation
// actions can be async, mutations can't
// takes object as argument
const actions = {
  async fetchTodos({ commit }) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    // first arg = mutation to call
    // second arg = what to call it with
    commit("setTodos", data);
  },
  // takes in title as second argument
  async addTodo({ commit }, title) {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      {
        title,
        completed: false
      }
    );

    commit("newTodo", data);
  },
  async deleteTodo({ commit }, id) {
    const { data } = await axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    commit("removeTodo", id);
  }
};
// mutation updates state
// first arg = current state, second is the argument being passed by the commit
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id))
};

export default { state, getters, actions, mutations };
