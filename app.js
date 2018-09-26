// UI VARS
const UIamount = document.querySelector("#amount");
const UIinterest = document.querySelector("#interest");
const UIyears = document.querySelector("#years");
const UImonthlyPayment = document.querySelector("#monthly-payment");
const UItotalPayment = document.querySelector("#total-payment");
const UItotalInterest = document.querySelector("#total-interest");
const UIresults = document.querySelector("#results");
const UIloader = document.querySelector("#loading");
const UIcard = document.querySelector(".card");
const UIheading = document.querySelector(".heading");

//Listen for submit
document
  .querySelector("#loan-form")
  // .addEventListener("submit", calculateResults);
  .addEventListener("submit", function() {
    // // Hide results
    // document.querySelector("#results").style.display = "none";

    // //  Show loader
    // document.querySelector("#loading").style.display = "block";

    showDisplay();

    setTimeout(calculateResults, 2000);

    event.preventDefault();
  });

// Caluclate results
calculateResults = function(event) {
  // // UI VARS
  // const UIamount = document.querySelector("#amount");
  // const UIinterest = document.querySelector("#interest");
  // const UIyears = document.querySelector("#years");
  // const UImonthlyPayment = document.querySelector("#monthly-payment");
  // const UItotalPayment = document.querySelector("#total-payment");
  // const UItotalInterest = document.querySelector("#total-interest");

  // formula
  //  turn as decimal
  const principal = parseFloat(UIamount.value);
  const calculatedInterest = parseFloat(UIinterest.value) / 100 / 12;
  const calculatedPayments = parseFloat(UIyears.value) * 12;

  // compute monthly payment

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);

  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    // display result ---  -> toFixed to get num of decimal
    UImonthlyPayment.value = monthly.toFixed(2);
    UItotalPayment.value = (monthly * calculatedPayments).toFixed(2);
    UItotalInterest.value = (monthly * calculatedPayments - principal).toFixed(
      2
    );

    // // Show result
    // document.querySelector("#results").style.display = "block";
    // //  hide loader
    // document.querySelector("#loading").style.display = "none";

    showResult();
  } else {
    //  custom ero
    showError("Please check your numbers");
    // console.log("Please check your numbers");
  }

  // event.preventDefault();
};

//Show Error

const showError = function(error) {
  //remove loader
  UIloader.style.display = "none";

  // create a div
  const errorDiv = document.createElement("div");
  // Get elememts
  // const UIcard = document.querySelector(".card");
  // const UIheading = document.querySelector(".heading");

  // Add class  error & (bootstrap class danger)
  errorDiv.classrates = "alert alert-danger";

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  //Insert error above heading
  // take parent -> card
  UIcard.insertBefore(errorDiv, UIheading);

  // clear error after 3 sec
  setTimeout(clearError, 2000);
};

// Clear error function
const clearError = function() {
  document.querySelector(".alert").remove();
};

// Show display
const showDisplay = function() {
  // Hide results
  UIresults.style.display = "none";
  //  Show loader
  UIloader.style.display = "block";
};
const showResult = function() {
  // Hide results
  UIresults.style.display = "block";
  //  Show loader
  UIloader.style.display = "none";
};
