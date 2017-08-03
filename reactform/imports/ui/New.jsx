import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';
import { Players } from '../api/collections.js';

export default class New extends Component{
  constructor(){
    super();
    this.state = {
      value: '',
      numb: '',
      name: '',
      dob: '',
      phone: '',
      email: '',
      address: '',
      runs: '',
      wickets: '',
      message: '',
      date: '',
    };
  }

  isName() {
    let msg;
    const string = this.state.name;
    const re = new RegExp("^[a-zA-Z ]+$");
    if (re.test(string)){
       msg = "Valid"
       return 'success';
    }
    else if(string===''){
      msg = "Required"
      return null;
    }
    else{
      msg = "Invalid"
      return 'error';
    }
  }

  isPhone() {
    const string = this.state.phone;
    const re = new RegExp("^([0-9]{10})$");
    if (re.test(string)){
       msg = "Valid"
       return 'success';
    }
    else if(string===''){
      msg = "Required"
      return null;
    }
    else{
      msg = "Invalid"
      return 'error';
    }
  }

  isEmail() {
    const string = this.state.email;
    const re = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$");
    if (re.test(string)){
       msg = "Valid"
       return 'success';
    }
    else if(string===''){
      msg = "Required"
      return null;
    }
    else{
      msg = "Invalid"
      return 'error';
    }
  }

  isRuns() {
    const string = this.state.runs;
    const re = new RegExp("^[0-9]+$");
    if (re.test(string)){
       msg = "Valid"
       return 'success';
    }
    else if(string===''){
      msg = "Required"
      return null;
    }
    else{
      msg = "Invalid"
      return 'error';
    }
  }

  isWickets() {
    const string = this.state.wickets;
    const re = new RegExp("^[0-9]+$");
    if (re.test(string)){
       msg = "Valid"
       return 'success';
    }
    else if(string===''){
      msg = "Required"
      return null;
    }
    else{
      msg = "Invalid"
      return 'error';
    }
  }

  isDate(){
    const re = new RegExp("^([0-2][0-9]||3[0-1])/(0[0-9]||1[0-2])/([0-9][0-9])[0-9][0-9]$");
    const string = this.state.date;
    if (re.test(string)){
       msg = "Valid"
       return 'success';
    }
    else if(string===''){
      msg = "Required"
      return null;
    }
    else{
      msg = "Invalid"
      return 'error';
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    switch(e.target.name){
      case "name" : this.setState({ name:e.target.value});
                    break;
      case "phone" : this.setState({ phone: e.target.value});
                      break;
      case "runs" : this.setState({ runs: e.target.value});
                      break;
      case "wickets" : this.setState({ wickets: e.target.value});
                      break;
      case "email" : this.setState({ email: e.target.value});
                      break;
      case "date" : this.setState({ date: e.target.value});
                    break;
      default : console.log("Default")
                break;
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let name = this.state.name;
    let number = this.state.phone;
    let dob = this.state.date;
    let runs = this.state.runs;
    let wickets = this.state.wickets;
    // let post = this.state.value;
    // let address = this.add.input.value;
    // let about = this.about.input.value;
    let email = this.state.email;
    // let array=[this.gender.male,this.gender.female,this.gender.others];
    // let gender='';
    // array.forEach((item) =>{
    //     if(item.checked)
    //       gender=item.value;
    // });
    Players.insert({
      name,
      createdAt: new Date(), // current time
      dob,
      number,
      runs,
      wickets,
      email,
      // post,
      // gender,
      // about,
      // address,
    });
  }

  render() {
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        <h3>Player Form</h3>
        <FormGroup
          controlId="name"
          validationState={this.isName()}
        >
          <ControlLabel>Name :</ControlLabel>
          <FormControl
            type="txt"
            name="name"
            value={this.state.name}
            placeholder="Enter name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>{this.validationState}</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="dob"
          validationState={this.isDate()}
        >
          <ControlLabel>Date :</ControlLabel>
          <FormControl
            type="txt"
            name="date"
            value={this.state.date}
            placeholder="Enter date"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on date format(dd/MM/YYYY).</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="phone"
          validationState={this.isPhone()}
        >
          <ControlLabel>Phone :</ControlLabel>
          <FormControl
            type="txt"
            name="phone"
            value={this.state.phone}
            placeholder="Enter phone number"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on Length(10) and Number only.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="email"
          validationState={this.isEmail()}
        >
          <ControlLabel>Email :</ControlLabel>
          <FormControl
            type="txt"
            name="email"
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on Email format.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="runs"
          validationState={this.isRuns()}
        >
          <ControlLabel>Runs :</ControlLabel>
          <FormControl
            type="txt"
            name="runs"
            value={this.state.runs}
            placeholder="Enter runs scored"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on Number only.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="wickets"
          validationState={this.isWickets()}
        >
          <ControlLabel>Wickets :</ControlLabel>
          <FormControl
            type="txt"
            name="wickets"
            value={this.state.wickets}
            placeholder="Enter wickets taken"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on Number only.</HelpBlock>
        </FormGroup>
        <Button className="btn-primary centerButton" type="submit">Save</Button>
      </Form>
    );
  }
}
