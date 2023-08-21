import React from 'react';
import TodoList from './components/Todo/TodoList';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <TodoList />
      </MainContainer>
    </div>
  );
}

export default App;