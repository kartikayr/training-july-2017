import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './task.html';
import { Session } from 'meteor/session'
import { FlowRouter } from 'meteor/kadira:flow-router';
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
if(Meteor.isClient) {

}
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
   Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
    Meteor.call('tasks.remove', this._id);
  },
  'click .toggle-private'() {
    Meteor.call('tasks.setPrivate', this._id, !this.private);
  },
});
