import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks_api.js';
import { SubTasks } from '../api/subtasks_api.js';
import './template.html';
import './body.html';

Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
});

Template.subtask.helpers({
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

Template.subtask.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
   Meteor.call('subtasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('subtasks.remove', this._id);
  },
  'click .toggle-private'() {
    Meteor.call('subtasks.setPrivate', this._id, !this.private);
  },
});
