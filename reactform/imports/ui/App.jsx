import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Players } from '../api/collections.js';
import { Route , Link} from 'react-router-dom'

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
    let about = this.about.input.value;
    let email = this.email.input.value;
    let array=[this.gender.male,this.gender.female,this.gender.others];
    let gender='';
    array.forEach((item) =>{
        if(item.checked)
          gender=item.value;
    });
    console.log(name);
    console.log(number);
    console.log(dob);
    console.log(post);
    console.log(about);
    console.log(gender)
    Players.insert({
      name,
      createdAt: new Date(), // current time
      dob,
      number,
      runs,
      wickets,
      post,
      gender,
      about,
    });
  }
  hChange = (e) =>{
    console.log('handle change called')
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
        <input
          onChange="sadasd"
          type="text"
          ref={ input => {this.name = input;} }
          placeholder="Enter your Name"
        /><br/>
        <Label text="Date of Birth : " />
        <Input
          type="date"
          ref={ input => {this.dob = input;} }
          placeholder="Enter your Age"
        /><br/>
        <Label text="Number : " />
        <Input
          type="number"
          ref={ input => {this.number = input;} }
          placeholder="Enter your Number"
        /><br/>
        <Label text="Email : " />
        <Input
          type="email"
          ref={ input => {this.email = input;} }
          placeholder="Enter your Email"
        /><br/>
        <Label text="Runs : " />
        <Input
          type="number"
          ref={ input => {this.runs = input;} }
          placeholder="Enter here"
        /><br/>
        <Label text="Wickets : " />
        <Input
          type="number"
          ref={ input => {this.wickets = input;} }
          placeholder="Enter here"
        /><br/>
        <Label text="Upload Pic : " />
        <Input
          type="file"
          ref={ input => {this.pic = input;} }
          placeholder="Enter here"
        /><br/>
        <Radio ref={ input => {this.gender = input; }}/><br/>
        <Select onChange={this.handleChange}/><br/>
        <About label="About Player :" ref={ input => {this.about = input;} }/><br/>
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
