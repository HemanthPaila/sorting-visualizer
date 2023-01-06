async function insertion_sort() {
  for (var i = 1; i < array.length; i++) {
    var temp = array[i];
    var j = i;
    while (j > 0 && array[j - 1] > temp) {
      div_heightSwap(array[j], div_arr[j], "red");
      div_heightSwap(array[j - 1], div_arr[j - 1], "red");
      await sleep(speed);
      array[j] = array[j - 1];
      div_heightSwap(array[j], div_arr[j], "red");
      await sleep(speed);
      div_heightSwap(array[j], div_arr[j], "rgb(229,131,4)");
      await sleep(speed);
      div_heightSwap(array[j], div_arr[j], "green");
      await sleep(speed);
      j--;
    }
    div_heightSwap(array[j], div_arr[j], "red");
    await sleep(speed);
    array[j] = temp;
    div_heightSwap(array[j], div_arr[j], "red");
    await sleep(speed);
    div_heightSwap(array[j], div_arr[j], "rgb(229,131,4)");
    await sleep(speed);
    div_heightSwap(array[j], div_arr[j], "green");
    await sleep(speed);
  }
}
function insertion() {
  document.getElementById("wcase").innerHTML = "O(n^2)";
  document.getElementById("acase").innerHTML = "Θ(n^2)";
  document.getElementById("bcase").innerHTML = "Ω(n)";
  document.getElementById("space").innerHTML = "O(1)";
  insertion_sort();
}
