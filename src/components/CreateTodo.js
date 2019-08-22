import React from "react";
import { connect } from 'react-redux';
import { addTodo } from '../actions'

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputEl: '' };
  }

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
    if (!this.refs.taskMessage.value.trim()) return;
    this.props.addTodo(this.refs.taskMessage.value);
    this.refs.taskMessage.value = '';
    // this.props.createTask(this.refs.taskMessage.value);
    // this.refs.taskMessage.value = "";
  }
}

const mapDispatchToProps = {
  addTodo
}

export default connect(null, mapDispatchToProps)(CreateTodo);