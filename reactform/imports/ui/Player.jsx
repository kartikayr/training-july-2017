import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route , Link} from 'react-router-dom';
// Task component - represents a single todo item
export default class Player extends Component {
  renderOne(){
    return this.props.field.map((item, key)=>{
      if(item.key=="dob"){
        let date = moment(this.props.player[item.key], 'YYYY-MM-DD').format("DD MMM YYYY")
        console.log(date);
        return  <td key={key}>{date}</td>
      }
      if(item.key=="name"){
        return <td key={key}><Link to={`./players/${this.props.player._id}`}>{this.props.player[item.key]}</Link></td>
      }
      return <td key={key}>{this.props.player[item.key]}</td>
    });
  }
  render() {
    return (
      <tr>
        {this.renderOne()}
      </tr>
    );
  }
}

Player.PropTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  player: PropTypes.object.isRequired,
};
