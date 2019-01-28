import React, { Component } from 'react'
import './App.css';
 class MessageContent extends Component {
    state={
        chat:[
         {id:1,text:'Hi Dear, welcome'} ,
         {id:2,text: 'You are fabulous'},
         {id:3, text: 'See you later'},
         {id:4, text: 'Have a nice day'},
         {id:5, text: 'You are awesome'},
        ]
      }
  render() {
      const id=this.props.match.params;
      console.log(id,'llllllllllllllllll')
      let msg=this.state.chat.find((m)=>m.id==this.props.match.params.id)
    return (
      <div className="texDiv">
       Message: {msg.text}
      </div>
    )
  }
}
export default MessageContent