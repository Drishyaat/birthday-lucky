const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.value = "Congratulations! Your birthday is lucky";
  }
  else {
    outputBox.value = "Sadly your birthday is not that lucky";
  }
}

function checkBirthDateisLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  //console.log(sum);
  if (luckyNumber.value > 0) {
    if (dob && sum)
      compareValues(sum, luckyNumber.value);
    else
      outputBox.value = "enter both field";
  }
  else {
    outputBox.value = "Negative input is not allowed";
  }
}
function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {

    sum = sum + Number(dob.charAt(index));

  } return sum;
}
checkNumberButton.addEventListener("click", checkBirthDateisLucky)
