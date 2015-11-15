angular.module('Trophy',[
  'trophy-controller',
  'trophy-service']);

angular.module('trophy-controller',[])
.controller('TrophyController',function(Trophies) {
  var vm = this;
  vm.trophies = Trophies.all();
});
