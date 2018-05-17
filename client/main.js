import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Vots } from '../imports/vots.js';
import { Equips } from '../imports/vots.js';
import './main.html';

Template.equips.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.equips.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.equips.events({
  'click .bt1'(event, instance) {
    Equips.update({"_id":1},{$inc:{nvots:1}});
    console.log(event.target)
  },
  'click  .bt2'(event, instance) {
    Equips.update({"_id":2},{$inc:{nvots:1}});
  },
   'click  .bt3'(event, instance) {
    Equips.update({"_id":3},{$inc:{nvots:1}});
  }, 
  'click  .bt4'(event, instance) {
    Equips.update({"_id":4},{$inc:{nvots:1}});
  },
});

Template.vots.helpers({
  vots() {
//    return Vots.find({}).sort({nvots:-1});
    return Vots.find({})
},
  equips() {
    return Equips.find({}, {sort: {nvots: -1}});
  
},
  acumulats(){
    return [];/*Vots.aggregate([
      {"$group":{_id:"$Equip",count:{$sum:1}}},
      {$sort:{count:-1}}
    ])*/
  }
});


  
  