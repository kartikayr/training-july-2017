import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Players } from '../api/collections.js';
import Player from './Player.jsx'

export class Info extends Component{

  renderTasks(field) {
      return this.props.players.map((player) => (
        <Player field={field} key={player._id} player={player} />
      ));
  }
  renderTitle(field) {
    return field.map((item)=>{
      return <th key={item.key}>{item.value}</th>
    })
  }
  render(){
    const field =[{key: 'name', value: 'Name'},
                {key: 'dob', value: 'DOB'},
                {key: 'number', value: 'Phone'},
                {key: 'gender', value: 'Gender'},
                {key: 'email', value: 'Email'},
                {key: 'address', value: 'Address'},
                {key: 'runs', value: 'Runs'},
                {key: 'wickets', value: 'Wickets'},
                {key: 'post', value: 'Role'},
                {key: 'about', value: 'About'},
              ];
    return(
      <table>
      <tbody>
        <tr>
          {this.renderTitle(field)}
        </tr>
        {this.renderTasks(field)}
      </tbody>
      </table>
    )
  }
}

Info.PropTypes = {
  players: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('players');
  return {
    players: Players.find({}).fetch(),
  };
}, Info);
