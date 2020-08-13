$(document).ready(function() {
  $("form#formOne").submit(function(event){
  const side1 = parseInt($("input#side1").val());
  const side2 = parseInt($("input#side2").val());
  const side3 = parseInt($("input#side3").val());

  if(side1 === side2 && side2 === side3 && side1 === side3) {
    alert("Equilateral Triangle!");
  } 
  else if (side1 === side2 || side1 === side3 || side2 === side3) {
    alert("Isosceles Triangle!");
  } 
  else if ((side1 + side2) <= side3 || (side1 + side3) <= side2 || (side2 + side3) <= side1) {
    alert("Not a Triangle!");
  } else {
    alert("Scalene Triangle!");
  }
    event.preventDefault();
  });
});