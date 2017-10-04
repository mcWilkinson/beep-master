(function() {
    'use strict';
    
    angular.module('beep-master')
    
    .factory('NotesFactory', NotesFactory);
    
    function NotesFactory() {
        var vm = this;
        vm.pitches = [{name: 'C#', pitch: 400},{name: 'D', pitch: 500}];
        
        return vm;
    }
})();