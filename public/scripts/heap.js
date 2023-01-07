function sort() {
  var n = array.length;

  // Build max heap
  for (var i = n / 2 - 1; i >= 0; i--) {
    heapify(n, i);
  }

  // Heap sort
  for (var i = n - 1; i >= 0; i--) {
    var temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    // Heapify root element
    heapify(i, 0);
  }
}

function heapify(n, i) {
  // Find largest among root, left child and right child
  var largest = i;
  var l = 2 * i + 1;
  var r = 2 * i + 2;

  if (l < n && array[l] > array[largest]) largest = l;

  if (r < n && array[r] > array[largest]) largest = r;

  // Swap and continue heapifying if root is not largest
  if (largest != i) {
    var swap = array[i];
    array[i] = array[largest];
    array[largest] = swap;

    heapify(n, largest);
  }
}
function heap() {
  document.getElementById("wcase").innerHTML = "O(n log n)";
  document.getElementById("acase").innerHTML = "Θ(n log n)";
  document.getElementById("bcase").innerHTML = "Ω(n log n)";
  document.getElementById("space").innerHTML = "O(1)";
  sort();
  for (var p = 0; p < array.length; p++) {
    div_heightSwap(array[p], div_arr[p], "rgb(229,131,4)");
  }
}
