import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Logo from './assets/img/logo.png'

function App() {
  return (
    <>
    <div className="image-wrapper">
      <img className="image-content" src={Logo} alt="Logo" />
    </div>
    <div className="todo-app">
      <TodoList />
    </div>
    </>
  );
}

export default App;
