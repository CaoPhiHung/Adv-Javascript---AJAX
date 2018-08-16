// Q2
var birthdayCandles = function(arr) {
    var result = 0;
    var max = arr[0];
    var count = 1;
    for(var i = 1; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
            count = 1;
        }else if(max == arr[i]){
            count++;
        }
    }
    return count;
  };
  
  console.log(birthdayCandles([3,2,1,3]));
  console.log(birthdayCandles([3,3,3,3,3]));
  console.log(birthdayCandles([3,5,3,3,1,1]));