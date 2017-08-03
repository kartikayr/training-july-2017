import React, { Component } from 'react';
//
// export default class Label extends Component{
//   render(){
//     return (<label name ={this.props.name}>{this.props.text}</label>)
//   }
// }

const Label = (props) => {
  return (<label name ={props.name}>{props.text}</label>)
}

export default Label;
