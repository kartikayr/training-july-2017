import React, { Component } from 'react';

export default class Select extends Component{
  render(){
    return(
      <div>
        <h1>You Are?</h1>
        <select value={this.props.value} onChange={this.props.onChange}>
          <option value="employee">Employee</option>
          <option value="student">Student</option>
          <option value="worker">Worker</option>
          <option value="outsider">None of above</option>
        </select>
      </div>
    )
  }
}
