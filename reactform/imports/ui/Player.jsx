import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Task component - represents a single todo item
export default class Player extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.player.name}</td>
        <td>{this.props.player.dob}</td>
        <td>{this.props.player.number}</td>
        <td>{this.props.player.gender}</td>
        <td>{this.props.player.email}</td>
        <td>{this.props.player.address}</td>
        <td>{this.props.player.runs}</td>
        <td>{this.props.player.wickets}</td>
        <td>{this.props.player.post}</td>
        <td>{this.props.player.about}</td>
      </tr>
    );
  }
}

Player.PropTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  player: PropTypes.object.isRequired,
};
