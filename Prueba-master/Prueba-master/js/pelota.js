var posXBola = 640
var posYBola = 360
var vXBola = -3
var vYbola = -3

function setup (){
    createCanvas (1280,720)
    background (220)
}
function draw (){
    background (200,0,80)
    ellipse (posXBola,posYBola,30,30)
    if (posXBola < 0 || posXBola >= 1280)
}
