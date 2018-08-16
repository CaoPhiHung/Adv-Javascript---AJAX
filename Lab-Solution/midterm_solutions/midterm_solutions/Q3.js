var leftRotate = function(arr, numOfRotation) {
  return arr.slice(numOfRotation).concat(arr.slice(0, numOfRotation))
};


console.log(leftRotate([1,2,3,4,5], 2));
console.log(leftRotate([1,2,3,4,5], 3));
