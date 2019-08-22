const setTodos = todos => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getTodos = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'SET_TODOS':
      setTodos([...action.todos])
      return getTodos();
    case "ADD_TODO":
      setTodos([...getTodos(), {
        id: state.length,
        task: action.text,
        isCompleted: false
      }]);
      console.log('....', getTodos());
      return getTodos();
    case "EDIT_TODO":
      const todosAfterEdit = state.map(todo => {
        const payload = action.payload;
        return todo.id === payload.id ? { ...payload } : todo;
      });
      setTodos(todosAfterEdit);
      return getTodos();
    case "TOGGLE_TODO":
      const todosAfterToggle = state.map(todo =>
        todo.id === action.id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
      setTodos(todosAfterToggle);
      return getTodos();
    case "DELETE_TODO":
      const todos = getTodos();
      const newTodos = todos.filter(todo => todo.id !== action.id);
      setTodos(newTodos);
      return getTodos();
    default:
      return getTodos();
    // return [
    //   {
    //     id: 1,
    //     task: "todo 1",
    //     isCompleted: false
    //   },
    //   {
    //     id: 2,
    //     task: "todo 2",
    //     isCompleted: false
    //   }
    // ]
  }
};

export default todos;
