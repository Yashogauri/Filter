nosex=0
nosey=0
function preload(){
    lip=loadImage('https://i.postimg.cc/brbBzVvr/lip.png')
}
function setup(){
    canvas=createCanvas(850,600)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(700,600)
    video.hide()
}
function draw(){
    image(video,0,0,850,600)
    image(lip,nosex,nosey,50,30)
}
function snap(){
    save('lips.png')
}