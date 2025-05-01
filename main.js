let BTN = document.getElementById("btn");
let BTN2 = document.getElementById("other-btn");
BTN.addEventListener("click", calc);
BTN2.addEventListener("click", change);

function calc() {
  let input = +document.getElementById("temp-in").value;
  let temp_out = ((input - 32) * 5) / 9;
  temp_out = Math.round(temp_out);
  document.getElementById("Output").innerHTML = temp_out;
  document.getElementById("temp-in").value = " ";
  document.getElementById("imgs").innerHTML =
    "<img src='img/thermometer.jpg' alt=`Thermometer`>";
  document.getElementById("link").href = "https://www.google.com/";
}

function change() {
  document.getElementById("units-in").innerHTML =
    "Celsius:<input id='temp-in2' type='number'/>";
  document.getElementById("units-out").innerHTML = "Fahrenheiht:";
  document.getElementById("imgs2").innerHTML =
    "<img src='img/construction.jpg'>";
  document.getElementById("construction").innerHTML =
    "This won't actually work, Time constraints and budget cuts are to blame";
}
