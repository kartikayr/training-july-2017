import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tasks } from '../../api/collections.js';
import { HTTP } from 'meteor/http'

import './tasktemplate.html';
import '../body.html';

Template.list.onCreated(function listOnCreated() {
  console.log("On created List")
  this.state = new ReactiveDict();
  Meteor.subscribe('tasks');
});
// Template.header.onCreated(function bodyOnCreated() {
//   this.state = new ReactiveDict();
// });

Template.list.helpers({
  tasks() {
    console.log("tasks")
    const instance = Template.instance();
    console.log(instance.state.get('hideCompleted'))
    if (instance.state.get('hideCompleted')) {
      // If hide completed is checked, filter tasks
      return Tasks.find({ checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
    return Tasks.find({},{ sort: { createdAt: -1 }});
  },

});

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
    // Insert a task into the collection
    Meteor.call('tasks.insert', text);
    // Clear form
    target.text.value = '';
  },
});

Template.list.events({
  'change .hide-completed input'(event, instance) {
    // console.log("check")
    instance.state.set('hideCompleted', event.target.checked);
  },
})
