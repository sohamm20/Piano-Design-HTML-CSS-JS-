
var r = false;
var R = false;
var g = false;
var G = false;
var M = false;
var m = false;
var d = false;
var D = false;
var n = false;
var N = false;

function playTone(time, frequency) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const duration = time * 1000; // Convert time to milliseconds

  // Create an oscillator node
  const oscillator = audioCtx.createOscillator();
  oscillator.type = "sine"; // You can change the waveform if needed
  oscillator.frequency.value = frequency;

  // Connect the oscillator to the audio context destination (i.e., speakers)
  oscillator.connect(audioCtx.destination);

  // Start the oscillator
  oscillator.start();

  // Stop the oscillator after the specified duration
  setTimeout(function () {
    oscillator.stop();
  }, duration);
}


var t = 0.5;
var f = 440;

function update(){
    t = document.getElementById("dur").value;
    f = document.getElementById("fun").value;
    updateRest(f);
}
var rest = [];

function updateRest(f){
    rest = [];

    rest.push(f);
    rest.push(f*256/243);
    rest.push(f*16/15);
    rest.push(f*10/9);
    rest.push(f*9/8);
    rest.push(f*32/27);
    rest.push(f*6/5);
    rest.push(f*5/4);
    rest.push(f*81/64);
    rest.push(f*4/3);
    rest.push(f*27/20);
    rest.push(f*45/32);
    rest.push(f*729/512);
    rest.push(f*3/2);
    rest.push(f*128/81);
    rest.push(f*8/5);
    rest.push(f*5/3);
    rest.push(f*27/16);
    rest.push(f*16/9);
    rest.push(f*9/5);
    rest.push(f*15/8);
    rest.push(f*243/128);

    for (var i = 0; i < 21; i++){
        rest[i] = Math.round(rest[i]*100, 2) / 100;
    }
}
updateRest(f);


function shiftr(){
    var shruti = document.getElementById("r");
    if (shruti.innerHTML == "r1"){
        shruti.innerHTML = "r2";
    }
    else{
        shruti.innerHTML = "r1";
    }
    r = !r;
}
function shiftR(){
    var shruti = document.getElementById("R");
    if (shruti.innerHTML == "R1"){
        shruti.innerHTML = "R2";
    }
    else{
        shruti.innerHTML = "R1";
    }
    R = !R;
}
function shiftg(){
    var shruti = document.getElementById("g");
    if (shruti.innerHTML == "g1"){
        shruti.innerHTML = "g2";
    }
    else{
        shruti.innerHTML = "g1";
    }
    g = !g;
}
function shiftG(){
    var shruti = document.getElementById("G");
    if (shruti.innerHTML == "G1"){
        shruti.innerHTML = "G2";
    }
    else{
        shruti.innerHTML = "G1";
    }
    G = !G;
}
function shiftM(){
    var shruti = document.getElementById("M");
    if (shruti.innerHTML == "M1"){
        shruti.innerHTML = "M2";
    }
    else{
        shruti.innerHTML = "M1";
    }
    M = !M;
}
function shiftm(){
    var shruti = document.getElementById("m");
    if (shruti.innerHTML == "m1"){
        shruti.innerHTML = "m2";
    }
    else{
        shruti.innerHTML = "m1";
    }
    m = !m;
}
function shiftd(){
    var shruti = document.getElementById("d");
    if (shruti.innerHTML == "d1"){
        shruti.innerHTML = "d2";
    }
    else{
        shruti.innerHTML = "d1";
    }
    d = !d;
}
function shiftD(){
    var shruti = document.getElementById("D");
    if (shruti.innerHTML == "D1"){
        shruti.innerHTML = "D2";
    }
    else{
        shruti.innerHTML = "D1";
    }
    D = !D;
}
function shiftn(){
    var shruti = document.getElementById("n");
    if (shruti.innerHTML == "n1"){
        shruti.innerHTML = "n2";
    }
    else{
        shruti.innerHTML = "n1";
    }
    n = !n;
}
function shiftN(){
    var shruti = document.getElementById("N");
    if (shruti.innerHTML == "N1"){
        shruti.innerHTML = "N2";
    }
    else{
        shruti.innerHTML = "N1";
    }
    N = !N;
}

function playS() {
    playTone(t, rest[0]);
}
function playr() {
    if (r){
        playTone(t, rest[2]);
    }
    else{
        playTone(t, rest[1]);
    }
}
function playR() {
    if (R){
        playTone(t, rest[4]);
    }
    else{
        playTone(t, rest[3]);
    }
}
function playg() {
    if (g){
        playTone(t, rest[6]);
    }
    else{
        playTone(t, rest[5]);
    }
}
function playG() {
    if (G){
        playTone(t, rest[8]);
    }
    else{
        playTone(t, rest[7]);
    }
}
function playM() {
    if (M){
        playTone(t, rest[10]);
    }
    else{
        playTone(t, rest[9]);
    }
}
function playm() {
    if (m){
        playTone(t, rest[12]);
    }
    else{
        playTone(t, rest[11]);
    }
}
function playP() {
    playTone(t, rest[13]);
}
function playd() {
    if (d){
        playTone(t, rest[15]);
    }
    else{
        playTone(t, rest[14]);
    }
}
function playD() {
    if (D){
        playTone(t, rest[17]);
    }
    else{
        playTone(t, rest[16]);
    }
}
function playn() {
    if (n){
        playTone(t, rest[19]);
    }
    else{
        playTone(t, rest[18]);
    }
}
function playN() {
    if (N){
        playTone(t, rest[21]);
    }
    else{
        playTone(t, rest[20]);
    }
}


