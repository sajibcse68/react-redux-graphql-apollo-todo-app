// Ref: https://github.com/kabirbaidhya/react-todo-app

import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import axios from 'axios';
import dotenv from 'dotenv';
import reducers from './reducers';
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

// load environment variables from .env file
dotenv.config();

const store = createStore(
  reducers,
  applyMiddleware(thunk)
  );

// // apollo client
// const client = new ApolloClient({
//   uri: 'https://47b5lsprdngvha2r54el4dwirq.appsync-api.us-east-2.amazonaws.com/graphql',
//   request: operation => {
//     operation.setContext({
//       headers: {
//         authorization: `Bearer ${process.env.AWS_APP_SYNC_TOKEN}`,
//         "x-api-key": process.env.AWS_APP_SYNC_TOKEN
//       }
//     })
//   }
// })

global.$axios = axios.create({
  baseURL: 'https://47b5lsprdngvha2r54el4dwirq.appsync-api.us-east-2.amazonaws.com/graphql',
  headers: {
    'x-api-key': 'da2-tjvhtjithbblzotltsx7avrprm' // process.env.AWS_APP_SYNC_TOKEN
  }
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
