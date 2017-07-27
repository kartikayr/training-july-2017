import React, { Component } from 'react';

export default class Label extends Component{
  render(){
    return (<label name ={this.props.name}>{this.props.text}</label>)
  }
}
