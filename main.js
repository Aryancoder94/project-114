function preload() {
    
}

function setup() {
    canvas=createCanvas(300,250);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,250);
    video.hide();
}

function draw() {
    
}
function take_snapshot() {
    save('filter.png');
}