import React, { Component } from 'react';
import Input from './Input.jsx'

export default class About extends Component{
  render(){
    return (
      <div>
        <h1>About you :</h1><br/>
        <textarea ref={ input => {this.input = input; }} placeholder="Enter information about you" name ="textarea" /><br></br><br></br>
      </div>
    );
  }
}
