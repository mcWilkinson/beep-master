(function() {
    'use strict';
    
    angular.module('beep-master')
    
    .factory('NotesFactory', NotesFactory);
    
    function NotesFactory() {
        var vm = this;
        vm.pitches = [{name: 'C#', freq: 400},{name: 'D', freq: 500}];
        
        return vm;
    }
})();