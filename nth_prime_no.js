let primeToCount = +process.argv[2];
let primeCandidate = 1;
let message = "the given number is zero or below zero please recheck and try again.";

const prime = function(primeToCount){
  let primeCount = 0;
  let factors = 0;
  while (primeToCount > 0 && primeCount != primeToCount){ 
    primeCandidate++;
    factors = 0;
    let limit = Math.sqrt(primeCandidate);
    for (let divisor = 1; divisor <= limit; divisor++){
      if (primeCandidate % divisor == 0){
        factors++;
      }
    }
    if (factors == 1){
      primeCount++;
    }
  }
  return primeCandidate;
}
primeCandidate = prime(primeToCount);
if (primeToCount < 1){
  console.log(message);
}
if (primeToCount > 0){
  console.log(/*"",primeToCount,"th prime number is",*/primeCandidate);
}
