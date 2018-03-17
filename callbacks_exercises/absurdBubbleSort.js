const readline = require('readline');

const reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?`, function (answer) {
    if (answer === 'yes') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(array, i, madeAnySwaps, outerBubbleSortLoop) {
    console.log(array[i]);
    if (i === array.length - 1) {
      outerBubbleSortLoop(madeAnySwaps);
    } else {
      askIfGreaterThan(array[i], array[i + 1], function (isGreaterThan) {
        if (isGreaterThan) {
          [array[i], array[i+1]] = [array[i + 1], array[i]];
          madeAnySwaps = true;
        }

        innerBubbleSortLoop(
          array, i + 1, madeAnySwaps, outerBubbleSortLoop
        );
      });
    }

}

// function absurdBubbleSort(array, sortCompletionCallback) {
//   function outerBubbleSortLoop(madeAnySwaps) {
//     if (madeAnySwaps) {
//       innerBubbleSortLoop(array, 0, false, outerBubbleSortLoop)
//     } else {
//       console.log()
//     }
// }

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if `madeAnySwaps` is true, else call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});






innerBubbleSortLoop([0,3,2,1],0,true);
