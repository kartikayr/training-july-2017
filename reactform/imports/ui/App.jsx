import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Players } from '../api/collections.js';
import { Route , Link} from 'react-router-dom';

import Label from './Label.jsx'
import Input from './Input.jsx'
import Submit from './Submit.jsx'
import Radio from './Radio.jsx'
import Select from './Select.jsx'
import About from './About.jsx'

import Player from './Player.jsx';

export class Main extends Component{
    render(){
      return (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add Player</Link></li>
          <li><Link to="/list">List Players</Link></li>
        </ul>
      )
    }
}
// App component - represents the whole app
export class App extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      number: '',
      age: '',
      email: '',
      about: '',
      value: 'batsman',
      typed:'',
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.name.input.value;
    let number = this.number.input.value;
    let dob = this.dob.input.value;
    let runs = this.runs.input.value;
    let wickets = this.wickets.input.value;
    let post = this.state.value;
    let address = this.add.input.value;
    let about = this.about.input.value;
    let email = this.email.input.value;
    let array=[this.gender.male,this.gender.female,this.gender.others];
    let gender='';
    array.forEach((item) =>{
        if(item.checked)
          gender=item.value;
    });
    Meteor.call('players.insert',name,number,dob,runs,wickets,post,address,about,email,gender);

    this.name.input.value='';
    this.number.input.value='';
    this.dob.input.value='';
    this.runs.input.value='';
    this.wickets.input.value='';
    this.state.value='';
    this.add.input.value='';
    this.about.input.value='';
    this.email.input.value='';
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({value: event.target.value});
    console.log(event.target.value)
  }

  formData = () => {
    return (
      <div>
        <h1>Player Details</h1><br/>
        <Label text="Name : " />
        <Input
          name="name"
          ref={ input => {this.name = input;} }
          placeholder="Enter your Name"
        />
        <Label text="Date of Birth : " />
        <Input
          type="date"
          ref={ input => {this.dob = input;} }
          placeholder="Enter your Age"
        />
        <Label text="Number : " />
        <Input
          name="mobile"
          ref={ input => {this.number = input;} }
          placeholder="Enter your Number"
        /><br/>
        <Label text="Email : " />
        <Input
          name="email"
          ref={ input => {this.email = input;} }
          placeholder="Enter your Email"
        /><br/>
        <Label text="Address : " />
        <Input
          name="alphanum"
          ref={ input => {this.add = input;} }
          placeholder="Enter your address"
        /><br/>
        <Label text="Runs : " />
        <Input
          name="numb"
          ref={ input => {this.runs = input;} }
          placeholder="Enter here"
        />
        <Label text="Wickets : " />
        <Input
          name="numb"
          ref={ input => {this.wickets = input;} }
          placeholder="Enter here"
        />
        <Label text="Upload Pic : " />
        <Input
          type="file"
          ref={ input => {this.pic = input;} }
          placeholder="Enter here"
        />
        <Radio ref={ input => {this.gender = input; }}/>
        <Select onChange={this.handleChange}/>
        <About label="About Player :" ref={ input => {this.about = input;} }/>
        <Submit onClick={this.handleSubmit}/>
      </div>
    );
  }

  renderForm(){
    return (
      <form className="new-task">
        {this.formData()}
      </form>
    );
  }

  render() {
      return (
        <div className="container">
          <header>
            <h1><Link to="/">Home</Link></h1><br/>
            <h1>Enter your details ==></h1>
          </header>
          {this.renderForm()}
        </div>
      );
  }
}
