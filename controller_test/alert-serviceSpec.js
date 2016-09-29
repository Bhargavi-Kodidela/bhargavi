describe('alert service', function(){
	console.log('is it working');
	beforeEach(module('RDash'));

	describe('alert service Testing', function(){
		var scope, ctrl, service, $q;
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
});