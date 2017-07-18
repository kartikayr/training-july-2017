import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks_api.js';
import { ReactiveDict } from 'meteor/reactive-dict';
import './body.html';
import './template.js';

Template.list.onCreated(function listOnCreated() {
  console.log("On created List")
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});

Template.list.helpers({
  tasks() {
    console.log("tasks")
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
      // If hide completed is checked, filter tasks
      return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
    return Tasks.find({},{ sort: { createdAt: -1 }});
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

    // Insert a task into the collection
    Meteor.call('tasks.insert', text);
    // Clear form
    target.text.value = '';
  },
});
Template.sublist.events({
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});
