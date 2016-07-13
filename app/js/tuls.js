angular.module('tuls', ['ngAnimate', 'ui.bootstrap']);
angular.module('tuls')
.controller('DatepickerCtrl', function ($scope,$http) {
    $scope.today = function() {
        $scope.dt = new Date();


    };
    $scope.today();


    $scope.clear = function() {
        $scope.dt = null;
    };
    $scope.options = {
        customClass: getDayClass,
        minDate: new Date(),
        showWeeks: true
    };


    function disabled(data) {
        // Disable weekend selection
        var date = data.date,
            mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
    }

    $scope.toggleMin = function() {
        $scope.options.minDate = $scope.options.minDate ? null : new Date();
    };
    $scope.toggleMin();


    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };
    var tomorrow = new Date();

    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date(tomorrow);
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
    ];

    $scope.schedule = '';
    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0,0,0,0);


            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);
                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }
        $http.get("data/data.json").then(function(response){
            console.log(response);
            var day = $scope.dt.getDay();
            $scope.schedule = JSON.parse(response.data[0].days);
        });
        console.log($scope.dt.getDay());
        return '';
    }
    console.log($scope.schedule);


})


    .controller('AccordionCtrl', function ($scope) {
        $scope.oneAtATime = true;

        $scope.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };
    });