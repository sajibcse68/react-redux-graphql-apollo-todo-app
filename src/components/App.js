import React from "react";
import TodosList from "./TodosList";
import logo from "./../logo.svg";
import "./../App.css";
import CreateTodo from "./CreateTodo";
import GithubCorner from "react-github-corner";
import { throwStatement } from "@babel/types";

class App extends React.Component {
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
        />
      </div>
    );
  }
}

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
