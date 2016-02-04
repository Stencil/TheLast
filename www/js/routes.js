angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('login', {
      url: '/page2',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('signup', {
      url: '/page3',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })
        
      
    
      
        
    .state('tabsController.trending', {
      url: '/page5',
      views: {
        'tab1': {
          templateUrl: 'templates/trending.html',
          controller: 'trendingCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.home', {
      url: '/page6',
      views: {
        'tab2': {
          templateUrl: 'templates/home.html',
          controller: 'homeCtrl'
        }
      }
    })
        
      
    
      
        
    .state('topList', {
      url: '/page8',
      templateUrl: 'templates/topList.html',
      controller: 'topListCtrl'
    })
        
      
    
      
        
    .state('tabsController.profile', {
      url: '/page7',
      views: {
        'tab3': {
          templateUrl: 'templates/profile.html',
          controller: 'profileCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/page4',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page2');

});