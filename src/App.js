import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Header from './components/header'
import Form from './components/form'
import Listing from './components/listing'
import Button from './components/button'

class App extends Component {
  render() {
    return (
        <Router>
          <Route exact path ="/" component = {Form}/>
        </Router>
    );
  }
}

export default App;
