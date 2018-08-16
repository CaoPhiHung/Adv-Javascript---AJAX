// Q1
var isPalindrome = function(str) {
  var trimedLoweredCaseStr = str.split(' ').join('').toLowerCase();
  var len = trimedLoweredCaseStr.length;
  for (var i = 0; i < len/2; i++) {
    if (trimedLoweredCaseStr[i] !== trimedLoweredCaseStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('Anna'));
console.log(isPalindrome('racecar'));
console.log(isPalindrome('never odd or even'));
console.log(isPalindrome('not a palindrome'));


