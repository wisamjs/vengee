angular.module('forgiven-service',[])
.factory('Forgiven', function() {
  var forgiven = [{
    id: 0,
    name: 'Justin Bieber',
    img: 'img/justin.jpg'
  }, {
    id: 1,
    name: 'Mother Teresa',
    img: 'img/teressa.jpg',
    },
    {
      id:2,
      name: 'Blue Man Group',
      img: 'img/blue.jpg'

    },
    {
    id: 3,
    name: 'Jordan',
    img: 'img/jordan.jpg'
    }];

  return {
    all: function() {
      return forgiven;
    },
    add: function(person){
      var prevId = forgiven[forgiven.length - 1].id;
      var nextId = prevId + 1;
      person.id = nextId;
      forgiven.push(person);
    }
  }
});
