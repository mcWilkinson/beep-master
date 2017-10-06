(function() {
    'user-strict';
    
    angular.module('beep-master')
    
    .controller('NotesController', NotesController);
    
    NotesController.$inject = ['NotesFactory'];
    
    function NotesController(NotesFactory) {
        var vm = this;
        
        vm.pitches = NotesFactory.pitches;
        vm.notes = [];
        vm.tempo = 100;
        vm.page = 4;
        
        vm.add = add;
        vm.remove = remove;
        vm.clear = clear;
        vm.shiftPitch = shiftPitch;
        vm.shiftPosition = shiftPosition;
        vm.getType = getType;
        vm.changePage = changePage;
        
        function add(pitch) {
            var n = {};
            n.index = vm.pitches.indexOf(pitch);
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
            console.log(n);
            note.index = i;
            note.name = n.name;
            note.freq = n.freq;
        }
        
        function shiftPosition(direction, index) {
            var temp = vm.notes[index];
            vm.notes[index] = vm.notes[index + direction];
            vm.notes[index + direction] = temp;
        }
        
        function getType(index) {
            return (index%12 == 0 || index%12 == 2 || index%12 == 4 || index%12 == 5 || index%12 == 7 || index%12 == 9 || index%12 == 11);
        }
        
        function changePage(direction) {
            vm.page = vm.page + direction;
        }
        
    }
    
})();