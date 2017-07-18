import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { SubTasks } from '../api/subtasks_api.js';
import { ReactiveDict } from 'meteor/reactive-dict';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './body.html';
import './template.js';
import '../../client/route.js';

Template.sublist.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('subtasks');
});

Template.sublist.helpers({
  subtasks() {
    const instance = Template.instance();
    if (instance.state.get('hideCompleted')) {
  // If hide completed is checked, filter tasks
      return SubTasks.find({task_id: FlowRouter.current().params.taskid, checked: { $ne: true } }, { sort: { createdAt: -1 } });
    }
    return SubTasks.find({task_id: FlowRouter.current().params.taskid});
  },
});

Template.Subheader.helpers({
  incompleteCount() {
    return SubTasks.find({ checked: { $ne: false }, task_id: FlowRouter.current().params.taskid }).count();
  },
});

Template.Subheader.events({
  'submit .new-sub-task'(event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    var count;
    count = SubTasks.find({task_id: FlowRouter.current().params.taskid}).count();
    var limit = Meteor.settings.public.limit;
    if(count<limit){
    Meteor.call('subtasks.insert', text, FlowRouter.current().params.taskid);
    }
    else {
        window.alert('You cannot add more than '+limit+' subtasks!!');
    }
    // Clear form
    target.text.value = '';
  },
});
Template.sublist.events({
  'change .hide-completed input'(event, instance) {
    instance.state.set('hideCompleted', event.target.checked);
  },
});
