// variables decleration
var speed;
var array = [];
var div_arr = [];
var arr_size = document.querySelector("#size").value;
var fun_speed = 0;
var container = document.querySelector(".middle-container");

// generating array size

function array_size() {
  arr_size = document.querySelector("#size").value;
}

//generating function speed

function func_speed() {
  fun_speed = document.querySelector("#speed").value;
  var ch = parseInt(fun_speed);
  if (ch == 1) {
    speed = 10000;
  } else if (ch == 2) {
    speed = 1000;
  } else if (ch == 3) {
    speed = 100;
  } else if (ch == 4) {
    speed = 10;
  } else {
    speed = 0.01;
  }
  //   console.log(fun_speed);
}

// generating an array

function generate_array() {
  //when ever you click on generate array then time and space complexities are became empty

  document.getElementById("wcase").innerHTML = "";
  document.getElementById("acase").innerHTML = "";
  document.getElementById("bcase").innerHTML = "";
  document.getElementById("space").innerHTML = "";

  container.innerHTML = "";
  array = [];
  div_arr = [];
  for (var i = 0; i < arr_size; i++) {
    var random = Math.random() * 500;
    var number = Math.floor(random) + 1;
    array[i] = number;
    div_arr[i] = document.createElement("div");
    container.appendChild(div_arr[i]);
    div_arr[i].style =
      "width:50px;height:" +
      array[i] +
      "px;background-color:#e58304;margin: 1px 1px;";
  }
}

// disableing buttons

function disableButtons() {
  document.querySelector("#g_arr").style.pointerEvents = "none";
  document.querySelector("#b_sort").style.pointerEvents = "none";
  document.querySelector("#i_sort").style.pointerEvents = "none";
  document.querySelector("#s_sort").style.pointerEvents = "none";
  document.querySelector("#q_sort").style.pointerEvents = "none";
  document.querySelector("#m_sort").style.pointerEvents = "none";
  document.querySelector("#h_sort").style.pointerEvents = "none";
}

// disableing range fields

function disableRangeFields() {
  document.querySelector("#size").style.pointerEvents = "none";
  document.querySelector("#speed").style.pointerEvents = "none";
}

// disableing form

function disableForm() {
  document.querySelector("form-id").style.pointerEvents = "none";
  document.querySelector("form-btn").style.pointerEvents = "none";
}

//enableing buttons

function enableButtons() {
  document.querySelector("#g_arr").style.pointerEvents = "auto";
  document.querySelector("#b_sort").style.pointerEvents = "auto";
  document.querySelector("#i_sort").style.pointerEvents = "auto";
  document.querySelector("#s_sort").style.pointerEvents = "auto";
  document.querySelector("#q_sort").style.pointerEvents = "auto";
  document.querySelector("#m_sort").style.pointerEvents = "auto";
  document.querySelector("#h_sort").style.pointerEvents = "auto";
}

// enable range fields

function enableRangeFields() {
  document.querySelector("#size").style.pointerEvents = "auto";
  document.querySelector("#speed").style.pointerEvents = "auto";
}

// enableing form

function enableForm() {
  document.querySelector("form-id").style.pointerEvents = "auto";
  document.querySelector("form-btn").style.pointerEvents = "auto";
}

//sleep function

function sleep(ms) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject();
      }
    }, ms)
  );
}

//div_heightSwap

function div_heightSwap(x, y, z) {
  y.style =
    "width:50px;height:" + x + "px;background-color:" + z + ";margin: 1px 1px;";
}
