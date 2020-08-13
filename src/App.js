import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Counter App</h1>
        <div>
          <Counter initialNumber ={0} />
          <Counter initialNumber ={-10} />
          <Counter initialNumber ={5} />
          <Counter initialNumber ={30} />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
