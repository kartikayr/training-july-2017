import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
//import { sinon } from 'meteor/practicalmeteor:sinon';
import { userId, userName } from './tasks.tests.js'
import { SubTasks } from './collections.js';
import './subtasks_api.js';

if (Meteor.isServer) {
  describe('SubTasks', () => {
    describe('sub-methods', () => {
      let taskId;

      describe('sub-insert', () => {
        beforeEach(() => {
          SubTasks.remove({});
        });

        it('can insert sub-task', () => {
          const insertsubTask = Meteor.server.method_handlers['subtasks.insert'];
          // Set up a fake method invocation that looks like what the method expects
          // const invocation = { userId };
          // Run the method with `this` set to the fake invocation
          insertsubTask.apply({}, ["test-task"]);
          assert.equal(SubTasks.find().count(),1);
        })
      });

      describe('sub-delete', () => {
        beforeEach(() => {
          SubTasks.remove({});
          taskId = SubTasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: userId,
            username: userName,
            checked: false,
          });
        });

        it('can delete sub-task', () => {
        const deletesubTask = Meteor.server.method_handlers['subtasks.remove'];
        // const invocation = { userId };
        deletesubTask.apply({}, [taskId]);
        assert.equal(SubTasks.find().count(), 0);
        });
      });

      describe('sub-checked',() =>{
        beforeEach(() => {
          SubTasks.remove({});
          taskId = SubTasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: userId,
            username: userName,
            checked: false,
          });
        });

       it('can checked sub-task', () => {
          const checkedsubTask = Meteor.server.method_handlers['subtasks.setChecked'];
          // const invocation = { userId };
          checkedsubTask.apply({}, [taskId, !this.cheked]);
          assert.equal(SubTasks.find({checked : true }).count(), 1);
        });
      });

      describe('sub-private',() => {
        beforeEach(() => {
          SubTasks.remove({});
          taskId = SubTasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: userId,
            username: userName,
            checked: false,
          });
        });

        it('can setPrivate sub-task', () => {
          const setPrivateSubTask = Meteor.server.method_handlers['subtasks.setPrivate'];
          // const invocation = { userId };
          setPrivateSubTask.apply({}, [taskId, !this.private]);
          assert.equal(SubTasks.find({private : true }).count(), 1);
        });
      });
   });
  });
}
