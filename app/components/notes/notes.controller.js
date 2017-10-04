(function() {
    'user-strict';
    
    angular.module('beep-master')
    
    .controller('NotesController', NotesController);
    
    NotesController.$inject = ['NotesFactory'];
    
    function NotesController(NotesFactory) {
        var vm = this;
        
        vm.pitches = NotesFactory.pitches;
        vm.notes = [];
        
        vm.add = add;
        vm.remove = remove;
        vm.clear = clear;
        vm.shiftPitch = shiftPitch;
        vm.shiftPosition = shiftPosition;
        
        function add(pitch) {
            var n = {};
            n.index = pitch.index;
            n.name = pitch.name;
            n.freq = pitch.freq;
            n.duration = 1;
            
            vm.notes.push(n);
        }
        
        function remove(index) {
            vm.notes.splice(index, 1);
        }
        
        function clear() {
            vm.notes = [];
        }
        
        function shiftPitch(direction, note) {
            var i = note.index + direction;
            var n = vm.pitches[i];
            note.index = i;
            note.name = n.name;
            note.freq = n.freq;
        }
        
        function shiftPosition(direction, index) {
            var temp = vm.notes[index];
            vm.notes[index] = vm.notes[index + direction];
            vm.notes[index + direction] = temp;
        }
        
    }
    
})();