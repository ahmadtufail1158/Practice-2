// Example usage:
  const numbers = [2, 1, 6, 10, 3, 4];
  findHighestAndLowest(numbers);



function findHighestAndLowest(arr) {
    let highest = arr[1];
    let lowest = arr[1];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > highest) {
        highest = arr[i];
      } else if (arr[i] < lowest) {
        lowest = arr[i];
      }
    }
  
    console.log(`Highest: ${highest}`);
    console.log(`Lowest: ${lowest}`);
  }
  
  