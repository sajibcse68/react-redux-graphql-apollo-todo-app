const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          task: action.text,
          isCompleted: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => 
        (todo.id === action.id)
          ? {...todo, isCompleted: !todo.isCompleted}
          : todo
      )
    default:
      return [
        {
          id: 1,
          task: "todo 1",
          isCompleted: false
        },
        {
          id: 2,
          task: "todo 2",
          isCompleted: false
        }
      ]
  }
};

export default todos;
