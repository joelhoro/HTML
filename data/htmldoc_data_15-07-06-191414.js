
                angular.module('htmlDocData', [])
                      .controller('htmlDocDataTableController', function ($scope){
      	                $scope.tables = [ 
                        
      	                {
			                headers: ["OrderDate","Region","Rep","Item","Units","UnitCost","Total"], 
                            data: [["2014-01-06T00:00:00","East","Jones","Pencil",95.0,1.99,189.05],["2014-01-23T00:00:00","Central","Kivell","Binder",50.0,19.99,999.5],["2014-02-09T00:00:00","Central","Jardine","Pencil",36.0,4.99,179.64],["2014-02-26T00:00:00","Central","Gill","Pen",27.0,19.99,539.73],["2014-03-15T00:00:00","West","Sorvino","Pencil",56.0,2.99,167.44]]
      	                },
        		
      	                {
			                headers: ["Name","Age"], 
                            data: [["Bob",54.0],["Mitch",34.0]]
      	                },
        		
      	                ]
                      });

        		