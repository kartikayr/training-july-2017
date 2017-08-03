import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const SubTasks = new Mongo.Collection('subtasks');
global.Tasks = SubTasks;

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('subtasks', function tasksPublication() {
    return SubTasks.find({
    $or: [
      { private: { $ne: true } },
      { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'subtasks.insert'(text) {
    check(text, String);
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      console.log('here');
      throw new Meteor.Error('not-authorized','ghgdhdfh');
    }
    // Tracker.autorun(function() {
    //   FlowRouter.watchPathChange();
    //   var currentContext = FlowRouter.();
    //     // do anything with the current context
    //     // or anything you wish
        SubTasks.insert({
          text,
          createdAt: new Date(),
          owner: Meteor.userId(),
          username: Meteor.user().username,
          task_id:
        });
      // });
  },
  'subtasks.remove'(taskId) {
    check(taskId, String);
    SubTasks.remove(taskId);
  },
  'subtasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);
    SubTasks.update(taskId, { $set: { checked: setChecked } });
  },
  'subtasks.setPrivate'(taskId, setToPrivate) {
    check(taskId, String);
    check(setToPrivate, Boolean);

    const subtask = SubTasks.findOne(taskId);

    // Make sure only the task owner can make a task private
    if (subtask.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    SubTasks.update(taskId, { $set: { private: setToPrivate } });
  },
});
