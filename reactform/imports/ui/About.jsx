import React, { Component } from 'react';
import Input from './Input.jsx'

export default class About extends Component{
  render(){
    return (
      <div>
        <h1>{this.props.label}</h1><br/>
        <textarea ref={ input => {this.input = input; }} defaultValue= {this.props.value} placeholder="Enter information about you" name ="textarea" /><br></br><br></br>
      </div>
    );
  }
}
