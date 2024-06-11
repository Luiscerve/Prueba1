var marcianos = []
var posXNave = 610
var posYNave = 700
var posXBala = 640
var posYBala = 690
var imagenNave 
var imagenMarciano
function preload (){
    imagenNave = loadImage('./assets/navee.jpg')
    imagenMarciano = loadImage('./assets/marciano.jpg')
}

function setup(){
    createCanvas(1280,720,)
    background (234,0,100)
    var x = 0
    var y = 0
    for (let j = 0; j<3;j++){
        for (let index = 0; index < 10; index++){
            image (imagenMarciano,x,y,128,10)
        }
    }
}
function draw(){
    background (234,0,100)
    triangle (640,690,490,300,800,690)
    triangle (30,75,58,20,86,75)
    image (imagenNave, posXNave, posYNave,80,20)
    keyDown()
}
function keyDown(){
    if (keyIsDown(37) && posXNave > 0){
        posXNave = posXNave -10
    }
    if (keyIsDown (39) && posXNave < (1280-60)){
        posXNave = posXNave +10
    }
}