import axios from "axios";

const state = {
  todos: [
    { id: 1, title: "hi" },
    { id: 2, title: "hi1" },
    { id: 3, title: "hi2" },
    { id: 4, title: "hi3" }
  ]
};

const getters = {
  allTodos: state => state.todos
};

const actions = {};
const mutations = {};

export default { state, getters, actions, mutations };
