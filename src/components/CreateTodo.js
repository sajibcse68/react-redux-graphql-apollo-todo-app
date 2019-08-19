import React from "react";

class CreateTodo extends React.Component {
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} className="create-todo-form">
        <input type="text" placeholder="Task" ref="taskMessage" autoFocus />
        <button>Add</button>
      </form>
    );
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.createTask(this.refs.taskMessage.value);
    this.refs.taskMessage.value = "";
  }
}

export default CreateTodo;