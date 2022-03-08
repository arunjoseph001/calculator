let firstValue = 0;
let secondValue = 0;
let result = document.querySelector('.result');
let math = none;
const calc = document.querySelector(".container");
calc.addEventListener("click", logging);

function logging(event) {
  const key = event.target.innerText;
  console.log(key);
  switch (key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case ".":
        result.innerText=+(result.innerText+key);
        console.log(result)
      break;
    case "+":
    case "-":
    case "*":
    case "/":
        firstValue=+result.innerText;
        math=key;
      break;
    case "=":
      break;
    case "Clr":
        result.innerText=0;
      break;
    case "Del":
      break;
    default:
      break;
  }
}
