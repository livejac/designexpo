// JavaScript Document
//requestAnimationFrame: if you’re running the animation loop in a tab that’s not visible, the browser won’t keep it running, which means less CPU, GPU, and memory usage, leading to much longer battery life.
//Get link to source of original
window.requestAnimFrame=function(){
	//requests for different set of browsers
	return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();

//standard intitializing of canvas?
var canvas = document.getElementById("animation"),
	//gives a 2D rendering
    context = canvas.getContext("2d"),
    canvasWidth = canvas.width = window.innerWidth,
    canvasHeight = canvas.height = window.innerHeight,
    globalTick = 0,
    points = [],
    pointCount = 2,
    pointSpeed = 2,
    spacing = canvasWidth / pointCount,
    pointCount = pointCount + 2,    
    verticalPointRange = canvasHeight,
    randomRange = function(min, max){
        return Math.floor( (Math.random() * (max - min + 1) ) + min);
    },
    iPath,
    iPoints;

//color gradient
var gradient = context.createLinearGradient(0, 0, canvasWidth, 0);
	gradient.addColorStop("0.00", "black");
	gradient.addColorStop("0.2", "magenta");
	gradient.addColorStop("0.65", "cyan");
	//gradient.addColorStop("0.45", "black");
	//gradient.addColorStop("0.55", "black");
	//gradient.addColorStop("0.7", "pink");
	gradient.addColorStop("0.8", "pink");
	gradient.addColorStop("1", "black");


var Point = function(x, y, alt){
  this.x = x;  
  this.y = y;
  this.yStart = y;
  this.alt = alt;  
}

//Sets content to be updated in "Points"
Point.prototype.update = function(i){
	//y range from top point to bottom point
  var range = (this.alt) ? verticalPointRange : -verticalPointRange;
	//speed in x direction
  this.x += pointSpeed;
	//height of y
	//maybe use a constant instead of range?
  this.y = (this.yStart) + Math.sin(globalTick/150) * -0.58*range;
  
	//starts the wave again when x moves out of screen
  if(this.x > (canvasWidth + spacing)){
    this.x = -spacing;
    var moved = points.splice(i, 1);
	  //console.log(points);
    points.unshift(moved[0]);
  }
}
     
var updatePoints = function(){
  var i = points.length;
	// if (i = i - 1) is bigger than 0, continue looping, other wise quit
  while(i--){
    points[i].update(i);
	  //console.log(i);
  }
}
              
for(iPoints = 0; iPoints < pointCount; iPoints++){
  var alt = (iPoints % 2 === 0);
	//If iPoints is divisible by 2, then the y position will be max, if it is not, the y posotion will be min
  var offset = (alt) ? verticalPointRange : -verticalPointRange;
	//Pushes new position of point to canvas
  points.push(new Point(spacing * (iPoints-1), canvasHeight/2, alt));  
}

//draws a line between the points
var renderPath = function(){
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
	for(iPath = 1; iPath<pointCount-1; iPath++){
		context.arcTo(points[iPath].x, points[iPath].y, points[iPath+1].x, points[iPath+1].y, canvasWidth/6);
	}
	//the wave is dependent on a fifth point outside the screen to function. This can be done in a more elegant way
	context.arcTo(points[pointCount-1].x, points[pointCount-1].y, canvasWidth+1000, 200, canvasWidth/6);
	context.strokeStyle = gradient;
	context.lineJoin = "round";
	context.lineWidth = 1;
	
  context.stroke();  
}
    
function clear(){
	//bakgrunnsfarge
  context.fillStyle = "hsla(0, 0%, 0%, .02)";
  context.fillRect(0, 0, canvasWidth, canvasHeight);
}
                
var loop = function(){
  window.requestAnimFrame(loop, canvas);
  clear();
  updatePoints();
  renderPath();
  globalTick++;
};

loop();
