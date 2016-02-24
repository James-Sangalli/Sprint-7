// Your code here.
var min = function(n1,n2){
  return Math.min(n1,n2);
}
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10


// Your code here.
var isEven = function(n){
  if (n % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??


// Your code here.


var countChar = function (s, c) {
  var count = 0;
  for (var i = 0; i < s.length; i++){
    if (s.charAt(i) == c){
      count += 1;
    }   
  }
  return count;
    
}

var countBs = function(a){
  return countChar(a, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4