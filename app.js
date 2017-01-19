
(function(){
  angular
  .module('superHero')
  .controller('SuperHero', SuperHero);

})();

SuperHeroCtrl.$inject = ['$http', '$scope'];

  function SuperHeroCtrl($http, $scope) {
    // var self = this;
    var rootURL = 'http://localhost:3000';
//index
    $scope.getSuperHeroes = function(){
    //   $http.get(`${rootURL}/superHeros`)
      SuperHero.get()
        .then(function(res){
          SuperHero.SuperHeroes = res.data;
          $scope.superHeroes = SuperHeroes;
          $scope.superHero = undefined;
          //console.log($scope.superHeros);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };
//show
    $scope.showSuperHero = function(id){
      $http.get(`${rootURL}/grumbles/${id}`)
        .then(function(res){
          $scope.superHero = res.data;
          console.log($scope.superHero);
        })
        .catch(function(err){
          if(err)console.log(err);
        });
    };

//delete
$scope.destroySuperHero= function(id){
  $http.delete(`${rootURL}/superHero/${id}`)
    .then(function(res){
      $scope.superHero = undefined;
      $scope.getSuperHero();
      console.log($scope.superHero);
    })
    .catch(function(err){
      if(err)console.log(err);
    });
  };
//create
$scope.createSuperHero= function(id){
  $http.post(`${rootURL}/SuperHeros/`,$scope.newSuperHero)
    .then(function(res){
      $scope.superHeroes= res.data;
      console.log($scope.superHeroes);
    })
    .catch(function(err){
      if(err)console.log(err);
    });
  };
// edit
  $scope.editSuperHero= function(superHero){
    $http.put(`${rootURL}/superHeros/${$scope.superHero.id}`,superHero)
      .then(function(res){
        //$scope.getSuperHeros(); //REdirect to Index
        $scope.superHero = res.data;
        $scope.getSuperHeroes();
        console.log($scope.superHeroes);
      })
      .catch(function(err){
        if(err)console.log(err);
      });
    };
};

var superHeroList = [
  {
    name: "Alyssa",
    number: "800-923-3587",
    group: "Wdi-Pvd",
    img: "img/Alyssa.jpg"
  },
  {
    name: "Anusone",
    number: "800-463-4921",
    group: "Wdi-Pvd",
    img: "img/Anusone.jpg"
  },
  {
    name: "Ara",
    number: "800-947-9347",
    group: "Wdi-Pvd",
    img: "img/Ara.jpg"
  },
  {
    name: "Clifton",
    number: "800-466-0365",
    group: "Wdi-Pvd",
    img: "img/Clifton.jpg"
  },
  {
    name: "Dave",
    number: "800-583-8573",
    group: "Wdi-Pvd",
    img: "img/Dave.gif"
  },
  {
    name: "Dara",
    number: "800-393-8732",
    group: "Wdi-Pvd",
    img: "img/Dara.png"
  },
  {
    name: "Eric",
    number: "800-934-9753",
    group: "Wdi-Pvd",
    img: "img/Eric.gif"
  },
  {
    name: "Jesse",
    number: "800-529-9487",
    group: "Wdi-Pvd",
    img: "img/Jesse.jpg"
  },
  {
    name: "Julie",
    number: "800-468-0328",
    group: "Wdi-Pvd",
    img: "img/Julie.jpg"
  },
  {
    name: "Mason",
    number: "800-323-9347",
    group: "Wdi-Pvd",
    img: "img/Mason.jpg"
  },
  {
    name: "Matt",
    number: "800-466-5398",
    group: "Wdi-Pvd",
    img: "img/Matt.jpg"
  },
  {
    name: "Neil",
    number: "800-466-0368",
    group: "Wdi-Pvd",
    img: "img/Neil.jpg"
  },
  {
    name: "Rafael",
    number: "800-476-0388",
    group: "Wdi-Pvd",
    img: "img/Rafael.jpg"
  },
  {
    name: "Sandy",
    number: "800-426-6758",
    group: "Wdi-Pvd",
    img: "img/Sandy.jpg"
  },
]
