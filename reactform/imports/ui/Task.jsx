import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <li>
        Name : {this.props.task.name}<br></br>
        Age : {this.props.task.age}<br></br>
        Number : {this.props.task.number}<br></br>
        Email : {this.props.task.email}
      </li>
    );
  }
}

Task.PropTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
