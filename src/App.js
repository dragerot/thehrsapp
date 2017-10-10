import React, { Component } from 'react';
import './App.css';
import LoginPage from './component/login/LoginPage'
import AddTodo from './component/todo/AddTodo'
import VisibleTodoList from './component/todo/VisibleTodoList'
import Footer from './component/todo/Footer'
import {loginAction,logoutAction} from './component/login/loginActions'

const hallo = [ 'A','B']

class App extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="App">

          <h1 className="App-title">The hours app</h1>
          <LoginPage   />
          <AddTodo />
          <VisibleTodoList />
          <Footer />

      </div>
    );
  }
}

export default App;

/*
import logo from './logo.svg';
  <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
 */