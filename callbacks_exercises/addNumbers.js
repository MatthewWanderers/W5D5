const readline = require('readline');

const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
  if(numsLeft === 0) {
    return completionCallback(sum);
    }

  reader.question("Enter a Number.", function (answer) {
    const ans = parseInt(answer);
    sum += ans;
    console.log(`Current Sum: ${sum}`);
    addNumbers(sum, numsLeft - 1, completionCallback);
  });

}

addNumbers(0, 3, function (sum) {
  console.log(`Total Sum: ${sum}`);
  reader.close();
});
