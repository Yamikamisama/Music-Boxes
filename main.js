var cNote = document.getElementById('cAudio');
var dNote = document.getElementById('dAudio');
var eNote = document.getElementById('eAudio');
var fNote = document.getElementById('fAudio');
var gNote = document.getElementById('gAudio');
var aNote = document.getElementById('aAudio');
var bNote = document.getElementById('bcAudio');

$('#c').mousedown(function(){
    cNote.currentTime = 0;
    cNote.play();
});