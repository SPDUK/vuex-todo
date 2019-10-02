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
  },
  async filterTodos({ commit }, e) {
    const limit = Number(e.target.value);

    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
    );

    commit("setTodos", data);
  },
  async updateTodo({ commit }, updTodo) {
    const { data } = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
      updTodo
    );

    commit("updateTodo", data);
  }
};
// mutation updates state
// first arg = current state, second is the argument being passed by the commit
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),
  updateTodo: (state, updTodo) => {
    const idx = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (idx !== -1) state.todos.splice(idx, 1, updTodo);
  }
};

export default { state, getters, actions, mutations };
