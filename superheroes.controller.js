(function(){
  angular
    .module('superheroes')
    .controller('SuperheroesCtrl', SuperheroesCtrl);

  SuperheroesCtrl.$inject = ['$http', '$scope'];
  console.log('hi')


  function SuperheroesCtrl($http, $scope){
    // var rootURL = 'http://localhost:3000';

    //index
    // $scope.getSuperheroes = function(){  // not needed because $http.get gets called immediately  // now it's needed lol

      $scope.heroes = heroes;
      // return $scope.superheroes;

    // };
  }
  // SuperheroesCtrl();

})();
