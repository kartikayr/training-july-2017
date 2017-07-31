import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export const New = React.createClass({
  getInitialState() {
    return {
      value: '',
      name: '',
      dob: '',
      phone: '',
      email: '',
      address: '',
    };
  },

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
      <Form>
        <FormGroup
          controlId="name"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Name :</ControlLabel>
          <FormControl
            type="txt"
            value={this.state.value}
            placeholder="Enter name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <FormGroup
          controlId="dob"
          validationState={this.getValidationState()}
        >
          <ControlLabel>DOB :</ControlLabel>
          <FormControl
            type="txt"
            value={this.state.value}
            placeholder="Enter name"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string date.</HelpBlock>
        </FormGroup>

      </Form>
    );
  }
});
