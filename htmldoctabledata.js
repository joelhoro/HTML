angular.module('htmlDocData', [])
      .controller('htmlDocDataTableController', function ($scope){
      	$scope.tables = [ 
      	{
			headers: ["Name","Age"], 
            data: [["Bob",54.0],["Mitch",34.0]] 
      	},
      	{
			headers: ["Name","Age", "Job"], 
            data: [["Linda",24.0, "Banker"],["Jennifer",38.0, "Lawyer"]] 
      	}
      	]
      });
