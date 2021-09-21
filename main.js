
noseX=0;
noseY=0;
rightEyeX=0;
rightEyeY=0;
leftEyeX=0;
leftEyeY=0;
rightEarX=0;
rightEarY=0;
leftEarX=0;
leftEarY=0;

function preload() {
    clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup() {
    canvas=createCanvas(300,250);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,250);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX=results [0].pose.nose.x - 15;
        noseY=results [0].pose.nose.y - 15;
        rightEarX=results [0].pose.nose.x - 15;
        rightEarY=results [0].pose.nose.y - 15;
        leaftEarX=results [0].pose.nose.x - 15;
        leftEarY=results [0].pose.nose.y - 15;
        rightEyeX=results [0].pose.nose.x - 15;
        rightEyeY=results [0].pose.nose.y - 15;
        leftEyeX=results [0].pose.nose.x - 15;
        leftEyeY=results [0].pose.nose.y - 15;
        
        console.log("nose x = " + results [0].pose.nose.x);
        console.log("nose y = " + results [0].pose.nose.y);
        console.log("rightEar x = " + results [0].pose.rightEar.x);
        console.log("rightEar y = " + results [0].pose.rightEar.y);
        console.log("leftEar x = " + results [0].pose.leftEar.x);
        console.log("leftEar y = " + results [0].pose.leftEar.y);
        console.log("rightEye x = " + results [0].pose.rightEye.x);
        console.log("rightEye y = " + results [0].pose.rightEye.y);
        console.log("leftEye x = " + results [0].pose.leftEye.x);
        console.log("leftEye y = " + results [0].pose.leftEye.y);

    }
}

function modelLoaded() {
    console.log('PoseNet is ineinzed');
}

function draw() {
    image(video,0,0,300,250);
    image(clown_nose,noseX,noseY,35,35);
}
function take_snapshot() {
    save('myfilterImage.png');
}
