import React, { Component } from 'react';

export default class Select extends Component{
  render(){
    return(
      <div>
        <h1>You Are?</h1>
        <select value={this.props.value} onChange={this.props.onChange}>
          <option value="batsman">Batsman</option>
          <option value="bowler">Bowler</option>
          <option value="wicket_keeper">Wicket Keeper</option>
          <option value="all_rounder">All Rounder</option>
        </select>
      </div>
    )
  }
}
