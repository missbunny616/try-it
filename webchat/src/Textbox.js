import React, { Component } from 'react';
import './Textbox.css'

class Textbox extends Component {
  constructor(){

  }

  sendMsg(){
    
  }

  render() {
    return(
      <div className="textbox">
      	<button type="button" className="emojibutton" id="b1"></button>
      	<button type="button" className="imagebutton" id="b2"></button>
      	<button type="submit" className="send" id="b3" onClick={this.sendMsg()}></button>
      	<br/>
      	<form>
      		<input type="text" className="inputbox"/>
      	</form>
      </div>
    );
  }
}

export default Textbox;

