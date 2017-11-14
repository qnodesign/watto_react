import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';

class App extends Component {
  state = {};

  testFunc = () => {
    const res = [];
    const request = async () => {
      const response1 = await fetch(
        'https://jsonplaceholder.typicode.com/posts/10'
      );
      const json1 = await response1.json();
      res.push(json1);
      const response2 = await fetch(
        'https://jsonplaceholder.typicode.com/comments/10'
      );
      const json2 = await response2.json();
      res.push(json2);
      res.push({ test: 'szeretlek anu jó éjt ma is!!!' });
      return res;
    };

    request().then(data => this.setState({ data }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Content text={this.state.data} />
        <button onClick={this.testFunc}>test</button>
      </div>
    );
  }
}

export default App;
