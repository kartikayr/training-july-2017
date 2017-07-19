import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');
global.Tasks = Tasks;

export const SubTasks = new Mongo.Collection('subtasks');
global.SubTasks = SubTasks;
