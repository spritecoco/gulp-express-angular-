angular.module('tmsApp',['ngRoute'])
.config(['$routeProvider',($routeProvider) ->
    $routeProvider.when('/login',{
      templateUrl:'/app/login/login.html'
      controller:'LoginCtrl'
    })
])

.run(['$location',($location) ->
    $location.path('/login').replace()
])