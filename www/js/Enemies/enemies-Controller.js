angular.module('Enemies-Controller',[])
.controller('EnemiesController', function($scope, Enemies, $ionicPopup, $http, Forgiven, Trophies) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});


  var vm = this;
  vm.revengePopup = {
    title: 'Revenge!',
    template: 'Was it successful?',
    buttons: [{
      text: 'No',
      onTap: function() {
        return false;
      }
    },
    { text: 'Yes',
      type: 'button-positive',
      onTap:function() {
        return true;
      }
    }]
  }
  vm.forgivenessPopups = [
  {
    title: 'Forgive?',
    template:'Are you sure you want to forgive them?',
    buttons: [{
      text: 'No',
      onTap: function(){
        return false;
      }
    },
    { text: 'Yes',
      type: 'button-positive',
      onTap:function(){
        return true;
      }
    }]
  },
 {
    title: 'Forgive?',
    template:'Are you sure you\'re sure?',
  buttons: [{
      text: 'No',
      onTap: function(){
        return false;
      }
    },
    { text: 'Yes',
      type: 'button-positive',
      onTap:function(){
        return true;
      }
    }]
  },
 {
    title: 'Forgive?',
    template:'You\'re a soft fool, don’t fall into societies trap of forgiveness.',
 buttons: [{
      text: 'No',
      onTap: function(){
        return false;
      }
    },
    { text: 'Yes',
      type: 'button-positive',
      onTap:function(){
        return true;
      }
    }]
  },
 {
    title: 'Forgive?',
    template:'You are making a liar of yourself and a ruin of your convictions',
 buttons: [{
      text: 'No',
      onTap: function(){
        return false;
      }
    },
    { text: 'Yes',
      type: 'button-positive',
      onTap:function(){
        return true;
      }
    }]
  },
 {
    title: 'Forgive?',
    template:'If you press this button, and let them walk away, you are a fucking coward.',
 buttons: [{
      text: 'No',
      onTap: function(){
        return false;
      }
    },
    { text: 'Yes',
      type: 'button-positive',
      onTap:function(){
        return true;
      }
    }]
  },
 {
    title: 'Forgive?',
    template:'Forgive her? No. I won’t let you',
    buttons: [{
      text: 'No',
      onTap: function() {
        return false;
      }
    }]
  }
  ];

  vm.revenge = function(enemy) {
    vm.currentEnemy = enemy;
    $scope.showConfirm(vm.revengePopup, true);

  };


  vm.enemies = Enemies.all();
  vm.currentDialog = 0;
  vm.forgive = function(enemy, template) {
    vm.currentEnemy = enemy;
   if (template){
    var template = vm.forgivenessPopups[template];
   }else{
     var template = vm.forgivenessPopups[vm.currentDialog];
  }
    $scope.showConfirm(template);
  };

 $scope.showConfirm = function(template, isRevenge) {
   var confirmPopup = $ionicPopup.confirm(template);
   confirmPopup.then(function(res) {
     if(res) {
      if (isRevenge) {
        Enemies.remove(vm.currentEnemy);
        Trophies.add(vm.currentEnemy);
        return;
      }
      if (vm.currentDialog < (vm.currentEnemy.rating - 1)){
        vm.currentDialog+=1;
        vm.forgive(vm.currentEnemy, vm.currentDialog);
      }else{
      vm.currentDialog = 0;
      Enemies.remove(vm.currentEnemy);
      Forgiven.add(vm.currentEnemy);

      if (vm.currentEnemy.number){
          return $http({
            url: 'http://revenge-forgive.herokuapp.com/forgive',
            method: 'POST',
            data:{
              number: vm.currentEnemy.number
            }
          })
          .then(function(res){
            console.log(res);
          });
        }
      }

     } else {
        if (isRevenge) {
          vm.currentEnemy.ratingArray.push(true);
          vm.currentEnemy.rating += 1;
      }
              vm.currentDialog = 0;

     }
   });
 };
})
