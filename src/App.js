import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import JP from './img/jp.png'
import US from './img/us.png'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      lang: 'ja',
      dic: require("./locales/ja/translation.json")
    };
  }

  changeLang = (lang) => {
    this.setState({
      lang: lang,
      dic: require("./locales/" + lang + "/translation.json")
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <p>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <span>{this.state.dic["title"]}</span>

          <a href="#" onClick={() => this.changeLang("ja")}><img src={JP} /></a><span>JP</span>

          <a href="#" onClick={() => this.changeLang("en")}><img src={US} /></a><span>US</span>

        </header>
      </div>
    );
  }
}

export default App;
