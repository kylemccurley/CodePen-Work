var originalimage = null;
var grayImage = null;
var redImage = null;
var rainbowImage = null;
var canvas = document.getElementById("can");

function loadImage(){
    var file = document.getElementById("img");
    originalImage = new SimpleImage(file);
    grayImage = new SimpleImage(file);
    redImage = new SimpleImage(file);
    rainbowImage = new SimpleImage(file);
    originalImage.drawTo(canvas);
}

function doGray(){
    if(imageIsLoaded(grayImage)){
        makeGray();
        grayImage.drawTo(canvas);
    }
}

function makeGray(){
    for(pixel of grayImage.values()){
        var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
        pixel.setRed(avg);
        pixel.setGreen(avg);
        pixel.setBlue(avg);
    }
}

function doRed(){
    if(imageIsLoaded(redImage)){
       makeRed();
    redImage.drawTo(canvas);
       }
}
function makeRed() {
  for (var pixel of redImage.values()) {
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    if (avg < 128) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else {
      pixel.setRed(255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(2 * avg - 255);
    }
  }
}

function doRainbow(){
    if(imageIsLoaded(rainbowImage)){
       makeRainbow();
       rainbowImage.drawTo(canvas);
       }
}

function makeRainbow(){
    for(var pixel of rainbowImage.values()){
        var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
        var x = pixel.getX();
        var y = pixel.getY();
        var int = canvas.getWidth()/7;
        if(x<(int/7)){
            if(avg < 128){
                pixel.setRed(2*avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            }
            else{
                pixel.setRed(255);
                pixel.setGreen(2*avg-255);
                pixel.setBlue(2*avg-255);
            }
        }
    }
}


function reset(){
    if(imageIsLoaded(originalImage)){
        originalImage.drawTo(canvas);
        grayImage = new SimpleImage(originalImage);
        redImage = new SimpleImage(originalImage);
        rainbowImage = new SimpleImage(originalImage);
    }
}

function imageIsLoaded(img){
    if(img == null || ! img.complete()){
        alert("Image is not loaded");
        return false;
    }
    else{
        return true;
    }
}
