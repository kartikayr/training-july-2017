import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { SubTasks } from './collections.js'

if (Meteor.isServer) {
  Meteor.publish('subtasks', function subtasksPublication() {
    console.log("Pub Done");
    return SubTasks.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'subtasks.insert'(text, id) {
    check(text, String);
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    SubTasks.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      checked: false,
      task_id: id,
    });
  },
  'subtasks.remove'(taskId) {
    check(taskId, String);
    const task = SubTasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
    SubTasks.remove(taskId);
  },
  'subtasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);
    const task = SubTasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
    SubTasks.update(taskId, { $set: { checked: setChecked } });
  },
  'subtasks.setPrivate'(taskId, setToPrivate) {
    check(taskId, String);
    check(setToPrivate, Boolean);

    const task = SubTasks.findOne(taskId);

    // Make sure only the task owner can make a task private
    if (task.owner && task.private !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    SubTasks.update(taskId, { $set: { private: setToPrivate } });
  },
});
