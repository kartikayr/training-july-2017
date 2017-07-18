import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../imports/ui/template.html';
import '../imports/ui/body.html';

FlowRouter.route('/tasks/:taskid', {
    action: function() {
        console.log("Tasks")
        BlazeLayout.render("master", {top: "Subheader", main: "sublist"});
    }
});
FlowRouter.route('/', {
  action: function() {
    console.log("Root")
    BlazeLayout.render("master", {top: "header", main: "list"});
  }
});
