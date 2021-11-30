//FUNCTION TO GET THE TOTAL AMOUNT OWED PER PERSON, TOTAL + TIP
const eachPersTotal = function (billAmount, noOfPeople, fivePercent) {
  if (noOfPeople == "") {
    document.querySelector("#notZeroText").textContent = "Can't be zero";
    document.getElementById("noOfPeople").style.border = "thin solid #FF0000";
  } else {
    document.querySelector("#notZeroText").textContent = "";
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
let customInput = document.getElementById("customInput");
customInput.addEventListener("click", function () {
  if (noOfPeople == "") {
    document.querySelector("#notZeroText").textContent = "Can't be zero";
    document.getElementById("noOfPeople").style.border = "thin solid #FF0000";
  } else {
    document.querySelector("#notZeroText").textContent = "";
    let customPercent = Number(document.getElementById("customInput").value);
    let billAmount = Number(document.getElementById("billAmount").value);
    let noOfPeople = Number(document.getElementById("noOfPeople").value);

    if (isNaN(customPercent)) {
      alert("Please enter only a numerical value");
    } else {
      let dividedPercentage = customPercent / 100;
      eachPersTotal(billAmount, noOfPeople, dividedPercentage);
    }
  }
});

//RESET ALL BUTTON
document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector(".tipAmountPerPerson").textContent = 0;
  document.querySelector(".totalAmountPerPerson").textContent = 0;
  billAmount.value = "";
  noOfPeople.value = "";
  document.getElementById("customInput").value = "";
});

// HAVING THE DOLLAR AND PERSON ICONS DISAPPEAR WHEN VALUES ARE ENTERED
$(document).ready(function () {
  $("#billAmount").click(function () {
    $("#dollarIconImg").remove();
  });

  $("#noOfPeople").click(function () {
    $("#personIcon").remove();
  });
});
