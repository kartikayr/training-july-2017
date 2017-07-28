import React, { Component } from 'react';

export default class Radio extends Component{
  render(){
    return (
      <div>
        <h1>Gender</h1><br/>
        Male   : <input type="radio" name ="gender" value="Male" ref={ input => {this.male = input; }}/><br></br><br></br>
        Female : <input type="radio" name ="gender" value="Female" ref={ input => {this.female = input; }}/><br/><br/>
        Others : <input type="radio" name ="gender" value="Others" ref={ input => {this.others = input; }}/><br></br><br></br>
      </div>
    );
  }
}
