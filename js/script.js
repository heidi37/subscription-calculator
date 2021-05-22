// Your JS code here
var subTypeElement = document.querySelector("#subscription");

var subDurationElement = document.querySelector("#months");

var result = document.querySelector(".result");

var subType = "basic"; //default value for subscription dropdown

var subDuration = "1"; //default value for duration dropdown

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = e.target.value;
  updateSubscriptionDiv();
});

function updateSubscriptionDiv() {
  var monthlyCost = 5;
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}`;
}
