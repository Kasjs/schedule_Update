angular.module('schedule',['tuls','ui.router'])
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/groups');
        $stateProvider
            .state('groups',{
                url : '/groups',
                templateUrl : 'partials/groups.html',
                controller : 'AccordionCtrl'
        	})
        	.state('groups.group-calendar-1',{
        		url : '/group-calendar-1',
        		templateUrl : 'partials/group-calendar-1.html',
        		controller : 'DatepickerCtrl'
        	})
        	.state('groups.group-calendar-2',{
        		url : '/group-calendar-2',
        		templateUrl : 'partials/group-calendar-2.html',
        		controller : 'DatepickerCtrl'
        	})
        	.state('groups.group-calendar-3',{
        		url : '/group-calendar-3',
        		templateUrl : 'partials/group-calendar-3.html',
        		controller : 'DatepickerCtrl'
        	})
        	.state('groups.group-calendar-3.table-1',{
        		url : '/table-1',
        		templateUrl : 'partials/table-1.html',
        		controller : 'TableCtrl'
        	})
    })
    .controller('TableCtrl',['$scope',function($scope){
    	
    }])
