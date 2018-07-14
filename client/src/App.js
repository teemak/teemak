import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Main from './components/layouts/Main/Main';
import Portfolio from './components/layouts/Portfolio/Portfolio';
import Social from './components/layouts/Social/Social';
import Contact from './components/layouts/Contact/Contact'; 

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
