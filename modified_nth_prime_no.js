let primeCount=2;
let nthValue=process.argv[2];
let primeCandidate=3;
let isPrime=true;
let message="the given number is zero or below zero, kindly check and try again.";

if (nthValue<=0){
  primeCandidate=0;
}
if (nthValue==1){
  primeCandidate=2;
}
while (primeCount < nthValue){
  primeCandidate=primeCandidate+2;
  isPrime=false;
  if (primeCandidate%6==1 || primeCandidate%6==5){
    isPrime=true;
    let limit = Math.sqrt(primeCandidate);
    for (let divisor=2; divisor <= limit; divisor++){
      if (primeCandidate % divisor == 0){
        isPrime=false;
      }
    }
  }
  if(isPrime==true){
    primeCount++;
  }
}
if (primeCandidate>0){
  console.log("the",nthValue+"th prime number is",primeCandidate);
} else {
  console.log(message);
}
