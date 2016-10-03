angular.module('RDash',[]);

angular
	.module('RDash')
	.factory("AlertService", ["$rootScope", AlertService]);

		function AlertService($rootScope){
		var alerts = [];
		var factory = {
			alerts: alerts,
			addAlert: function(type, msg){
				alerts.push({
					type: type,
		            msg: msg
		        });
		        this.notify();
			},
			closeAlert: function(index){
				alerts.splice(index, 1);
				this.notify();
			},
	        subscribe: function(scope, callback) {
	            var handler = $rootScope.$on('new-alert', callback);
	            scope.$on('$destroy', handler);
	        },
	        notify: function() {
	        	console.log("sending alert notification");
	            $rootScope.$emit('new-alert');
	        }
		};	
		return factory;
	}
	
angular
	.module('RDash')	
	.controller('AlertsCtrl', ['$scope', 'AlertService',AlertsCtrl]);
		function AlertsCtrl($scope, AlertService){
		var vm = this;
	    vm.alerted = alerted;
	    vm.closeAlert = closeAlert;
	    vm.alerts = AlertService.alerts;

	    function alerted() {
	        // Handle notification
	        vm.alerts = AlertService.alerts;
	    }

	    function closeAlert(index) {
	        AlertService.closeAlert(index);
	    };

	    AlertService.subscribe($scope, alerted);
	}

angular
	.module('RDash')	
	.controller('myCtrl', ['$scope', 'AlertService', myCtrl]);
		function myCtrl($scope, AlertService){
			var vm = this;
			vm.login = login;
			vm.close = close;

			$scope.title = "Alert Message";
			
			function login(type){
				$scope.Message = "button clicked";
				console.log("click event");
				AlertService.addAlert('success', "successful message: " + type);
				console.log($scope.Message);
			}

			function close(alerts){
				$scope.msg = "closed";
				AlertService.closeAlert('close', "closed alert" + alerts);
				console.log($scope.msg);
			}
		}
