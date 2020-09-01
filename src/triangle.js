export default function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}


// if(side1 === side2 && side2 === side3 && side1 === side3) {
//   alert("Equilateral Triangle!");
// } 
// else if (side1 === side2 || side1 === side3 || side2 === side3) {
//   alert("Isosceles Triangle!");
// } 
// else if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
//   alert("Not a Triangle!");
// } else {
//   alert("Scalene Triangle!");
// }