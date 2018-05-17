import { Template } from 'meteor/templating';
 
import { Vots } from 'vots.js';
 
import './main.html';
 
Template.body.helpers({
  vots() {
      console.log( Vots.find({}));
    return Vots.find({});
  },
});