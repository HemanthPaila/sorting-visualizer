function qsort() {
  quick_sort(0, array.length - 1);
}
function quick_sort(low, high) {
  if (low < high) {
    var p = partition(low, high);
    // div_heightSwap(array[p], div_arr[p], "red");
    // await sleep(0.1);
    quick_sort(low, p - 1);
    quick_sort(p + 1, high);
  }
}
function partition(low, high) {
  var pivot = high;
  var i = low - 1;
  for (var j = low; j <= high; j++) {
    if (array[j] <= array[pivot]) {
      i++;
      var t = array[i];
      array[i] = array[j];
      array[j] = t;
      div_heightSwap(array[i], div_arr[i], "blue");
      div_heightSwap(array[j], div_arr[j], "blue");
      // await sleep(10);
    }
  }
  return i;
}
function quick() {
  document.getElementById("wcase").innerHTML = "O(n^2)";
  document.getElementById("acase").innerHTML = "Θ(n log n)";
  document.getElementById("bcase").innerHTML = "Ω(n log n)";
  document.getElementById("space").innerHTML = "O(n)";
  qsort();
}
