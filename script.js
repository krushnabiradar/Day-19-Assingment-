// numbers to display
let resultVar = document.getElementById("result");

//event listener to a enter only numbers
resultVar.addEventListener("keyup", function () {
  console.log(resultVar.value[resultVar.value.length - 1]);
  let keyarray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  if (resultVar.value[resultVar.value.length - 1] in keyarray) {
    pass = true;
  } else {
    alert("please enter only numbers");
    resultVar.value = "";
  }
});

let calculate = (number) => {
  resultVar.value += number;
 
};

// clear function
function cleared() {
  resultVar.value = "";

}

//result function to calculate arithmetic operations.
let equal = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("given expression is not valid");
  }
};

//operator
let operation = (operator) => {
  resultVar.value += operator;

};

//delete one character
function delchar() {
  resultVar.value = resultVar.value.slice(0, -1);
}