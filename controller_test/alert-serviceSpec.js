describe('alert service', function(){
	console.log('is it working');
	beforeEach(module('RDash'));

	describe('alert service Testing a Main Controller', function(){
		var scope, ctrl;
		beforeEach(inject(function($rootScope, $controller){
			scope = $rootScope.$new();
			//https://gist.github.com/blesh/8846528 -->reference for factory service
			//service = jasmine.createSpyObj('AlertServicexxxxx', ['addAlert']);
			//service = AlertService;
			ctrl = $controller('myCtrl', {$scope:scope});
			
		}));
		it('should display the title message', function(){
			expect(scope.title).toBe("Alert Message");
			console.log(scope.title);
		});

		it('should display the button message', function(){	
			ctrl.login();
			expect(scope.Message).toEqual("button clicked");
			console.log("button it's working " + scope.Message);
		});

	});

	describe('alert service Testing a AlertsCtrl', function(){
		var $scope, controller, service;
		beforeEach(inject(function($rootScope, $controller, AlertService){
			$scope = $rootScope.$new();
			service = AlertService;
			//service = jasmine.createSpyObj('AlertService', ['addAlert']);
			controller = $controller('AlertsCtrl', {$scope:$scope, AlertService:service});
		}));

		it('should display the alert message', function(){
			service.addAlert("danger", "Failed!!");
			expect(controller.alerts[0].msg).toEqual("Failed!!");
			
			// console.log(controller);
			// expect($scope.alerts).toEqual(AlertService.alerts);
			// //expect($scope.alerts).toHaveBeenCalled();
			// console.log("working AlertService");
			// console.log($scope.alerts);
		});
	});

});