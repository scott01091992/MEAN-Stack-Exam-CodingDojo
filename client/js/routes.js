myApp.config(function ($routeProvider){
  $routeProvider
    .when('/signin',{
      templateUrl: '../partials/signin.html'
    })
    .when('/dashboard',{
      templateUrl: '../partials/dashboard.html'
    })
    .when('/question',{
      templateUrl: '../partials/question.html'
    })
    .when('/questionAnswer/:id',{
      templateUrl: '../partials/questionAnswer.html'
    })
    .when('/answer/:id',{
      templateUrl: '../partials/answer.html'
    })
    .otherwise({
      redirectTo: '/signin'
    })
});
