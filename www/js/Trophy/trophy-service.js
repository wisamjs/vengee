angular.module('trophy-service',[])
.factory('Trophies', function() {
  var trophies = [{
    id: 0,
    name: 'Orlando Bloom',
    description: 'You on your way?',
    img: 'img/orlando.png'
  }, {
    id: 1,
    name: 'George H.W. Bush',
    description: 'Hey, it\'s me',
    img: 'img/bush.jpg',
    },
    {
    id: 2,
    name: 'Jimmy Carter',
    description: 'Hey, it\'s me',
    img: 'img/carter.jpg'
    },
  {
    id: 3,
    name: 'The Undertaker',
    description: 'Hey, it\'s me',
    img: 'img/undertaker.jpg'
  }];

  return {
    all: function() {
      return trophies;
    },
    add: function(person){
      var prevId = trophies[trophies.length - 1].id;
      var nextId = prevId + 1;
      person.id = nextId;
      trophies.push(person);
    }
  }
});
