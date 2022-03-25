
//current location when changing colors, target location when moving
let x_curr = 0;
let y_curr = 0;

//to allow to keep the same color when moving
let color_current = "white";

document.addEventListener('keydown', function (event) {
    
    if (event.key === '1') {
        changeColor("red");
    }
    if (event.key === '2') {
        changeColor("orange");
    }
    if (event.key === '3') {
        changeColor("yellow");
    }
    if (event.key === '4') {
        changeColor("green");
    }
    if (event.key === '5') {
        changeColor("blue");
    }
    if (event.key === '6') {
        changeColor("indigo");
    }
    if (event.key === '7') {
        changeColor("violet");
    }
    if (event.key === '8') {
        changeColor("black");
    }
    if (event.key === '9') {
        changeColor("white");
    }
    if (event.key === 'a') {
        move_paint(-1,0);
    }
    if (event.key === 'w') {
        move_paint(0,-1);
    }
    if (event.key === 'd') {
        move_paint(1,0);
    }
    if (event.key === 's') {
        move_paint(0,1)
    }


});

function changeColor(color){
    color_current = color;
    let id = x_curr + "," + y_curr;
    let sqr_curr = document.getElementById(id);
    sqr_curr.style.backgroundColor = color_current;

}

function move_paint(xdir, ydir){

    //current location that is being painted
    let current_location = document.getElementById("sample");

    //adding direction to paint's current location, printing out new current_location, with the current color as a background color
    x_curr += xdir;
    y_curr += ydir;
    current_location.innerHTML = x_curr + " , " + y_curr    
    let id = x_curr + "," + y_curr;
    let sqr = document.getElementById(id);
    sqr.style.backgroundColor = color_current;
    

}



// figure out why the coordinates are being added in the opposite direction
window.onload=function(){
    var grid = document.getElementById('grid');
    var i=0;
    for(i;i<25;i++){
        var row = document.createElement("div");
        row.style.display="inline-block";

        var v=0;
        for(v;v<25;v++){
            var ele = document.createElement("div");
           
            ele.setAttribute("id", i + "," + v);
            //ele.innerHTML = ele.id;

            
            ele.addEventListener("click", function(e) {this.style.backgroundColor = color_current});
            ele.addEventListener("dragover", function(e) {this.style.backgroundColor = color_current});

            ele.setAttribute("class","wht-sqr"); 
            ele.style.backgroundColor = color_current;
            
            row.appendChild(ele);
        }

        grid.appendChild(row);
    }
};

