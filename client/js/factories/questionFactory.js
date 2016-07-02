myApp.factory('questionFactory', function($http){
	var factory = {};

	factory.get_question = function(qid, callback){
		console.log(qid);
		$http.get('/questions/'+qid).success(function(output){
			console.log(output);
			callback(output);
		});
	}

	factory.create_question = function(question, callback){
		console.log(question);
		$http.post('/questions', question).success(function(output){
			callback(output);
		});
	};

	factory.get_questions = function(callback){
		$http.get('/questions').success(function(output){
			callback(output);
		});
	};

	return factory;
});
