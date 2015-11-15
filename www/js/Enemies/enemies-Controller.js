angular.module('Enemies-Controller',[])
.controller('EnemiesController', function($scope, Enemies, $ionicPopup) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  var vm = this;
  var forgivenessPopups = [
  {
    title: 'Forgive?',
    template:'Are you sure you want to forgive them?',
    buttons: [{
      text: 'Maybe'
    },
    { text: 'Yes',
      type: 'button-positive'
    }]
  }];
  vm.enemies = Enemies.all();
  vm.forgive = function(enemy) {
    $scope.showConfirm();
  };

 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Forgive?',
     template: 'Are you sure you want to eat this ice cream?',
     buttons: [{text:'nay'}, {text:'yay'}]
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };


})
