
exports.min = function min (array) {
    if (array === undefined || array.length == 0) return 0;
  let num = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < num ) {
      num = array[i];
    }
    
  }
  return num;
}

exports.max = function max (array) {
    if (array === undefined || array.length == 0) return 0;
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      num = array[i];
    }

  }
  return num;
}

exports.avg = function avg (array) {
    if (array === undefined || array.length == 0) return 0;
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    num = num + array[i];

  }
  return num / array.length;
}
