myApp.controller('questionsController', function($scope, $location, questionFactory, userFactory){

	userFactory.get_current_user(function(callback){
		$scope.logged_in_user = callback;
	});

	$scope.create_question = function(){
		questionFactory.create_question({question: $scope.question, description: $scope.description, _user: $scope.logged_in_user._id}, function(callback){
			$location.path('/dashboard');
		});
	}

	$scope.logout = function(){
		userFactory.logout();
		$location.path('/signin');
	}

	$scope.cancel = function(){
		$location.path('/dashboard');
	}

});
