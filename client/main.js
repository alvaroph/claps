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
  nomeq(num){
    const noms=['','Autify','ManifestApp','BarcelonApp','bg-success'];
    return noms[n];
  },llista(){
    const tmp=[{nom: 'Autify', colorBot :"btn-primary" },
    {nom: 'ManifestApp', colorBot :"btn-secondary" },
    {nom: 'BarcelonApp', colorBot :"btn-success" },
    {nom: 'TAccess', colorBot :"btn-danger" },
    {nom: 'eTorn', colorBot :"btn-warning" },
    {nom: 'BerryLan', colorBot :"btn-info" },
    {nom: 'Docker4All', colorBot :"btn-dark" }
    ];
    return tmp;
    
  }
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
/*equips() {
  return Equips.find({}, {sort: {nvots: -1}});

},*/
posicio(n){
  return n+1;
},
color(n){
  const colors=['bg-success','bg-warning','bg-success','bg-success'];
  return colors[n];
},
 equips() {

  const eq2=Equips.find({},{nvots:1,_id:0},{sort: {nvots:-1}, limit:1});
    let max=0;
    eq2.forEach((equip) => {
      console.log(equip.nvots);
      if (equip.nvots > max) max=equip.nvots;
    });

  const eq=Equips.find({}, {sort: {nvots: -1}});
  
  let arEquipos=[];
  eq.forEach((equip) => {
    var a={ "equip": equip.equip, "nvots":equip.nvots, "pct":parseInt((equip.nvots/max)*100)};
    console.log(a)
    arEquipos.push(a)
  });

  /*let arEquipos =[
    { "equip": 1, "nvots":10, "pct":10},
    { "equip": 2, "nvots":10, "pct":10},
    { "equip": 3, "nvots":10, "pct":10},
    { "equip": 4, "nvots":10, "pct":10}

  ]*/
  console.log(arEquipos)
  return arEquipos;
},
  acumulats(){
    return [];/*Vots.aggregate([
      {"$group":{_id:"$Equip",count:{$sum:1}}},
      {$sort:{count:-1}}
    ])*/
  },
  maxVots(){
    const eq=Equips.find({},{nvots:1,_id:0},{sort: {nvots:-1}, limit:1});
    let max=0;
    eq.forEach((equip) => {
      console.log(equip.nvots);
      if (equip.nvots > max) max=equip.nvots;
    });
    console.log(max);
    return max;
  }
});


  
  