import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import './task.js';
import { Tasks } from '../api/tasks.js';
import './body.html';
import { SubTasks } from '../api/subtasks.js';
import { Session } from 'meteor/session'

Template.main.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  // if(Session.get('/')){
  //     return Meteor.subscribe('tasks');
  // }
  Meteor.subscribe('tasks');
});

Template.main.helpers({
  tasks() {
    const instance = Template.instance();
      if (instance.state.get('hideCompleted')) {
          // If hide completed is checked, filter tasks
          return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: 1 } });
      }
      // Otherwise, return all of the tasks
    return Tasks.find({});
  },
});
Template.body.helpers({
  incompleteCount() {
    return Tasks.find({ checked: { $ne: true } }).count();
  },
});
Template.body.events({
  'submit .new-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
  Meteor.call('tasks.insert', text);
    // Clear form
    target.text.value = '';
  },
  'change .hide-completed input'(event, instance) {
      instance.state.set('hideCompleted', event.target.checked);
  },
});
