import React, { Component } from 'react';
import Contact from './components/Contact/Contact';
import Main from './components/Main/Main';
import Portfolio from './components/Portfolio/Portfolio';
import Social from './components/Social/Social';

class App extends Component {
  render() {
    return (
      <div>
        <Portfolio />
        <Social />
      </div>
    );
  }
}

export default App;
