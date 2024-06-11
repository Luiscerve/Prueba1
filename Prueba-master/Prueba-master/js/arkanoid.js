var ladrillos = []
var posXPala = 610
var posYPala = 700
var posXBola = 640
var posYBola = 690
var vxBola = 2
var vyBola = -2
var posXPowerup = 0
var posYPowerup = 0
var vPowerup = 5
var disparos =[]
var cooldown = 1
var imagenPala
var vxbala = 2
var vybala = -2

function preload() {
    imagenPala = loadImage ('./assets/pala.jpg')
    }
function comprobarSiChocaConLadrillos(){
        ladrillos.forEach(ladrillo =>{
            if(!ladrillo.isBroken){
                if((ladrillo.y+10 == posYBola && posXBola>=ladrillo.x) && posXBola <= ladrillo.x + 128 ){
                    ladrillo.isBroken = true;
                    vyBola = vyBola*-1;
                    posXPowerup = ladrillo.x + 64;
                    posYPowerup = 0;
                }
    
            }
        })
    }
function redibujarLadrillos(){
    ladrillos.forEach(ladrillo => {
            if(!ladrillo.isBroken){ //Obviamente solamente redibujamos los ladrillos si no han sido rotos anteriormente
                fill(0,255,100)
                rect(ladrillo.x,ladrillo.y,128,10)
                noFill()
            }
        });
    }
    function setup() {
        //Definimos la resolucion del canvas
        createCanvas(1280, 720);
        //Definimos el color de fondo
        background(220);   
        var x = 0;
        var y = 0;
       //Este bucle anidado crea el array de ladrillos
        for(let j = 0; j<3;j++){
            for (let index = 0; index < 10; index++) {
                rect(x,y,128,10)
                ladrillos.push({x:x,y:y,isBroken:false})
                x=x+128;   
            }
            x=0;
            y=y+10;
        }
    
    
    }
    function draw() {
        background(220); 
        //Aqui llamamos a las funciones de uso de los ladrillos 
        redibujarLadrillos();
        comprobarSiChocaConLadrillos();
        fill(200,30,10)
        ellipse(posXBola, posYBola, 10, 10)
        noFill()
        //Aqui comprobamos si la bola choca con los bordes de la pantalla
        if(posXBola<=0 || posXBola >=1280){
            vxBola = vxBola * -1;
        }
        if(posYBola<=0 ){
            vyBola=vyBola*-1;
    
        }
        if(posYBola ==720){
            location.reload()
        }
        if(posYBola == posYPala && (posXBola >=posXPala && posXBola <= posXPala+60)){
            vyBola = vyBola * -1;
        }
        posXBola = posXBola + vxBola;
        posYBola = posYBola + vyBola;
        image(imagenPala,posXPala,posYPala,60,20)
        keydown();
        rect(posXPowerup,posYPowerup,20,20)
        posYPowerup = posYPowerup + vPowerup;
        fill(0,50,200)
        disparos.forEach(disparo => {
            rect(disparo.posX,disparo.posY,5,10)
            disparo.posY = disparo.posY + disparo.vy; 
            
        })
    
        if (keyIsDown(32)){
            if(cooldown != 0){
                cooldown --;
            }else{
                disparos.push({posX:posXPala+30, posY:690, vy: -2})
                cooldown = 10;
            }
            keydown();
        }
    }


    function keydown(){
        if (keyIsDown(37) && posXPala > 0) {
            posXPala = posXPala-10;
          }
          if(keyIsDown(39) && posXPala < (1280-60)){
            posXPala = posXPala +10;
          }
    }    
    