function calculateSum() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const sum = add(num1,num2);
  document.getElementById("sum").innerHTML = sum;
}
function add(a,b){
  const num1 = Number(a);
  const num2 = Number(b);
  if(isNaN(num1) || isNaN(num2)){
    throw new Error("Invalid input");
  }
  return num1 + num2;
}
//needed for jest
module.exports = { add };