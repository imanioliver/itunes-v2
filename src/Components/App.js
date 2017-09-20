import React, { Component } from 'react';
import '../styles/App.css';

import AudioBar from './AudioBar.js';
import Carousel from './Carousel.js';
import SearchForm from './SearchForm.js';
import SearchResults from './SearchResults.js';


class App extends Component {
  render() {

      
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
