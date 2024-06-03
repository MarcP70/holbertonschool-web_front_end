function countPrimeNumbers() {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
  return true;
  }

  let count = 0;
  for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
          count++;
      }
  }
  return count;
}

const start = performance.now();
for (let i = 1; i<=100; i++) {
  countPrimeNumbers();
}
const end = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);
