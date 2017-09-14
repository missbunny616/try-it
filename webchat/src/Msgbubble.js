import React, {Component} from 'react';
import './Msgbubble.css';

class Msgbubble extends Component{
	/*constructor(){
		super();
		this.state = {
			messages:[{
				"type": 0,
				"image": "./send.jpg",
				"text": "Hello"
				}
			]
		};
	}*/
	
	render(){
		return(
			<div className="msgbubble">
				<div className="info">
					<img className="userpic" src="./send.jpg" alt="pic"/>
					<span className="username">{this.props.username}</span>
				</div>
				<br/>
				<form className="msg">OMG, I am gonna be mad!</form>		
			</div>
		);
	}
}

export default Msgbubble;