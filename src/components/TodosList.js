import React from "react";
// import TodosListheader from "./TodosListHeader";
import TodosListItem from "./TodosListItem";

export default class TodosList extends React.Component {
  renderItems() {
    return this.props.todos.map((c, index) => {
    console.log('todos: ', {...c})

      return (
        <TodosListItem
          key={index}
          {...c}
          id={index}
          toggleTask={this.props.toggleTask}
          editTask={this.props.editTask}
          deleteTask={this.props.deleteTask}
        />
      );
    });
  }
  render() {
    if(!this.props.todos.length) {
      return <p className="tutorial">Create your first todo!</p>
    }

    return (
      <table border="1">
         {/* <TodosListHeader /> */}
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    )
  }
}
