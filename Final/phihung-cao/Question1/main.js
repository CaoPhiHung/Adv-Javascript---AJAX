// Q1
var multiplesOf3and5 = function(num) {
    var arr = [];
    var result = 0;
    for(var i = 0; i < num; i++){
        if(i % 3 == 0 || i % 5 == 0){
            arr.push(i);
        }
    }
    for(var i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
  };
  
  console.log(multiplesOf3and5(15));
  console.log(multiplesOf3and5(20));