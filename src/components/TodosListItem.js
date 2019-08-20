import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from './../actions';

class TodosListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }
  renderActionSection() {
    console.log('>>>', this.state)
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.editTask.bind(this)}>Save</button>
          <button className="cancel-btn" onClick={this.setEditState.bind(this, false)}>Cancel</button>
        </td>
      );
    }
    return (
      <td>
        <button onClick={this.setEditState.bind(this, true)}>Edit</button>
        <button className="delete-btn" onClick={this.deleteTask.bind(this)}>Delete</button>
      </td>
    )
  }
  renderTask() {
    const { id, task, isCompleted } = this.props;
    console.log('isCompleted: ', isCompleted);
    const taskStyle = {
      cursor: 'pointer'
    };
    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.editTask.bind(this)}>
            <input ref="task" defaultValue={task} autoFocus/>
          </form>
        </td>
      );
    }

    return (
      <td onClick={() => this.props.toggleTodo(id)} style={taskStyle}>{task}</td>
    )
  }
  render(){
    const {isCompleted} = this.props;
    return (
      <tr className={'todo-' + (isCompleted ? 'completed' : 'not-completed') }>
        {this.renderTask()}
        {this.renderActionSection()}
      </tr>
    )
  }
  setEditState(isEditing) {
    this.setState({
      isEditing
    });
  }
  editTask(e) {
    this.props.editTask(this.props.id, this.refs.task.value);
    this.setState({
      isEditing: false
    });
    e.preventDefault();
  }
  deleteTask() {
    this.props.deleteTask(this.props.id);
  }
}

const mapStateToProps = state => {
  return {
    todoss: state.todos
  }
}

const mapDispatchToProps = {
  toggleTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosListItem);