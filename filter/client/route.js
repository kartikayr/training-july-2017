import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../imports/ui/templates/tasktemplate.html';
import '../imports/ui/templates/subtemplate.html';
import '../imports/ui/templates/demo.html';
import '../imports/ui/body.html';

FlowRouter.route('/tasks/:taskid', {
    action: function() {
        console.log("Tasks")
        BlazeLayout.render("master", {top: "Subheader", today: "sublist"});
    }
});
FlowRouter.route('/', {
  action: function() {
    console.log("Root")
    BlazeLayout.render("master", {top: "header", today: "todaylist", week: "weeklist", later: "laterlist"});
  }
});

FlowRouter.route('/demo', {
  action: function() {
    BlazeLayout.render("demolist");
  }
});
