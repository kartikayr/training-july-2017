import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Players } from './collections.js'

if (Meteor.isServer) {
  Meteor.publish('players', function demotasksPublication() {
    return Players.find({});
  });
}

Meteor.methods({
  'players.insert' : (name,number,dob,runs,wickets,post,address,about,email,gender) => {
    Players.insert({
      name,
      dob,
      number,
      gender,
      email,
      address,
      runs,
      wickets,
      post,
      about,
    });
  },
  'players.update' : (id,name,number,dob,runs,wickets,post,address,about,email,gender) => {
    Players.update({_id:id},{
      $set :{
      name,
      dob,
      number,
      gender,
      email,
      address,
      runs,
      wickets,
      post,
      about,
      }
    });
  },
  'players.get' : (id) => {
    let arr = Players.findOne({_id:id});
    return arr;
  },
});
