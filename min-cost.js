function calculateMinCost() {
  //your code here
  // read data from input element;
  var inputData = document.querySelector("#rope-lengths").value;
  var inputArr = inputData.split(",");

  for (var i = 0; i < inputArr.length; i++) {
    inputArr[i] = Number(inputArr[i]);
  }
  var cost = 0;

  while (inputArr.length > 1) {
    var newRope = inputArr[0] + inputArr[1];
    cost += newRope;

    // delete first two element
    inputArr.splice(0, 2);
    inputArr.push(newRope);
    //alert(newRope);
  }
  document.querySelector("#result").textContent = cost;
}
