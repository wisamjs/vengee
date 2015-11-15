angular.module('core',[])
.factory('Camera', ['$q', function($q) {
  return {
    getPicture: function(options) {
      var q = $q.defer();

      if (navigator.camera) {
        navigator.camera.getPicture(function(result) {
          // Do any magic you need
          q.resolve(result);
        }, function(err) {
          q.reject(err);
        }, options);
      }
      else{
        q.reject('Webview Mode');
      }

      return q.promise;
    }
  }
}]);
