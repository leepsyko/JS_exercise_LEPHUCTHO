// bài tập số 1
function salary() {
  let pay = 0;
  let days = +document.getElementById("input-days").value;
  pay = days * 100000;

  //   alert(salary);

  //   document.getElementById("wage").innerHTML = show.toLocaleString();

  display(pay, "wage");
}

// bài số 2

function average() {
  let numb1 = +document.getElementById("realnumber1").value;
  let numb2 = +document.getElementById("realnumber2").value;
  let numb3 = +document.getElementById("realnumber3").value;
  let numb4 = +document.getElementById("realnumber4").value;
  let numb5 = +document.getElementById("realnumber5").value;

  let aver = (numb1 + numb2 + numb3 + numb4 + numb5) / 5;

  display(aver, "result");
}

// bài tập số 3

function change() {
  let pay = 0;
  let usd = +document.getElementById("input-usd").value;
  pay = usd * 23500;

  //   alert(salary);

  //   document.getElementById("wage").innerHTML = show.toLocaleString();

  display(pay, "output-vnd");
}

// bài số 4

function calculator() {
  let width = +document.getElementById("input-width").value;
  let height = +document.getElementById("input-height").value;

  let perimeter = (width + height) * 2;
  let acreage = width * height;

  display(perimeter, "output-perimeter");
  display(acreage, "output-acreage");
}

// bài số 5

function total() {
  let number2 = +document.getElementById("input-number2").value;
  let totalFinal = 0;

  if (number2 > 9 && number2 < 100) {
    totalFinal = (number2 % 10) + Math.floor(number2 / 10);
  } else {
    alert("Nhập số chỉ có 2 chữ số");
  }

  display(totalFinal, "output-total");
}

//global
function display(show, broad) {
  document.getElementById(broad).innerHTML = show.toLocaleString();
}
