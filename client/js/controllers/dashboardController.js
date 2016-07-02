myApp.controller('dashboardController', function($scope, $location, questionFactory, userFactory){

	
	userFactory.get_current_user(function(callback){
		$scope.logged_in_user = callback;
	});

	questionFactory.get_questions(function(callback){
		$scope.questions = callback;
	});

	$scope.logout = function(){
		userFactory.logout();
		$location.path('/signin');
	}

});