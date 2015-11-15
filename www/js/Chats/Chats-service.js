angular.module('Chats-Service', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Zoe Daniels',
    lastText: 'You on your way?',
    face: 'img/zoe.jpeg'
  }, {
    id: 1,
    name: 'Tom Hobson',
    lastText: 'Hey, it\'s me',
    face: 'img/tom.jpg'
  },];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
