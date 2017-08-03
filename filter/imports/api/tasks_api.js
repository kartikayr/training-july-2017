import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Tasks } from './collections.js'

if (Meteor.isServer) {
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({});
  });
  Meteor.publish('demotasks', function demotasksPublication() {
    return Tasks.find({});
  });
  Meteor.publish('weeks', function tasksPublication() {
    return Tasks.find({});
  });
  Meteor.publish('laters', function tasksPublication() {
    return Tasks.find({});
  });
}

Meteor.methods({
  'tasks.insert'(text, date) {
    check(text, String);
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
//    let deadline = moment(date,"YYYY-MM-DD").fromNow();
    let end = moment(date);
    let start = moment(new Date())
    let days = end.diff(start, 'days');
    let deadline= moment.duration(days, 'days').asDays();
    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
      checked: false,
      enddate: date,
      time: deadline,
    });
  },
  'tasks.remove'(taskId) {
    check(taskId, String);
    const task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }
    Tasks.remove(taskId);
    SubTasks.remove({task_id : taskId});
  },
  'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);
    const task = Tasks.findOne(taskId);
    if (task.private && task.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Tasks.update(taskId, { $set: { checked: setChecked } });
  },
  'tasks.setPrivate'(taskId, setToPrivate) {
    check(taskId, String);
    check(setToPrivate, Boolean);
    const task = Tasks.findOne(taskId);
    // Make sure only the task owner can make a task private
    if (task.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Tasks.update(taskId, { $set: { private: setToPrivate } });
  },
});
