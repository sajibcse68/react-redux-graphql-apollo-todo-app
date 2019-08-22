import React from "react";
import { connect } from "react-redux";
// import TodosListheader from "./TodosListHeader";
import TodosListItem from "./TodosListItem";
import { getTodos } from './../actions'

class TodosList extends React.Component {
  componentDidMount() {
    this.props.getTodos();
  }
  renderItems() {
    return this.props.todos.map((c, index) => {

      return (
        <TodosListItem
          key={index}
          {...c}
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

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = {
  getTodos: getTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);