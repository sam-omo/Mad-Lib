// Mad Lib with JavaScript

// Event Listener
document.getElementById("mad-lib-btn").addEventListener("click", buildMadlib);

// Event Function
function buildMadlib() {
  // Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let adjective2 = document.getElementById("adjective2").value;
  let nameOfBeverage = document.getElementById("name-of-bev").value;

  // Process
  let result = `There are too many ${pluralNoun} on this ${adjective} airplane!" I screamed. "Somebody has to ${verb} on the ${noun} to solve this problem.
  If they don't, I'm going to be ${adjective2}, someone get me an ice-cold ${nameOfBeverage}!`;

  document.getElementById("html").style.background = "url(images/plane.jpg)";
  document.getElementById("html").style.backgroundRepeat = "no-repeat";
  document.getElementById("html").style.backgroundSize = "cover";
  document.getElementById("result").style.fontFamily =
    "Arial, Helvetica, sans-serif";
  document.getElementById("result").style.borderColor = "orange";
  document.getElementById("result").style.color = "black";

  // Output
  document.getElementById("result").innerHTML = result;
}

// Second Mad Lib

// Event Listener
document.getElementById("mad-lib-btn2").addEventListener("click", buildMadlib2);

// Event Function
function buildMadlib2() {
  // Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let adjective2 = document.getElementById("adjective2").value;
  let nameOfBeverage = document.getElementById("name-of-bev").value;

  // Process
  let result = `You ${pluralNoun} need to stop ${verb} around! Or I will call the ${adjective} ${noun} to deal with you. He will pour ${adjective2} ${nameOfBeverage}
  on your heads!`;

  document.getElementById("html").style.background = "url(images/angry.jpg)";
  document.getElementById("html").style.backgroundRepeat = "no-repeat";
  document.getElementById("html").style.backgroundSize = "cover";
  document.getElementById("result").style.fontFamily = "cursive";
  document.getElementById("result").style.borderColor = "green";
  document.getElementById("result").style.color = "";
  document.getElementById("result").style.backgroundImage = "none";

  // Output
  document.getElementById("result").innerHTML = result;
}

// Third Mad Lib

// Event Listener
document.getElementById("mad-lib-btn3").addEventListener("click", buildMadlib3);

// Event Function
function buildMadlib3() {
  // Input
  let pluralNoun = document.getElementById("plural-noun").value;
  let adjective = document.getElementById("adjective").value;
  let verb = document.getElementById("verb").value;
  let noun = document.getElementById("noun").value;
  let adjective2 = document.getElementById("adjective2").value;
  let nameOfBeverage = document.getElementById("name-of-bev").value;

  // Process
  let result = `How did you ${pluralNoun} burn the entire ${adjective} plane! Now we have to call the ${noun} department to deal with this.
  They will ${verb} ${nameOfBeverage} on the ${adjective2} flames!`;

  document.getElementById("html").style.background = "url(images/flames.gif)";
  document.getElementById("html").style.backgroundRepeat = "no-repeat";
  document.getElementById("html").style.backgroundSize = "cover";
  document.getElementById("result").style.color = "white";
  document.getElementById("result").style.fontFamily =
    "'Times New Roman', Times, serif";
  document.getElementById("result").style.backgroundImage =
    "url(images/flames.gif)";

  // Output
  document.getElementById("result").innerHTML = result;
}
