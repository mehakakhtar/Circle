let radius = prompt("Enter the radius of the circle:");
radius = Number(radius);

let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;

console.log("Diameter: " + diameter + "\nCircumference: " + circumference.toFixed(2) + "\nArea: " + area.toFixed(2));