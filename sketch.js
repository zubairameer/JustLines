let lines = [];

function setup() {
  createCanvas(400, 400);

  background(50);

  // Generate 10 lines with random coordinates
  for (let i = 0; i < 50; i++) 
  {
    const x1 = Math.random() * 400;
    const y1 = Math.random() * 400;
    const x2 = Math.random() * 400;
    const y2 = Math.random() * 400;
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    lines.push({ x1, y1, x2, y2, r, g, b });
  }

}


function draw() {
  
  // Draw all the lines
  for (let i = 0; i < lines.length; i++) 
  {
    const { x1, y1, x2, y2, r, g, b } = lines[i];
    stroke(51, 102, 255); // Set stroke color for this line
    curve(x1, y1, x1 + 50, y1 + 50, x2 - 50, y2 - 50, x2, y2);
  }
  
}


