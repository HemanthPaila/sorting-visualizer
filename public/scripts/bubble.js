var btn = document.querySelector(".btn a");
async function bubble_sort() {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        div_heightSwap(array[j], div_arr[j], "red");
        div_heightSwap(array[j + 1], div_arr[j + 1], "red");
        await sleep(0.1);
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        div_heightSwap(array[j], div_arr[j], "red");
        div_heightSwap(array[j + 1], div_arr[j + 1], "red");
        await sleep(0.1);
      }
      div_heightSwap(array[j], div_arr[j], "blue");
      await sleep(0.1);
    }
    div_heightSwap(array[j - 1], div_arr[j - 1], "green");
    await sleep(10);
  }
  div_heightSwap(array[0], div_arr[0], "green");
  await sleep(0.1);
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
