import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Words from './Components/Words';
import Input from './Components/Input';
import Time from './Components/Time';

const mockedWords = ['test', 'dziala', 'super'];
const mockedFirstWord = 'PIERWSZY';

class App extends Component {
  constructor(){
    super();
    this.state = {
      words: mockedWords,
      firstWord: mockedFirstWord,
      inputValue: "",
      time: 60,
      good: true
    }
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (this.fullWord()) {
        this.setState({
          firstWord: this.state.words[0],
          inputValue: ''
        })
        this.state.words.shift();
        this.checkWords();
      }
    }
  }

  checkWords = () => {
    if(this.state.words.length === 0){
      console.log('test');
      axios({
        method: 'get',
        url: '/server/getWords'
      }).then(words => {
        this.setState({firstWord: words[0]});
        words.shift();
        this.setState({words: words});
      }).catch(err => console.log(err));
    }
  }

  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    },() => {
      this.setState({good:this.validateWord()});
    });
  }

  fullWord = () => {
    if(this.state.inputValue === this.state.firstWord)
      return true;
  }

  fragmentOfWord = () => {
    if(this.state.firstWord.startsWith(this.state.inputValue))
      return true;
  }

  validateWord = () =>{
    if(this.fullWord() || this.fragmentOfWord())
      return true;
    else
      return false;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to type-race</h1>
        </header>
        <Words words={this.state.words} firstWord={this.state.firstWord}good={this.state.good} />
        <Input value={this.state.inputValue} change={this.inputChange} keyPress={this.handleKeyPress}/>
        <Time value={this.state.time}/>
      </div>
    );
  }
}

export default App;
