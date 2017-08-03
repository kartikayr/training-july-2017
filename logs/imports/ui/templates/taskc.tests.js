import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';
import { Template } from 'meteor/templating';
import { SubTasks } from '../../api/collections.js';
import { Tasks } from '../../api/collections.js';


if(Meteor.isClient){
  describe('Tasks', () => {
    describe('methods', () => {
      sinon.stub(Meteor,"userId",()=>{
        return "XJpbymbnyb9yFerHh";
      });
      sinon.stub(Meteor,"user",()=>{
        return {username : 'tmeasday'};
      });
      let taskId, subtaskId;
      describe('submit', () =>{
        beforeEach(()=>{
          Tasks.remove({});
        })
        it('should emit an some_event', function(done){
          this.timeout(1000); //timeout with an error if done() isn't called within one second
          Meteor.call('tasks.insert', "hi");
          assert.equal(Tasks.find().count(), 0);
          done();
          // Template.header.on('submit .new-task',function(){
          //   // perform any other assertions you want here
          //   done();
          // });
          // execute some code which should trigger 'some_event' on myObj
        });
      })
    });
  });
}
