function getPin() {
  const pin = generatePin();
  const pinStr = pin + "";
  if (pinStr.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  const displayPin = document.getElementById("display-pin");
  displayPin.value = pin;
});
