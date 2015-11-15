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
    id: 2,
    name: 'Jordan',
    img: 'img/jordan.jpg'
    }];

  return {
    all: function() {
      return forgiven;
    }
  }
});
