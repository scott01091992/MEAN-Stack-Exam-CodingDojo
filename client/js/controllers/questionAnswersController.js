myApp.controller('questionAnswersController', function($routeParams, $scope, userFactory, $location, answerFactory, questionFactory){

	questionFactory.get_question($routeParams.id, function(callback){
		$scope.question = callback;
	});

	$scope.like = function(aid, qid){
		answerFactory.like(aid, qid, function(output){
			$scope.question = output;
		});
	}

	
	$scope.logout = function(){
		userFactory.logout();
		$location.path('/signin');
	}

});