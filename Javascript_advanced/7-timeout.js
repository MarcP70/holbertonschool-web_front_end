// Log "Start of the execution queue"
console.log("Start of the execution queue");

// Log "Final code block to be executed" with setTimeout (delay of 0)
setTimeout(() => {
    console.log("Final code block to be executed");
}, 0);

// Loop that iterates 100 times and logs the iteration number
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Log "End of the loop printing"
console.log("End of the loop printing");
