myApp.controller('usersController', function($scope, userFactory, $location){

	$scope.create_user = function(){
		userFactory.create_user({username: $scope.username}, function(output){
			$location.path('/dashboard');
		});	
	};

});