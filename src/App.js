import React, { Component } from 'react';
import Header  from './components/header/header';
import Main  from './components/main/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
