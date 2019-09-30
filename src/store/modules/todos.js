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

    console.log(data);
  }
};
// mutation updates state
const mutations = {};

export default { state, getters, actions, mutations };
