import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>

      </header>
      <h2 className="my-heading">Devmountain is the best</h2>
      <p className="App-intro">
        To get started, edit
        {' '}
        <code>src/App.js</code>
        {' '}
        and save to reload.
      </p>
    </div>
  );
};

export default App;
