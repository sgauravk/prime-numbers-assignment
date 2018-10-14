let pc = +process.argv[2];

const isprime = function(pc){
  let divisor = 3;
  let isPrime = (pc==2) || (pc%2 != 0);
  if (pc < 0){
    console.log("invalid prime candidate");
    process.exit();
  }
  if (pc == 0 || pc == 1){
    console.log("nither prime nor composite");
    process.exit();
  }
  while(divisor<=Math.sqrt(pc) && isPrime) {
    isPrime=(pc % divisor != 0);
    divisor+=2;
  }
  return isPrime;
}
isPrime = isprime(pc);
console.log(isPrime);
