import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import Triangle from "./src/triangle.js";

$(document).ready(function() {
  $("form#formOne").submit(function(event){
  const side1 = parseInt($("input#side1").val());
  const side2 = parseInt($("input#side2").val());
  const side3 = parseInt($("input#side3").val());


    event.preventDefault();
  });
});