import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Task component - represents a single todo item
export default class Player extends Component {
  rows(){
    
  }
  render() {
    return (
      <ul>
        <h2>Information of {this.props.player.name}</h2>
        <li>DOB : {this.props.player.dob}<br></br></li>
        <li>Number : {this.props.player.number}<br></br></li>
        <li>Runs : {this.props.player.runs}</li>
        <li>Wickets : {this.props.player.wickets}</li>
        <li>About player : {this.props.player.about}</li>
        <li>Role : {this.props.player.post}</li>
      </ul>
    );
  }
}

Player.PropTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  player: PropTypes.object.isRequired,
};
