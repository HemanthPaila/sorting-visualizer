var btn = document.querySelector(".btn a");
async function bubble_sort() {
  console.log(fun_speed);
  var i = 0;
  var j = 0;
  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length - i; j++) {
      //   div_heightSwap(array[j], div_arr[j], "yellow");
      if (array[j] > array[j + 1]) {
        // select1(div_arr[j-1],"yellow");
        div_heightSwap(array[j], div_arr[j], "red");
        div_heightSwap(array[j + 1], div_arr[j + 1], "red");
        await sleep(1000 * fun_speed);
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        div_heightSwap(array[j], div_arr[j], "red");
        div_heightSwap(array[j + 1], div_arr[j + 1], "red");
        await sleep(1000 * fun_speed);
      }
      div_heightSwap(array[j], div_arr[j], "blue");
    }
    // div_heightSwap(array[j], div_arr[j], "green");
    // await sleep(100);
  }
  //   div_heightSwap(array[0], div_arr[0], "green");
}
function bubble() {
  document.getElementById("wcase").innerHTML = "O(n)";
  document.getElementById("acase").innerHTML = "Θ(n^2)";
  document.getElementById("bcase").innerHTML = "Ω(n^2)";
  document.getElementById("space").innerHTML = "O(1)";
  disableButtons();
  disableRangeFields();
  bubble_sort();
  enableButtons();
  enableRangeFields();
}
