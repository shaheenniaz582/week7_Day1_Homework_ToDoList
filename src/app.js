import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks:["Laundry","Ironing","Kids Shower","Cooking"],
      newTask:"" //New
    }, //end data
    methods: {
      saveNewTask: function(){ //NEW
        this.tasks.push(this.newTask);
        this.newTask ="";
      }
    } // ends methods
  });  //ends Vue object
}); //ends eventListener
