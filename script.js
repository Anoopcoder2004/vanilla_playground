function calculateSum() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const sum = add(num1,num2);
  document.getElementById("sum").innerHTML = sum;
}
function add(a,b){
  return Number(a) + Number(b);
}
//needed for jest
module.exports = { add };