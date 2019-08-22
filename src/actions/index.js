export const getTodos = () => {
  return async dispatch => {
    const resp = await global.$axios.post("", {
      query: `
      query listTodos {
        listTodos {
          items {
            id
            name
            description
          }
        }
      }
    `
    });
    const todos = resp.data.data.listTodos;
    console.log("resp: ", resp.data.data.listTodos);
    dispatch({
      type: "SET_TODOS",
      todos: todos.items
    });
  };
};

export const addTodo = text => ({
  type: "ADD_TODO",
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const editTodo = payload => ({
  type: "EDIT_TODO",
  payload
});

export const deleteTodo = id => ({
  type: "DELETE_TODO",
  id
});
