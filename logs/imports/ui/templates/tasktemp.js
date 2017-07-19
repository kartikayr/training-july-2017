import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tasks } from '../../api/collections.js';
import { HTTP } from 'meteor/http'

import './tasktemplate.html';
import '../body.html';

Template.todaylist.onCreated(function listOnCreated() {
  console.log("On created List")
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});
Template.weeklist.onCreated(function listOnCreated() {
  console.log("On created List")
  this.state = new ReactiveDict();
  Meteor.subscribe('weeks');
});
Template.laterlist.onCreated(function listOnCreated() {
  console.log("On created List")
  this.state = new ReactiveDict();
  Meteor.subscribe('laters');
});
// Template.header.onCreated(function bodyOnCreated() {
//   this.state = new ReactiveDict();
// });

Template.todaylist.helpers({
  tasks() {
    return Tasks.find({},{ sort: { createdAt: -1 }});
  },
});
Template.weeklist.helpers({
  weeks() {
    return Tasks.find({},{ sort: { createdAt: -1 }});
  },
})
Template.laterlist.helpers({
  laters() {
    return Tasks.find({},{ sort: { createdAt: -1 }});
  },
})

Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
});

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
   Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
  'click .toggle-private'() {
    Meteor.call('tasks.setPrivate', this._id, !this.private);
  },
});

Template.header.helpers({
  incompleteCount() {
    return Tasks.find({ checked: { $ne: false } }).count();
  },
});

Template.header.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    const date = target.date.value;
    // Insert a task into the collection
    Meteor.call('tasks.insert', text, date);
    // Clear form
    target.text.value = '';
  },

});
