import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="app-content">
        <h1>Hello, World!</h1>
        <p>{ Math.random() * 10 }</p>
      </div>
    );
  }
}

export default App;
