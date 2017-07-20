import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tasks } from '../../api/collections.js';

import './demo.html';
import '../body.html';

Template.demolist.onCreated(function demolistOnCreated() {
  console.log("On Demo List")
  Meteor.subscribe('demotasks');
});

Template.demolist.helpers({
  demos() {
    return Tasks.find({},{ sort: { createdAt: -1 }});
  },
});
Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
});
