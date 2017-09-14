import React, { Component } from 'react';
import Textbox from './Textbox';
import Msgbubble from './Msgbubble';
import './Board.css';

class Board extends Component {
  getUserName(){
    this.userName = prompt("Please input your name: ");
    console.log(this.userName);
  }

  
  
  render() {
    return(
      <div onLoad={this.getUserName()}>
        <div className="title">
          Web Chat
        </div>
        <div className="msgbgd">
          <div className="msgwin">
            <Msgbubble username={this.userName}/>
          </div>
        </div>
        <div className="tbx">
          <Textbox/>
        </div>
      </div>
    );
  }
}

export default Board;
