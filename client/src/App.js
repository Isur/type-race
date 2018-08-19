import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Words from './Components/Words';
import Input from './Components/Input';
import Time from './Components/Time';
import ScoreTable from './Components/ScoreTable';

import API from './config/api_calls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      words: '',
      firstWord: '',
      inputValue: "",
      time: 5,
      good: true,
      point: 0,
      start: false,
      loadedWords: false,
      loadedScores: false,
      scores: []
    }
  }

  componentDidMount() {
    API.getWords().then(words => this.setWords(words));
    API.getScores().then(scores => {
      console.log(scores);
      this.setState({ scores, loadedScores: true })
    });
  }

  setWords = (words) => {
    this.setState({ firstWord: words[0] })
    words.shift();
    this.setState({ words, loadedWords: true});
  }


  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (this.fullWord(this.state.inputValue, this.state.firstWord)) {
        this.setState({
          firstWord: this.state.words[0],
          inputValue: '',
          point: this.state.point + 1
        })
        this.state.words.shift();
        this.checkWords(this.state.words);
      }
    }
  }

  checkWords = (words) => {
    if (words.length === 0) {
      API.getWords().then(words => {
        this.setState({ words: words });
      }).catch(err => console.log(err));
    }
  }

  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
      start: true
    }, () => {
      this.setState({ good: this.validateWord(this.state.inputValue, this.state.firstWord) });
    });
  }

  fullWord = (wordOne, wordTwo) => {
    if(wordOne === wordTwo){
      return true;
    } else {
      return false;
    }
  }

  fragmentOfWord = (fragment, word) => {
    if (word.startsWith(fragment))
      return true;
    else
      return false;
  }

  validateWord = (frag,word) => {
    if (this.fullWord(frag, word) || this.fragmentOfWord(frag, word))
      return true;
    else
      return false;
  }



  endOfTime = () => {
    this.setState({ start: false, loadedScores:false })
    let name = prompt('enter your name');
    API.postResult(name, this.state.point)
      .then(() => API.getScores().then(scores => this.setState({ scores, loadedScores: true })));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Words typed: {this.state.point}</h1>
          <h4> Type as fast as you can!</h4>
        </header>
        {this.state.loadedWords && <Words words={this.state.words} firstWord={this.state.firstWord} good={this.state.good} />}
        <Input value={this.state.inputValue} change={this.inputChange} keyPress={this.handleKeyPress} />
        {this.state.start && <Time time={this.state.time} points={this.state.point} value={this.state.time} end={this.endOfTime} />}
        {this.state.loadedScores &&  <ScoreTable scores={this.state.scores} />}
      </div>
    );
  }
}

export default App;
