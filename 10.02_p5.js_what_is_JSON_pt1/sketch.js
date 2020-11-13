/* 
https://vimeo.com/144162099
JSON Formatter & Validator (referred at 08:11) https://jsonformatter.curiousconcept.com/
(Shiffman tries to sing @ 11:24)
*/

var ids;
var currentID = 0;

function preload() {
  ids = loadJSON('ids.json');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(8, 8, 20);
  text(ids[currentID], 10, 50)
}

function keyPressed(){
  if(keyCode == 65 && currentID > 0){
    currentID -= 1;
  }
  if(keyCode == 68 && currentID < 50){
    currentID += 1;
  }
}