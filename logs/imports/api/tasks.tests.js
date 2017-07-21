import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { Tasks } from './collections.js';
import './tasks_api.js';

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      const userId = sinon.stub(Meteor,"userId",()=>{
        let id = "XJpbymbnyb9yFerHh";
        return id;
      });
      const userName = sinon.stub(Meteor,"user",()=>{
        let name = 'tmeasday';
        return name;
      });
      let taskId;

      describe('insert', () => {
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

      describe('delete', () => {
        beforeEach(() => {
          Tasks.remove({});
          taskId = Tasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: userId,
            username: userName,
            checked: false,
          });
        });

        it('can delete task', () => {
        const deleteTask = Meteor.server.method_handlers['tasks.remove'];
        // const invocation = { userId };
        deleteTask.apply({}, [taskId]);
        assert.equal(Tasks.find().count(), 0);
        });
      });

      describe('checked',() =>{
        beforeEach(() => {
          Tasks.remove({});
          taskId = Tasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: userId,
            username: userName,
            checked: false,
          });
        });

       it('can checked task', () => {
          const checkedTask = Meteor.server.method_handlers['tasks.setChecked'];
          // const invocation = { userId };
          checkedTask.apply({}, [taskId, !this.cheked]);
          assert.equal(Tasks.find({checked : true }).count(), 1);
        });
      });

      describe('private',() => {
        beforeEach(() => {
          Tasks.remove({});
          taskId = Tasks.insert({
            text: 'test task',
            createdAt: new Date(),
            owner: userId,
            username: userName,
            checked: false,
          });
        });

        it('can setPrivate owned task', () => {
          const setPrivateTask = Meteor.server.method_handlers['tasks.setPrivate'];
          // const invocation = { userId };
          setPrivateTask.apply({}, [taskId, !this.private]);
          assert.equal(Tasks.find({private : true }).count(), 1);
        });
      });
   });
  });
}
