var num = 12;
var arr = [];
for(let i = 1; i <= num; i++) {

  if(num % i == 0) {
    if(isPrime(i)){
      arr.push(i);
    }
  }
}
function isPrime(number)
{
    if (number == 0 || number == 1){
            return false;
    }
    for (var i = 2; i< number; i++) {
        if (number % i == 0){
            return false;
        }
    }
return true;
}
console.log(arr);