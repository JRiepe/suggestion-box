app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions) {
	$scope.post = suggestions.posts[$routeParams.id];
	
	$scope.addComment = function() {

		if(!$scope.comment || $scope.comment === "") {
		  	return;
		}
		
		$scope.post.comments.push({
			title: $scope.comment,
			upvotes: 0
		});
		// $scope.post.comments.push('upvotes: 0');
		
		
		//after submit, clear input
		$scope.comment = '';
	};


	$scope.comVote = function(comment) {
  		comment.upvotes += 1;
	};

}]);