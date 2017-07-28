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
      <div>{this.renderTasks()}</div>
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
