angular.module('Enemies-Service', [])
.factory('Enemies', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var enemies = [{
    id: 0,
    name: 'Abby Ho',
    img: 'img/abby.jpg',
    rating:2,
    ratingArray: [1,2]

  }, {
    id: 1,
    name: 'Mark Little',
    img: 'img/mark.jpeg',
   rating:2,
   ratingArray: [1,2]

    },
    {
    id: 2,
    name: 'Paloma Nunez',
    img: 'img/paloma.jpg',
   rating:2,
   ratingArray: [1,2]
    },
  {
    id: 3,
    name: 'Trevor Coleman',
    img: 'img/trevor.jpg',
    rating:2,
    ratingArray: [1,2]
  }];


  return {
    all: function() {
      return enemies;
    },
    remove: function(enemy) {
      enemies.splice(enemies.indexOf(enemy), 1);
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
      var previousId = enemies[enemies.length - 1].id;
      enemy.id = previousId + 1;
      enemies.push(enemy);

    }
  };
});
