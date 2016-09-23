angular.module('RDash', []);

angular
    .module("RDash")
    .factory("MF3HTTPService", ['$http', MF3HTTPService]);

function MF3HTTPService($http){

	var beans = {};
	var factory = {
		get: function(beanUrl, params){
			var config = {

				"Access-Control-Request-Headers": "x-requested-with",
				"Access-Control-Allow-Credentials": true
			};
			config.params = params;
			var result = $http.get(beanUrl, config)
			.then(function(data) {
		      	return data;
		    },
		    function(err) {
		    	console.log(err);
		      return err;
		    });
		    return result;
		}
	};

	return factory;	
};	

