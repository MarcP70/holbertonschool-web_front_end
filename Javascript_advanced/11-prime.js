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

let count = 0;

function executeCountPrimeNumbers() {
    const startTime = performance.now();

    countPrimeNumbers();
    count++;

    if (count < 100) {
        setTimeout(executeCountPrimeNumbers, 0);
    } else {
        const endTime = performance.now();
        console.log(`Execution time of calculating prime numbers 100 times was ${endTime - startTime} milliseconds.`);
    }
}

executeCountPrimeNumbers();
