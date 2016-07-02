myApp.controller('answersController', function($routeParams, $scope, $location,questionFactory, userFactory, answerFactory){

	questionFactory.get_question($routeParams.id, function(callback){
		console.log(callback);
		$scope.question = callback;
	});

	userFactory.get_current_user(function(callback){
		$scope.logged_in_user = callback;
	});

	$scope.create_answer = function(){
		answerFactory.create_answer({answer: $scope.answer, details: $scope.details, _user: $scope.logged_in_user, _question: $routeParams.id, likes: 0}, function(callback){
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
