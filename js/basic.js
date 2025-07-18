function calculate(op) {
  const a = parseFloat(document.getElementById("num1").value);
  const b = parseFloat(document.getElementById("num2").value);
  let res;

  if (isNaN(a) || isNaN(b)) {
    alert("Please enter valid numbers");
    return;
  }

  switch(op) {
    case '+': res = a + b; break;
    case '-': res = a - b; break;
    case '*': res = a * b; break;
    case '/': res = b !== 0 ? a / b : "Cannot divide by zero"; break;
  }

  document.getElementById("result").innerText = "Result: " + res;

  // Store transaction
  const transaction = `Basic: ${a} ${op} ${b} = ${res}`;
  storeTransaction(transaction);
}

function storeTransaction(entry) {
  let logs = JSON.parse(localStorage.getItem("calculator_logs")) || [];
  logs.unshift(entry);
  if (logs.length > 10) logs.pop();
  localStorage.setItem("calculator_logs", JSON.stringify(logs));
}
