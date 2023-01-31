
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
    new Audio("./sounds/S.webm").play();
}
function playr() {
    if (r){
        new Audio("./other/_R.webm").play();
    }
    else{
        new Audio("./sounds/_R.webm").play();
    }
}
function playR() {
    if (R){
        new Audio("./other/R.webm").play();
    }
    else{
        new Audio("./sounds/R.webm").play();
    }
}
function playg() {
    if (g){
        new Audio("./other/_G.webm").play();
    }
    else{
        new Audio("./sounds/_G.webm").play();
    }
}
function playG() {
    if (G){
        new Audio("./other/G.webm").play();
    }
    else{
        new Audio("./sounds/G.webm").play();
    }
}
function playM() {
    if (M){
        new Audio("./other/M.webm").play();
    }
    else{
        new Audio("./sounds/M.webm").play();
    }
}
function playm() {
    if (m){
        new Audio("./other/_M.webm").play();
    }
    else{
        new Audio("./sounds/_M.webm").play();
    }
}
function playP() {
    new Audio("./sounds/P.webm").play();
}
function playd() {
    if (d){
        new Audio("./other/_D.webm").play();
    }
    else{
        new Audio("./sounds/_D.webm").play();
    }
}
function playD() {
    if (D){
        new Audio("./other/D.webm").play();
    }
    else{
        new Audio("./sounds/D.webm").play();
    }
}
function playn() {
    if (n){
        new Audio("./other/_N.webm").play();
    }
    else{
        new Audio("./sounds/_N.webm").play();
    }
}
function playN() {
    if (N){
        new Audio("./other/N.webm").play();
    }
    else{
        new Audio("./sounds/N.webm").play();
    }
}
