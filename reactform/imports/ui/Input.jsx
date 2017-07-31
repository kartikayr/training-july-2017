import React, { Component } from 'react';

export default class Input extends Component{
  constructor(){
    super()
    this.state = {
      valid: false,
      message : '',
    }
  }
  isName = (evt) => {
    let re = new RegExp("^[a-zA-Z ]+$");
    let string = String(evt.target.value);
    if(re.test(string)){
      this.setState({valid: true,message: "Valid"})
      return true;
    }
    this.setState({valid: false, message: "Invalid"})
    return false;
  }
  isMobile = (evt) => {
    let re = new RegExp("^([0-9]{10})$");
    let string = String(evt.target.value);
    if(re.test(string)){
      this.setState({valid: true,message: "Valid"})
      return true;
    }
    this.setState({valid: false, message: "Invalid"})
    return false;
  }
  isNumb = (evt) => {
    let re = new RegExp("^[0-9]+$");
    let string = String(evt.target.value);
    if(re.test(string)){
      this.setState({valid: true,message: "Valid"})
      return true;
    }
    this.setState({valid: false, message: "Invalid"})
    return false;
  }
  isEmail = (evt) => {
    let re = new RegExp("^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$")
    let string = String(evt.target.value);
    if(re.test(string)){
      this.setState({valid: true,message: "Valid"})
      return true;
    }
    this.setState({valid: false, message: "Invalid"})
    return false;
  }
  isAlpha = (evt) => {
    let re = new RegExp("^[a-zA-Z0-9 -/,]+$");
    let string = String(evt.target.value);
    if(re.test(string)){
      this.setState({valid: true,message: "Valid"})
      return true;
    }
    this.setState({valid: false, message: "Invalid"})
    return false;
  }
  onChange = (evt) => {
    console.log("From method :",evt.target.name)
    switch(evt.target.name){
      case "name" : this.isName(evt);
                    break;
      case "mobile" : this.isMobile(evt);
                      break;
      case "numb" : this.isNumb(evt);
                    break;
      case "email" : this.isEmail(evt);
                     break;
      case "alphanum" : this.isAlpha(evt);
                        break;
      default : console.log("Default")
                break;
    }

  }
  render() {
    return (
        <div>
          <input type={this.props.type} name={this.props.name} onChange = {this.onChange} ref = { input => {this.input = input; }} placeholder={this.props.placeholder} />
          <br/><span>{this.state.message}</span>
        </div>
    )
  }
}
