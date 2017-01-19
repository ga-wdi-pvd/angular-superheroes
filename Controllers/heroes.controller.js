(function(){
  angular
    .module('superApp')
    .controller('heroCtrl', heroController);

  function heroController(){

    this.heroes = listOfHeroes

    listOfHeroes = [
      {
        name: "Batman",
        phone: "430-BAT-HELP",
        brand:  "DC",
        image:  "https://s-media-cache-ak0.pinimg.com/236x/79/b2/b8/79b2b87a94729cfbea8bc70e1c67c952.jpg"
      },{
        name: "Superman",
        phone: "430-GET-SUPS",
        brand: "DC",
        image: "http://1.bp.blogspot.com/-0_TDjZoNuPw/TdfaPCcIqAI/AAAAAAAAADI/I_RmR1O5pxc/s1600/superman.jpg"
      },{
        name: "Ironman",
        phone: "613-IAM-IRON",
        brand: "Marvel",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg"
      },{
        name: "Captain America",
        phone: "613-IM-STEVE",
        brand: "Marvel",
        image: "https://i.annihil.us/u/prod/marvel//universe3zx/images/0/0d/MikeFichera--Cap-Classic-red-white-blue.jpg"
      },
    ];
  }
})();
