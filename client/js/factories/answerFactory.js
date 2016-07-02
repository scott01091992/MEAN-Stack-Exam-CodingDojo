myApp.factory('answerFactory', function($http){
	var factory = {};

	factory.create_answer = function(answer, callback){
		$http.post('/answers', answer).success(function(output){
			callback(output);
		});
	};

	factory.getAnswers = function(id, callback){
		$http.get('/answers/'+id).success(function(output){
			callback(output);
		});
	};

	factory.like = function(aid, qid, callback){
		console.log(aid);
		console.log(qid);
		$http.post('/answers/like/' + aid, {qid: qid}).success(function(output){
			callback(output);
		});
	}

	return factory;
});