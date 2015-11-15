angular.module('routes', [])
.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'js/landing-page/landing-page.html',
        controller: 'LandingPageController as landingPageController'
      }
    }
  })
  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'js/Dash/dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.enemies', {
      url: '/enemies',
      views: {
        'tab-enemies': {
          templateUrl: 'js/Enemies/enemies.html',
          controller: 'EnemiesController as enemiesController'
        }
      }
    })
  .state('tab.trophies', {
      url: '/trophies',
      views: {
        'tab-trophies': {
          templateUrl: 'js/Trophy/trophy.html',
          controller: 'TrophyController as trophyController'
        }
      }
    })
  .state('tab.forgiven', {
      url: '/forgiven',
      views: {
        'tab-forgiven': {
          templateUrl: 'js/Forgiven/forgiven.html',
          controller: 'ForgivenController as forgivenController'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'js/Chat-Detail/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'js/Account/account.html',
        controller: 'AccountController as accountController'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
