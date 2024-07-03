var canvas = document.querySelector('canvas');
// var mainDiv = document.getElementById('section2');
var section1 = document.getElementById('section1');

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve the inner width and inner height of section1
    const innerWidth = section1.clientWidth;
    const innerHeight = section1.clientHeight;
    
    console.log("Inner width: " + innerWidth);
    console.log("Inner height: " + innerHeight);
    
    // Set the canvas size to match the section's inner width and inner height
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    
    // Call the initialization function again to update the circle positions
    init();
});

// canvas.width = mainDiv.innerWidth;
// canvas.height = mainDiv.innerHeight;

 var c = canvas.getContext('2d');



var mouse = {
    x : undefined,
    y : undefined
}


var maxRadius = 40;
var minRadius = 3;

var colorArray = [
    // '#2C3E50',
    '#fff',
    // '#E74C3C',
    '#5192D8',
    // '#2980B9',
]


// console.log(colorArray.length)
// var main = document.getElementById('main')

window.addEventListener('mousemove',
    function (event) {
        // console.log(event)
        mouse.x = event.x
        mouse.y = event.y

        // console.log(mouse)
    })


    window.addEventListener('resize',function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        init()

    })

function Circle(x , y, dx ,dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius
    // this.shadow = '#5192D8'
    this.color = colorArray[Math.floor( Math.random()* colorArray.length)]


    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2,  false)
        // c.strokeStyle = 
        // c.stroke(); 
        c.fillStyle = this.color
        c.shadowColor = '#5192D8'
        c.fill(); 

    }

    this.update = function(){
        if(this.x + this.radius >innerWidth ||  this.x - this.radius <0){
            this.dx = -this.dx
        }

        if(this.y + this.radius> innerHeight || this.y - this.radius <0){
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy

        ///interactivity

        if (mouse.x - this.x < 50 && mouse.x -this.x >-50
            && mouse.y - this.y < 50 && mouse.y -this.y >-50){
                if(this.radius <maxRadius){
                    this.radius += 1;
                }
        } else if(this.radius >minRadius){
            this.radius -=1;
        }


        this.draw();

    }
}

// console.log(circleArray)



var circleArray  = []

function init(){

    circleArray = [];

for( var i = 0; i<500; i++){
    var radius = Math.random() * 3 + 1;  
    var x = Math.random()*( innerWidth -radius *2) + radius;
var y = Math.random()*( innerHeight - radius * 2) + radius;
var dx = (Math.random() - 0.5);
var dy = (Math.random() - 0.5);
// var radius = Math.random() *100;
    // var circle = new Circle(200, 200, 3, 3, 30) 
    circleArray.push(new Circle(x, y, dx, dy, radius))

}
}

init()


function animate(){
    requestAnimationFrame(animate);

    c.clearRect(0,0, innerWidth, innerHeight)
 

        for (var i = 0; i < circleArray.length; i++){
            circleArray[i].update();
        }
   
}


animate()