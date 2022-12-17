function qsort() {
  quick_sort(0, array.length - 1);
}
async function quick_sort(low, high) {
  if (low < high) {
    var p = await partition(low, high);
    div_heightSwap(array[p], div_arr[p], "rgb(229,131,4)");
    await sleep(0.1);
    await quick_sort(low, p - 1);
    await quick_sort(p + 1, high);
    await sleep(0.1);
  }
}
async function partition(low, high) {
  var pivot = high;
  var i = low - 1;
  for (var j = low; j <= high; j++) {
    if (array[j] <= array[pivot]) {
      i++;
      div_heightSwap(array[i], div_arr[i], "red");
      div_heightSwap(array[j], div_arr[j], "red");
      await sleep(0.1);
      var t = array[i];
      array[i] = array[j];
      array[j] = t;
      div_heightSwap(array[i], div_arr[i], "red");
      div_heightSwap(array[j], div_arr[j], "red");
      await sleep(0.1);
      div_heightSwap(array[i], div_arr[i], "rgb(229,131,4)");
      div_heightSwap(array[j], div_arr[j], "rgb(229,131,4)");
      await sleep(0.1);
    }
    // div_heightSwap(array[i], div_arr[i], "green");
    // div_heightSwap(array[j], div_arr[j], "green");
    await sleep(0.1);
  }
  // div_heightSwap(array[i], div_arr[i], "green");
  div_heightSwap(array[i], div_arr[i], "yellow");
  await sleep(0.1);
  return i;
}
function quick() {
  document.getElementById("wcase").innerHTML = "O(n^2)";
  document.getElementById("acase").innerHTML = "Θ(n log n)";
  document.getElementById("bcase").innerHTML = "Ω(n log n)";
  document.getElementById("space").innerHTML = "O(n)";
  qsort();
}
