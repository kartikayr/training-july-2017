import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Players } from '../api/collections.js';
import Player from './Player.jsx'

export class Info extends Component{
  renderTasks() {
      return this.props.players.map((player) => (
        <Player key={player._id} player={player} />
      ));
  }
  render(){
    return(
      <table>
        <tr>
          <th>Name</th>
          <th>DOB</th>
          <th>Phone</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Address</th>
          <th>Runs</th>
          <th>Wickets</th>
          <th>Role</th>
          <th>About</th>
        </tr>
        {this.renderTasks()}
      </table>
    )
  }
}

Info.PropTypes = {
  players: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    players: Players.find({}).fetch(),
  };
}, Info);
