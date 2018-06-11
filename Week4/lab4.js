var findLargest = function(arr) {
  var result = 0;
  arr.forEach(function(item){
    if(item > result){
      result = item;
    }
  });
  return result;
};

var findLargest2 = function(arr){
  var result = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(result < arr[i]){
      result = arr[i];
    }
  }
  return result;
}


var printAsterisks = function() {
  for(var i = 0; i < 5; i++) {
    console.log('******');
  }
};

var a = [1,6,3,0,8];
console.log(findLargest(a));
console.log(findLargest2(a));
