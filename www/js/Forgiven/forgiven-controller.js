angular.module('Forgiven',[
  'forgiven-controller',
  'forgiven-service']);

angular.module('forgiven-controller',[])
.controller('ForgivenController',function(Forgiven) {
  var vm = this;
  vm.forgiven = Forgiven.all();
});
