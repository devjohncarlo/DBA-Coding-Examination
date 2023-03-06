// Loop over the rows of the pattern
for (let i = 1; i <= 6; i++) {
    // Initialize a string variable to store the current row
    let row = "";
    
    // Loop over the columns of the current row
    for (let j = 1; j <= i; j++) {
      // Append the current row number to the row string
      row += i;
    }
    
    // Print the completed row to the console
    console.log(row);
  }
  