import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Users } from '../api/collections.js';
import { Route , Link} from 'react-router-dom'

import Label from './Label.jsx'
import Input from './Input.jsx'
import Submit from './Submit.jsx'
import Radio from './Radio.jsx'
import Select from './Select.jsx'
import About from './About.jsx'

import Task from './Task.jsx';

export class Main extends Component{
    render(){
      return (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/form">Form</Link></li>
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
      value: 'outsider',
      // b: '',
    }
    this.formData = this.formData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOption = this.handleOption.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    let name = this.name.input.value;
    let number = this.number.input.value;
    let age = this.age.input.value;
    let email = this.email.input.value;
    let post = this.state.value;
    let about = this.about.input.value;
    let array=[this.gender.male,this.gender.female,this.gender.others];
    let gender='';
    array.forEach((item) =>{
        if(item.checked)
          gender=item.value;
    });
    console.log(name);
    console.log(number);
    console.log(age);
    console.log(email);
    console.log(post);
    console.log(about);
    console.log(gender)
    Users.insert({
      name,
      createdAt: new Date(), // current time
      age,
      number,
      email,
      post,
      gender,
      about,
    });
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value)
  }
  handleOption(changeEvent) {
    this.setState({value: changeEvent.target.value});
    console.log(changeEvent.target.value)
  }
  formData() {
    return (
      <div>
        <h1>User Details</h1><br/>
        <Label text="Name : " />
        <Input
          type="text"
          ref={ input => {this.name = input;} }
          placeholder="Enter your Name"
        /><br/>
        <Label text="Age : " />
        <Input
          type="text"
          ref={ input => {this.age = input;} }
          placeholder="Enter your Age"
        /><br/>
        <Label text="Number : " />
        <Input
          type="text"
          ref={ input => {this.number = input;} }
          placeholder="Enter your Number"
        /><br/>
        <Label text="Email : " />
        <Input
          type="text"
          ref={ input => {this.email = input;} }
          placeholder="Enter your Email"
        /><br/>
        <Radio ref={ input => {this.gender = input; }}/><br/>
        <Select onChange={this.handleChange}/><br/>
        <About ref={ input => {this.about = input;} }/><br/>
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

App.PropTypes = {
  tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    tasks: Users.find({}).fetch(),
  };
}, App);
