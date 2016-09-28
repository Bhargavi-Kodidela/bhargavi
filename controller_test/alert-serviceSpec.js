describe('alert service', function(){
	console.log('is it working');
	beforeEach(module('RDash'));

	describe('alert service Testing', function(){
		var scope, ctrl, service, $q;
		beforeEach(inject(function($rootScope, $controller){
			scope = $rootScope.$new();
			//$q = $q;
			ctrl = $controller('myCtrl as master', {$scope:scope});
			
		}));
		it('should display the alert message', function(){
			expect(scope.title).toBe("Alert Message");
			console.log(scope.title);
		});

		it('should display the button alert message', function(){
			
			scope.login();
			expect(scope.Message).toEqual("button clicked");
			console.log("button it's working " + scope.Message);
			expect(scope.Message.addAlert).toBeDefined("button clicked");
			console.log("is it working AlertService ");
		});
	});
});