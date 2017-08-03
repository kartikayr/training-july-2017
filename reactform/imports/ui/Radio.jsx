import React, { Component } from 'react';

export default class Radio extends Component{
  render(){
    return (
      <div>
        <h1>Gender</h1><br/>
          <input type="radio" name ="gender" value="Male" ref={ input => {this.male = input; }}/>Male <br/><br/>
          <input type="radio" name ="gender" value="Female" ref={ input => {this.female = input; }}/>Female<br/><br/>
          <input type="radio" name ="gender" value="Others" ref={ input => {this.others = input; }}/>Other<br></br><br></br>
      </div>
    );
  }
}
