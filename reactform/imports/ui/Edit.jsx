import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Players } from '../api/collections.js';
import Player from './Player.jsx'
import { App } from './App.jsx'

import Label from './Label.jsx'
import Input from './Input.jsx'
import Submit from './Submit.jsx'
import Radio from './Radio.jsx'
import Select from './Select.jsx'
import About from './About.jsx'
import Checkbox from './Checkbox.jsx'

export default class Edit extends Component{
  componentWillMount = () => {
    let id = this.props.match.params.id;
    console.log(id);
    Meteor.call('players.get',id, (error,data) => {
      if(error){
        console.log(error);
      }
      else{
        console.log(data)
        this.setState({
          name: data.name,
          number: data.number,
          dob: data.dob,
          email: data.email,
          about: data.about,
          value: data.post,
          runs:data.runs,
          wickets: data.wickets,
          address:data.address,
          gender: data.gender,
          loading: false,
        })
      }
    });
  }
  constructor = (props) => {
    super(props);
    this.state = {
      name: '',
      number: '',
      dob: '',
      email: '',
      about: '',
      value: '',
      runs:'',
      wickets:'',
      address:'',
      about: '',
      gender: '',
      loading: true,
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
    let id= this.props.match.params.id;
    let gender='';
    array.forEach((item) =>{
        if(item.checked)
          gender=item.value;
    });
    Meteor.call('players.update',id,name,number,dob,runs,wickets,post,address,about,email,gender,(error,data) => {
      if(error)
        console.log(error)
      else {
        window.alert("Response Successfully Updated");
      }
    });

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
    console.log(event.target.value);
  }
  formData = () => {
    // let _id = this.props.match.params.id;
    // let data = Players.find({_id}).fetch();
    // console.log(data)
    return (
      <div>
        <h1>Player Details</h1><br/>
        <Label text="Name : " />
        {/* <Checkbox ref={input => {this.cname = input;}} /> */}
        <Input
          name="name"
          value={this.state.name}
          ref={ input => {this.name = input;} }
          placeholder="Enter your Name"
        />
        <Label text="Date of Birth : " />
        <Input
          type="date"
          value={this.state.dob}
          ref={ input => {this.dob = input;} }
          placeholder="Enter your Age"
        />
        <Label text="Number : " />
        <Input
          name="mobile"
          value={this.state.number}
          ref={ input => {this.number = input;} }
          placeholder="Enter your Number"
        /><br/>
        <Label text="Email : " />
        <Input
          name="email"
          value={this.state.email}
          ref={ input => {this.email = input;} }
          placeholder="Enter your Email"
        /><br/>
        <Label text="Address : " />
        <Input
          name="alphanum"
          value={this.state.address}
          ref={ input => {this.add = input;} }
          placeholder="Enter your address"
        /><br/>
        <Label text="Runs : " />
        <Input
          name="numb"
          value={this.state.runs}
          ref={ input => {this.runs = input;} }
          placeholder="Enter here"
        />
        <Label text="Wickets : " />
        <Input
          name="numb"
          value={this.state.wickets}
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
        <About label="About Player :" value = {this.state.about} ref={ input => {this.about = input;} }/>
        <Submit onClick={this.handleSubmit}/>
      </div>
    );
  }
  renderForm = () => {
    return (
      <form className="new-task">
        {this.formData()}
      </form>
    );
  }
  render = () => {
    // let id = this.props.match.params.id;
    // this.set(id);
    if(this.state.loading){
      return (<div> Loading </div>);
    }
    return (
    <div className="container">
      <header>
        <h1>Update details ==></h1>
      </header>
      {this.renderForm()}
    </div>
  );
  }
}
