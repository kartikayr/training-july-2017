import React, { Component } from 'react';

export default class Submit extends Component{
  render(){
    return  <button type="button" value="Submit" onClick={this.props.onClick}>Submit</button>
  }
}
