import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';

import { SubTasks } from './collections.js';
import { Tasks } from './collections.js';
import './tasks_api.js';
import './subtasks_api.js';

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      sinon.stub(Meteor,"userId",()=>{
        return "XJpbymbnyb9yFerHh";
      });
      sinon.stub(Meteor,"user",()=>{
        return {username : 'tmeasday'};
      });
      // let limit = sinon.stub(Meteor );

      let taskId,subtaskId;

      describe('Insert', () => {
        beforeEach(() => {
          Tasks.remove({});
        });
        it('can insert task', () => {
          const insertTask = Meteor.server.method_handlers['tasks.insert'];
          // Set up a fake method invocation that looks like what the method expects
          // const invocation = { userId };
          // Run the method with `this` set to the fake invocation
          insertTask.apply({}, ["test-task"]);
          assert.equal(Tasks.find().count(),1);
        })
      });

      describe('Delete', () => {
        beforeEach(() => {
          Tasks.remove({});
          taskId = Tasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            checked: false,
          });
          Tasks.insert({
            text: 'test task-2',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            checked: false,
          });
        });
        it('can delete task', () => {
        const deleteTask = Meteor.server.method_handlers['tasks.remove'];
        // const invocation = { userId };
        deleteTask.apply({}, [taskId]);
        assert.equal(Tasks.find({_id:taskId}).count(), 0);
        });
      });

      describe('Checked',() =>{
        beforeEach(() => {
          Tasks.remove({});
          taskId = Tasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            checked: false,
          });
          Tasks.insert({
            text: 'test task-2',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            checked: false,
          });
        });

       it('can checked task', () => {
          const checkedTask = Meteor.server.method_handlers['tasks.setChecked'];
          // const invocation = { userId };
          checkedTask.apply({}, [taskId, true]);
          assert.equal(Tasks.find({_id: taskId, checked : true}).count(), 1);
        });
      });

      describe('Private',() => {
        beforeEach(() => {
          Tasks.remove({});
          taskId = Tasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            checked: false,
            private: false,
          });
          Tasks.insert({
            text: 'test task-2',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            checked: false,
          });
        });

        it('can setPrivate owned task', () => {
          const setPrivateTask = Meteor.server.method_handlers['tasks.setPrivate'];
          // const invocation = { userId };
          setPrivateTask.apply({}, [taskId, true]);
          assert.equal(Tasks.find({_id: taskId, private : true }).count(), 1);
        });
      });

      describe('Delete all subtasks of deleted task',() =>{
        beforeEach(()=>{
          Tasks.remove({});
          SubTasks.remove({});
          taskId = Tasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            checked: false,
            private: false,
          });
          Tasks.insert({
            text: 'test task-2',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            checked: false,
          });
          SubTasks.insert({
            text: 'test sub-task',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            checked: false,
            task_id: taskId,
          });
          SubTasks.insert({
            text: 'test sub-task-2',
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
            checked: false,
            task_id: taskId,
          });
        })
        it('can delete subtasks of deleted tasks',() =>{
          const deleteTask = Meteor.server.method_handlers['tasks.remove'];
          // const invocation = { userId };
          deleteTask.apply({}, [taskId]);
          assert.equal(Tasks.find({_id: taskId}).count(), 0);
          assert.equal(SubTasks.find({task_id: taskId}).count(),0);
        })
      });
   });
  });
}
