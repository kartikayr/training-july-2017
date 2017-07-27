import React, { Component } from 'react';

export default class Input extends Component{
  render() {
    return <input type={this.props.type} ref = { input => {this.input = input; }} placeholder={this.props.placeholder} onChange={this.props.update}/>
  }
}
