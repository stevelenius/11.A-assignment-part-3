// 11.A-assignment-part-3.js
//
// Rotates a series of purple lines around an axis to create 
// interesting visual effects and moires as an example of p5.js
// transformation (specifically rotate)
//
// First a series of lines create a starburst pattern that fills
// in, and then fills in more brightly. Moires and rays at different angles
// fade in and out. Let this run long enough and the various pattern 
// changes and moires will fill in to make a solid purple disc on 
// the canvas.
//
// This was a serendipitous discovery I made when I started modifying 
// what I created for the 3.A assignment in this class. 
//

let rotateBy = 1;

function setup() {
// canvas sized to match canvas in part 1 of assignment
  createCanvas(810, 564);
// black background, purple stroke
  background(0);
  stroke(255, 0, 255);
};
  
function draw() {  

// define the rotateLine function
  function rotateLine() {
// center the graphic on the canvas
    translate(405, 282);
// set rotation
    rotate(rotateBy);
// draw the line
    line(0, 25, 0, 250);
// increase rotation angle by 1 for next time
    rotateBy += 1;
  };

// now that the function is defined, call it
  rotateLine();
// close draw function
}



