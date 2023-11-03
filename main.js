narizx=0
narizy=0

function preload(){
narizPayaso=loadImage('https://i.postimg.cc/qvrX4DbN/R.png')
}

function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()
posenet=ml5.poseNet(video,modelLoaded)
posenet.on("pose",gotPoses)
}

function gotPoses(results){
console.log(results)
narizx=results[0].pose.nose.x-40
narizy=results[0].pose.nose.y-100
}

function draw(){
image(video,0,0,300,300)
image(narizPayaso,narizx,narizy,100,150)
}

function modelLoaded(){
    console.log("modelo cargado")
}

function take_snapshot(){
    save("jeromepayaso.png")
}