import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../imports/ui/task.html';

FlowRouter.route('/tasks/:taskid', {
    action: function() {
        console.log("Tasks")
        BlazeLayout.render("main", {choose: "subtask"});
    }
});
FlowRouter.route('/', {
  action: function() {
    console.log("Root")
    BlazeLayout.render("main", {choose: "task"});
  }
});
