(function() {
    'use-strict';

    angular.module('beep-master').filter('StartFromFilter', StartFromFilter);


    function StartFromFilter() {
        return function(input, start) {
            console.log("Start:" + start)
            start = +start; //parse to int
            return input.slice(start);
        };
    }
    
})();
