function bubbleSort (array) {
  length = array.length
  var swapped;
  do {
    sorted = false;
    for (var num = 1; num < length; ++num){
      if (array[num - 1] > array[num]) {
        [array[num], array[num-1]] = [array[num-1], array[num]];
        sorted = true;
      }
    }
  } while (sorted == true)
  return array
}

module.exports = bubbleSort
