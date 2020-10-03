import React from 'react';
import * as VFX from 'react-vfx';
import { VFXImg } from 'react-vfx';
import './App.css';
import TodoList from './components/TodoList';
import Logo from './assets/img/logo.svg'

function App() {
  return (
    <VFX.VFXProvider>
    <div className="image-wrapper">
    <VFXImg
      className="image-content"
      src={Logo}
      shader="rgbGlitch"/>
    </div>
    <div className="todo-app">
      <TodoList />
    </div>
    </VFX.VFXProvider>
  );
}

export default App;
