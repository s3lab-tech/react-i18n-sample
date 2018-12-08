import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import JP from './img/jp.png'
import US from './img/us.png'

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const {onClickCountryImage} = this.props;

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
            React
          </a>
          <br />
          <br />
          <br />

          <span>{this.props.dict["title"]}</span>

          <a href="#" onClick={() => onClickCountryImage("ja")}><img src={JP} /></a><span>JP</span>

          <a href="#" onClick={() => onClickCountryImage("en")}><img src={US} /></a><span>US</span>

        </header>
      </div>
    );
  }
}

// Map Redux state to component props
function mapStateToProps(state) {
  return {
    ...state.dict
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onClickCountryImage:(payload) => dispatch({type:'changeDict', payload}),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

