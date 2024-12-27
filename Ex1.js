function Calyear() {
  var x = prompt("Enter the year: ");
  if ((x % 4 == 0 && x % 100 != 0) || x % 400 == 0) {
    alert("It's a leap Year");
  } else {
    alert("Not a leap Year");
  }
}
//Exercise 2

function dis_arr() {
  let myColor = ["Red", "Green", "White", "Black"];
  let n = myColor.join(",");
  alert(n);
  console.log(n);
}

function date() {
  const d = new Date();
  let hour = d.getHours();
  if (hour < 12 && hour > 6) {
    alert("Good Morning");
  } else if (hour > 12 && hour < 17) {
    alert("Good Afternoon");
  } else {
    alert("Good evening");
  }
}

function crypto() {
  window.open("crypto.html", "_blank");
}

function encrypt() {
  let q1 = document.getElementById("t3");
  let txt = document.getElementById("t1").value;
  let shift = document.getElementById("t2").value;
  let output = [];
  for (i = 0; i < txt.length; i++) {
    let charn = txt.charCodeAt(i) + (shift - 0);
    let cha = String.fromCharCode(charn);
    output[i] = cha;
  }
  let n1 = output.join("");

  q1.innerHTML = n1;
}

function decrypt() {
  let s1 = document.getElementById("f3");
  let txts = document.getElementById("f1").value;
  let shifts = document.getElementById("f2").value;
  let input = [];
  for (i = 0; i < txts.length; i++) {
    let charn = txts.charCodeAt(i) - (shifts - 0);
    let cha = String.fromCharCode(charn);
    input[i] = cha;
  }
  let n2 = input.join("");

  s1.innerHTML = n2;
}
