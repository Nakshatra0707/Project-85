var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var car1_width = 120;
var car1_height = 70;
var car1_x = 10;
var car1_y = 10;
var car1_img = "car1.png"

var car2_width = 140;
var car2_height = 120;
var car2_x = 0;
var car2_y = 100;
var car2_img = "car2.png"


var can_bg = "racing.jpg";

function add(){
    background_ImgTag = new Image();
    background_ImgTag.onload = uploadbg;
    background_ImgTag.src = can_bg;

    car1_ImgTag = new Image();
    car1_ImgTag.onload = car1upload;
    car1_ImgTag.src = car1_img;

    car2_ImgTag = new Image();
    car2_ImgTag.onload = car2upload;
    car2_ImgTag.src = car2_img;
}
function uploadbg(){
    ctx.drawImage(background_ImgTag, 0, 0, canvas.width, canvas.height);
}
function car1upload(){
    ctx.drawImage(car1_ImgTag, car1_x, car1_y, car1_width, car1_height);
}
function car2upload(){
    ctx.drawImage(car2_ImgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", myKeydown);

function myKeydown(e){
    var keypressed = e.keyCode;
    if (keypressed == "38"){
        car1_up();
        console.log("car1_up");
    }

    if (keypressed == "40"){
        car1_down();
        console.log("car1_down");
    }

    if (keypressed == "37"){
        car1_left();
        console.log("car1_left");
    }

    if (keypressed == "39"){
        car1_right();
        console.log("car1_right");
    }


    if (keypressed == "65"){
        car2_left();
        console.log("car2_left");
    }

    if (keypressed == "68"){
        car2_right();
        console.log("car2_right");
    }

    if (keypressed == "83"){
        car2_down();
        console.log("car2_down");
    }

    if (keypressed == "87"){
        car2_up();
        console.log("car2_up");
    }
}

function car1_up(){
    if(car1_y >= 0){
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadbg();
        car1upload();
        car2upload();
    }
}

function car1_down(){
    if(car1_y <= 500){
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadbg();
        car1upload();
        car2upload();
    }
}

function car1_left(){
    if(car1_x >= 0){
        car1_y = car1_x - 10;
        console.log("When left arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadbg();
        car1upload();
        car2upload();
    }
}

function car1_right(){
    if(car1_x <= 700){
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x = " + car1_x + " | y = " + car1_y);
        uploadbg();
        car1upload();
        car2upload();
    }
}

function car2_up(){
    if(car2_y >= 0){
        car2_y = car2_y - 10;
        console.log("When W arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadbg();
        car1upload();
        car2upload();
    }
}

function car2_down(){
    if(car2_y <= 500){
        car2_y = car2_y + 10;
        console.log("When arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadbg();
        car1upload();
        car2upload();
    }
}

function car2_left(){
    if(car2_x >= 0){
        car2_y = car2_x - 10;
        console.log("When left arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadbg();
        car1upload();
        car2upload();
    }
}

function car2_right(){
    if(car2_x <= 700){
        car2_x = car2_x + 10;
        console.log("When right arrow is pressed, x = " + car2_x + " | y = " + car2_y);
        uploadbg();
        car1upload();
        car2upload();
    }
}

if(car1_x = 700){
    document.getElementById("yo").innerHTML = "Car 1 has Won!"
}
if(car2_x = 700){
    document.getElementById("yo").innerHTML = "Car 2 has Won!"
}