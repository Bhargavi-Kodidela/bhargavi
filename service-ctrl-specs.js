describe("testing factory Service", function(){
	console.log("About to tset my service");
	var MF3HTTPService;
	var result;

	beforeEach(module("RDash"));

	beforeEach(inject(function ($injector) {
		MF3HTTPService = $injector.get('MF3HTTPService');
		result = MF3HTTPService.get('https://api.myjson.com/bins/3pcxu');
		console.log("Assuming that method is called");
	}));
    

    it('Test Get Functionality', function () {

    	console.log("Verifying result");
    	expect(result).toEqual('test1');
    });


});







/*describe("service-ctrl Testing", function(){
	beforeEach(module("RDash"));

	describe("Service Controller Testing", function(){
		//var scope, controller;
		var $scope;
        var $q;
        var deferred;
        var MF3HTTPService;
        var controller;
		beforeEach(inject(function($controller, _$rootScope_, _$q_, MF3HTTPService){
			//scope = $rootScope.$new();

			$q = _$q_;
          	$scope = _$rootScope_.$new();
          	deferred = _$q_.defer();
          	controller = $controller;

          	spyOn(MF3HTTPService, 'get').and.returnValue(deferred.promise);
          	$controller('TestController', {
          		$scope: $scope,
          		MF3HTTPService: MF3HTTPService
          	});

		}));

		it('sets the contents', function () {
			console.log($controller.listOfServices("https://api.myjson.com/bins/3pcxu"));

			deferred.resolve([{ id: 6 }, { id: 33 }]);

			$scope.$apply();
			expect($scope.contents).toEqual(response.data);
          	//expect($scope.error).toBe('There has been an error!');
        });

	});
});*/