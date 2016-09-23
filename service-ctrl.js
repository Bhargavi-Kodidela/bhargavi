


anular.module("RDash").controller("TestController",["$scope", "MF3HTTPService", TestController]);

	function TestController($scope, MF3HTTPService){

		var vm = this;
		vm.listOfServices = listOfServices;

		function listOfServices(beanUrl){
			MF3HTTPService.get(beanUrl,{ }).then(function(response){
				$scope.contents = response.data;
				//$scope.name = "john";

				console.log("Hurray!! Service returned with data: "+response);
				
				console.log(beanUrl);
				console.log(response);

			});
			

			/*console.log("Line 2");

			MF3HTTPService.get(beanUrl,{}).then(function(data){
				console.log("line 3 ");
			});
			console.log("Line 4");	*/	
		}



	}









A
A
B
B

C
;
