import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Message from './Message'
import Home from './Home '
import Notfound from './Notfound'

const App=()=> {
  
  
    return (
      <div className="container">
       <Router>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={AboutUs}/>
          <Route exact path='/contact' component={ContactUs}/>
          <Route exact path='/message' component={Message}/>
          <Route component={Notfound}/>
        </Switch>
      </Router>
      </div>
    );
  }


export default App;
