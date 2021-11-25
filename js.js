//Useful links: https://travishorn.com/responsive-grid-in-2-minutes-with-css-grid-layout-4842a41420fe
// https://www.w3schools.com/jsref/jsref_isnan.asp

//FUNCTION GET THE TOTAL AMOUNT OWED PER PERSON, TOTAL + TIP
const eachPersTotal = function (billAmount, noOfPeople, fivePercent) {
  if (noOfPeople == "") {
    alert("Please enter the number of people");
  } else {
    tipPerPerson = billAmount * fivePercent;
    let tipAmount = tipPerPerson / noOfPeople;
    document.querySelector(".tipAmountPerPerson").textContent =
      "$" + tipAmount.toFixed(2);

    let amountPerPerson = billAmount / noOfPeople;
    let totalAmountPerPerson = amountPerPerson + tipAmount;
    document.querySelector(".totalAmountPerPerson").textContent =
      "$" + totalAmountPerPerson.toFixed(2);
  }
};

let fivePercentBtn = document.getElementById("fivePercentBtn");
fivePercentBtn.addEventListener("click", function () {
  let billAmount = Number(document.getElementById("billAmount").value);
  let noOfPeople = Number(document.getElementById("noOfPeople").value);
  //The above variables needed to be placed inside of the function to work.
  let fivePercent = 0.05;
  eachPersTotal(billAmount, noOfPeople, fivePercent);
});

let tenPercentBtn = document.getElementById("tenPercentBtn");
tenPercentBtn.addEventListener("click", function () {
  let billAmount = Number(document.getElementById("billAmount").value);
  let noOfPeople = Number(document.getElementById("noOfPeople").value);
  let tenPercent = 0.1;
  eachPersTotal(billAmount, noOfPeople, tenPercent);
});

let fifteenPercentBtn = document.getElementById("fifteenPercentBtn");
fifteenPercentBtn.addEventListener("click", function () {
  let billAmount = Number(document.getElementById("billAmount").value);
  let noOfPeople = Number(document.getElementById("noOfPeople").value);
  let fifteenPercent = 0.15;
  eachPersTotal(billAmount, noOfPeople, fifteenPercent);
});

let twentyFivePercentBtn = document.getElementById("twentyFivePercentBtn");
twentyFivePercentBtn.addEventListener("click", function () {
  let billAmount = Number(document.getElementById("billAmount").value);
  let noOfPeople = Number(document.getElementById("noOfPeople").value);
  let twentyFivePercent = 0.25;
  eachPersTotal(billAmount, noOfPeople, twentyFivePercent);
});

let fiftyPercentBtn = document.getElementById("fiftyPercentBtn");
fiftyPercentBtn.addEventListener("click", function () {
  let billAmount = Number(document.getElementById("billAmount").value);
  let noOfPeople = Number(document.getElementById("noOfPeople").value);
  let fiftyPercent = 0.5;
  eachPersTotal(billAmount, noOfPeople, fiftyPercent);
});

// CUSTOM BUTTON
let customBtn = document.getElementById("customBtn");
customBtn.addEventListener("click", function () {
  let billAmount = Number(document.getElementById("billAmount").value);
  let noOfPeople = Number(document.getElementById("noOfPeople").value);
  if (noOfPeople == "") {
    alert("Please enter the number of people");
  } else {
    let customPercent = prompt("What percentage tip would you like to give?");
    if (isNaN(customPercent)) {
      alert("Please enter only a numerical value");
    } else {
      let dividedPercentage = customPercent / 100;
      eachPersTotal(billAmount, noOfPeople, dividedPercentage);
    }
  }
});

//RESET ALL BUTTON
document.querySelector(".resetBtn").addEventListener("click", function () {
  document.querySelector(".tipAmountPerPerson").textContent = 0;
  document.querySelector(".totalAmountPerPerson").textContent = 0;
  billAmount.value = "";
  noOfPeople.value = "";
});

// HAVING THE DOLLAR AND PERSON ICONS DISAPPEAR WHEN VALUES ARE ENTERED
$(document).ready(function () {
  $("#billAmount").click(function () {
    $("#dollarIconImg").remove();
  });
});

$(document).ready(function () {
  $("#noOfPeople").click(function () {
    $("#personIcon").remove();
  });
});
