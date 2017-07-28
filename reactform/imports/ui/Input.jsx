import React, { Component } from 'react';

export default class Input extends Component{
  // change = (e)=>{
  //   console.log(e);
  // }
  render() {
    console.log(this.props);
    return <input type={this.props.type} onChange = {this.onChange} ref = { input => {this.input = input; }} placeholder={this.props.placeholder} onChange={this.props.update}/>
  }
}
