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

document.getElementById("calculator").addEventListener("click", function () {
  const number = event.target.innerText;
  const typedNumberField = document.getElementById("typed-number");
  const previousTypedNumber = typedNumberField.value;
  if (isNaN(number)) {
    if (number === "C") {
      typedNumberField.value = "";
    } else if (number === "<") {
      const digits = previousTypedNumber.split("");
      digits.pop();
      const remainingDigits = digits.join("");
      typedNumberField.value = remainingDigits;
    }
  } else {
    const newTypedNumber = previousTypedNumber + number;
    typedNumberField.value = newTypedNumber;
  }
});
