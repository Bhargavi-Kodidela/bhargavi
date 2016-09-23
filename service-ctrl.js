angular.module("RDash").controller("TestController",["$scope", "MF3HTTPService", TestController]);

	function TestController($scope, MF3HTTPService){

		var vm = this;
		vm.listOfServices = listOfServices;

		function listOfServices(beanUrl){
			MF3HTTPService.get(beanUrl,{ }).then(function(response){
				$scope.contents = response.data;
				
				console.log("Hurray!! Service returned with data: "+response);
				
				console.log(beanUrl);
				console.log(response);

			});
		}
	};





