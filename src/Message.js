import React, { Component } from 'react'
import Header from './Header'
import './App.css';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import MessageContent from './MessageContent';
 const Message=()=> {

    return (
      <Router>
         <div style={{marginTop:'20px'}}>
          <h3 style={{color:'#800000',fontWeight:'bolder'}}> Messages </h3>
          <div>
            <Header/>
          <ul>
            <li><Link to="/message/1">Message 1</Link></li>
            <li><Link to="/message/2">Message 2</Link></li>
            <li><Link to="/message/3">Message 3</Link></li>
            <li><Link to="/message/4">Message 4</Link></li>
            <li><Link to="/message/5">Message 5</Link></li>
          </ul>
            
          
           <Route exact path="/message/:id" component={MessageContent}></Route>

          </div>
      </div>
      </Router>
    )
  }

export default Message;


