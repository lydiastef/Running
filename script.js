function convertDistance() {
    // Get the input value and selected conversion direction
    const distanceInput = document.getElementById("distanceInput").value;
    const conversionDirection = document.querySelector('input[name="conversion"]:checked').value;
  
    // Convert the distance based on the selected conversion direction
    let result;
    if (conversionDirection === "mile") {
      result = distanceInput * 1.60934;
      document.getElementById("result").innerHTML = distanceInput + " miles is equal to " + result.toFixed(2) + " kilometers.";
    } else if (conversionDirection === "km") {
      result = distanceInput / 1.60934;
      document.getElementById("result").innerHTML = distanceInput + " kilometers is equal to " + result.toFixed(2) + " miles.";
    }
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const convertButton = document.querySelector("button");
    convertButton.addEventListener("click", convertDistance);
  });