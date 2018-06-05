import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Main from './components/Main/Main';
import Portfolio from './components/Portfolio/Portfolio';
import Social from './components/Social/Social';
import Contact from './components/Contact/Contact'; 

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Main} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/social" component={Social} />
        <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default App;
