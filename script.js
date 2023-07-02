function convertDistance() {
  // Get the input value and selected conversion direction
  const distanceInput = document.getElementById("distanceInput").value;
  const conversionDirection = document.querySelector('input[name="conversion"]:checked').value;

  // Convert the distance based on the selected conversion direction
  let result;
  if (conversionDirection === "mile") {
    result = distanceInput * 1.60934;
    document.getElementById("distanceResult").innerHTML = distanceInput + " miles is equal to " + result.toFixed(2) + " kilometers.";
  } else if (conversionDirection === "km") {
    result = distanceInput / 1.60934;
    document.getElementById("distanceResult").innerHTML = distanceInput + " kilometers is equal to " + result.toFixed(2) + " miles.";
  }
}

function convertElevation() {
  // Get the input value and selected conversion direction
  const feetInput = document.getElementById("feetInput").value;
  const conversionDirection = document.querySelector('input[name="conversion"]:checked').value;

  // Convert the elevation based on the selected conversion direction
  let result;
  if (conversionDirection === "feet") {
    result = feetInput * 0.3048;
    document.getElementById("elevationResult").innerHTML = feetInput + " feet is equal to " + result.toFixed(2) + " meters.";
  } else if (conversionDirection === "meter") {
    result = feetInput / 0.3048;
    document.getElementById("elevationResult").innerHTML = feetInput + " meters is equal to " + result.toFixed(2) + " feet.";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const distanceConvertButton = document.querySelector(".converter-btn");
  distanceConvertButton.addEventListener("click", convertDistance);

  const elevationConvertButton = document.querySelector(".elevation-btn");
  elevationConvertButton.addEventListener("click", convertElevation);
});


    const menuToggle = document.getElementById('menu-toggle');
    const ahrefContainer = document.querySelector('.ahref-container');

    menuToggle.addEventListener('change', function() {
      if (this.checked) {
        ahrefContainer.style.display = 'flex';
      } else {
        ahrefContainer.style.display = 'none';
      }
    });




