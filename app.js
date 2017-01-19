(function(){
  angular.module("superhero", [])
  .controller("superCtrl", [superCtrl]);

  let superData = [
  { name: 'whatever', phone: 123, comics_affiliation: "cools", img_url: "asdf.com"},
  { name: 'superman', phone: 234, comics_affiliation: "lames", img_url: "sdfg.com" },
  { name: 'bla man', phone: 345, comics_affiliation: "yeahs", img_url: "dfgh.com"},
  { name: 'pizza cutter', phone: 456, comics_affiliation: "yums", img_url: "fghj.com"}
];

  function superCtrl(){
    this.supers = superData;
    self.showHero = function(){
      console.log("self.img_url")
    };
  }
})();
