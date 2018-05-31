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
    const tmp=[{nom: 'Autify', colorBot :"btn-primary" , classBot : "bt1"},
    {nom: 'ManifestApp', colorBot :"btn-secondary", classBot : "bt2"},
    {nom: 'BarcelonApp', colorBot :"btn-success", classBot : "bt3" },
    {nom: 'TAccess', colorBot :"btn-danger" , classBot : "bt4"},
    {nom: 'eTorn', colorBot :"btn-warning", classBot : "bt5" },
    {nom: 'BerryLan', colorBot :"btn-info", classBot : "bt6" },
    {nom: 'Docker4All', colorBot :"btn-dark" , classBot : "bt7"}
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
   
  'click  .bt5'(event, instance) {
    Equips.update({"_id":5},{$inc:{nvots:1}});
  },
   
  'click  .bt6'(event, instance) {
    Equips.update({"_id":6},{$inc:{nvots:1}});
  },
   
  'click  .bt7'(event, instance) {
    Equips.update({"_id":7},{$inc:{nvots:1}});
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
colorxx(n){
  const colors=['bg-primary','bg-secondary','bg-success','bg-danger','bd-warning','bg-info','bg-dark'];
  return colors[n];
},
 equips() {

  const datos=[{nom: 'Autify', colorBot :"btn-primary" , classBot : "bt1"},
  {nom: 'ManifestApp', colorBot :"btn-secondary", classBot : "bt2"},
  {nom: 'BarcelonApp', colorBot :"btn-success", classBot : "bt3" },
  {nom: 'TAccess', colorBot :"btn-danger" , classBot : "bt4"},
  {nom: 'eTorn', colorBot :"btn-warning", classBot : "bt5" },
  {nom: 'BerryLan', colorBot :"btn-info", classBot : "bt6" },
  {nom: 'Docker4All', colorBot :"btn-dark" , classBot : "bt7"}
  ];

  const colores=['bg-primary','bg-secondary','bg-success','bg-danger','bg-warning','bg-info','bg-dark'];

  //CODIGO PARA CALCULAR EL MÁXIMO DE VOTOS
  const eq2=Equips.find({},{nvots:1,_id:0},{sort: {nvots:-1}, limit:1});
    let max=0;
    eq2.forEach((equip) => {
      console.log(equip.nvots);
      if (equip.nvots > max) max=equip.nvots;
    });

  const eq=Equips.find({}, {sort: {nvots: -1}});
  
  let arEquipos=[];
  eq.forEach((equip,index) => {
    var a={ "equip": equip.equip, 
    "nvots":equip.nvots, 
    "pct":parseInt((equip.nvots/max)*100),
    "color" : colores[equip.equip-1],
    "nom" : datos[equip.equip-1].nom,
    "imatge": "pic-"+equip.equip+".png"};
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


  
  