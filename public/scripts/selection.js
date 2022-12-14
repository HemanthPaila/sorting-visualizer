async function selection_sort() {
  for (var i = 0; i < array.length; i++) {
    var minindex = i;
    div_heightSwap(array[i], div_arr[i], "red");
    await sleep(speed);
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[minindex]) {
        minindex = j;
        div_heightSwap(array[minindex], div_arr[minindex], "red");
        await sleep(speed);
      }
      div_heightSwap(array[j], div_arr[j], "red");
      await sleep(speed);
      div_heightSwap(array[j], div_arr[j], "rgb(229,131,4)");
      await sleep(speed);
    }
    var temp = array[i];
    array[i] = array[minindex];
    array[minindex] = temp;
    div_heightSwap(array[i], div_arr[i], "red");
    await sleep(speed);
    div_heightSwap(array[i], div_arr[i], "green");
    await sleep(speed);
  }
}
function selection() {
  document.getElementById("wcase").innerHTML = "O(n^2)";
  document.getElementById("acase").innerHTML = "Θ(n^2)";
  document.getElementById("bcase").innerHTML = "Ω(n^2)";
  document.getElementById("space").innerHTML = "O(1)";
  selection_sort();
}
