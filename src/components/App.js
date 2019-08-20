import React from "react";
import TodosList from "./TodosList";
import logo from "./../logo.svg";
import "./../App.css";
import CreateTodo from "./CreateTodo";
import GithubCorner from "react-github-corner"
import { throwStatement } from "@babel/types";

const todos = {
  items: [],
  isKey: "todos",
  populate() {
    this.items = this.get();
  },
  get() {
    try {
      return JSON.parse(localStorage.getItem(this.isKey)) || [];
    } catch (e) {
      console.log("e: ", e);
    }
    return [];
  },
  save() {
    localStorage.setItem(this.isKey, JSON.stringify(this.items));
  },
  toggle(id) {
    let todoItem = this.items[id];
    todoItem.isCompleted = !todoItem.isCompleted;
    this.save();
  },
  add(obj) {
    this.items.push(obj);
    this.save();
  },
  remove(id) {
    this.items.splice(id, 1);
  },
  update(id, task) {
    let todoItem = this.items[id];
    todoItem.task = task;
    this.save();
  }
};

todos.populate();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: todos.items };
  }
  render() {
    return (
      <div>
        <GithubCorner
          href="https://github.com/sajibcse68/react-redux-graphql-apollo-todo-app"
          bannerColor="#64CEAA"
          octoColor="#fff"
          width={80}
          height={80}
          direction="right"
        />
        <h1>TODOs</h1>
        <CreateTodo />
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          editTask={this.editTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
        ></TodosList>


      </div>
    )
  }
  toggleTask(taskId) {
    todos.toggle(taskId);
    this.setState({ todos: this.state.todos });
  }
  editTask(taskId, task) {
    todos.update(taskId, task);
    this.setState({todos: this.state.todos });
  }
  deleteTask(taskId) {
    todos.remove(taskId);
    this.setState({ todos: this.state.todos });
  }
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reloadddd.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
