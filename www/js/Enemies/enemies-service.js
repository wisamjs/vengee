angular.module('Enemies-Service', [])
.factory('Enemies', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var enemies = [{
    id: 0,
    name: 'Abby Ho',
    description: 'You on your way?',
    img: 'img/abby.jpg',
    number: '+14167285893' //TODO CHANGE
  }, {
    id: 1,
    name: 'Mark Little',
    description: 'Hey, it\'s me',
    img: 'img/mark.jpeg',
    },
    {
    id: 2,
    name: 'Paloma Nunez',
    description: 'Hey, it\'s me',
    img: 'img/paloma.jpg'
    },
  {
    id: 3,
    name: 'Trevor Coleman',
    description: 'Hey, it\'s me',
    img: 'img/trevor.jpg'
  }];


  return {
    all: function() {
      return enemies;
    },
    remove: function(chat) {
      enemies.splice(enemies.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < enemies.length; i++) {
        if (enemies[i].id === parseInt(chatId)) {
          return enemies[i];
        }
      }
      return null;
    },
    add: function(enemy) {
      debugger;
      var previousId = enemies[enemies.length - 1].id;
      enemy.id = previousId + 1;
      enemies.push(enemy);

    }
  };
});
