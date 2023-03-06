const arr = [5, 1, 4, 6, 7, 3, 5, 7, 3];

// Create an empty set to store unique numbers in the array
const unique = new Set();

// traverse over the array and print duplicate elements
for (let num of arr) {
  if (unique.has(num)) {
  // has detects if the number in arr is existing by boolean
    console.log(num);
  } else {
    unique.add(num);
  }
}
