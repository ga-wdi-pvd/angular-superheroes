(function(){
  angular
    .module('superheroesApp')
    //          name of controller, callback function()
    .controller('superheroesCtrl', superheroesController);

  function superheroesController(){
    // set self to this so you can use this object in callbacks
    var self = this;

    self.superheroes = [
      { name: 'Spiderman', phone: 4012348756 },
      { name: 'Iron Man', phone: 4012347466 },
      { name: 'Build an app with Angular', completed: false },
      { name: 'Project 3', completed: false },
      { name: 'Build an app with Express', completed: false },
      { name: 'Build an app with Mongo', completed: false },
      { name: 'Build an app with React', completed: false },
      { name: 'Project 4', completed: false },
      { name: 'Become a Rockstar', completed: true }
    ];
    self.addTodo = function(){
      var todo = {
        name: self.newTodo,
        completed: false
      };
      self.todos.push(todo);
      console.log("Adding a Todo...");
    };
  }

})();
