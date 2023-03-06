const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for the number of male and female employees
rl.question('Enter the number of newly hired males: ', function(numMaleHired) {
  rl.question('Enter the number of newly hired females: ', function(numFemaleHired) {
    rl.question('Enter the number of permanent position males: ', function(numMalePerm) {
      rl.question('Enter the number of permanent position females: ', function(numFemalePerm) {
        rl.question('Enter the number of resigned males: ', function(numMaleResigned) {
          rl.question('Enter the number of resigned females: ', function(numFemaleResigned) {
            // Convert the input strings to numbers
            numMaleHired = parseInt(numMaleHired);
            numFemaleHired = parseInt(numFemaleHired);
            numMalePerm = parseInt(numMalePerm);
            numFemalePerm = parseInt(numFemalePerm);
            numMaleResigned = parseInt(numMaleResigned);
            numFemaleResigned = parseInt(numFemaleResigned);

            // Calculate the total number of employees
            const numEmployees = numMaleHired + numFemaleHired + numMalePerm + numFemalePerm - numMaleResigned - numFemaleResigned;

            // Calculate the percentages of male and female employees in each category
            const percMaleHired = (numMaleHired / (numMaleHired + numFemaleHired)) * 100;
            const percFemaleHired = (numFemaleHired / (numMaleHired + numFemaleHired)) * 100;
            const percMalePerm = (numMalePerm / (numMalePerm + numFemalePerm)) * 100;
            const percFemalePerm = (numFemalePerm / (numMalePerm + numFemalePerm)) * 100;
            const percMaleResigned = (numMaleResigned / (numMaleResigned + numFemaleResigned)) * 100;
            const percFemaleResigned = (numFemaleResigned / (numMaleResigned + numFemaleResigned)) * 100;

            // Print the results
            console.log('Thank you for the information');
            console.log('Here is the summary !!!');
            console.log('Number of hired employee =', numMaleHired + numFemaleHired);
            console.log('Male =', percMaleHired.toFixed(2) + '%');
            console.log('Female =', percFemaleHired.toFixed(2) + '%');
            console.log('Number of Permanent Employee =', numMalePerm + numFemalePerm);
            console.log('Male =', percMalePerm.toFixed(2) + '%');
            console.log('Female =', percFemalePerm.toFixed(2) + '%');
            console.log('Number of Resigned Employee =', numMaleResigned + numFemaleResigned);
            console.log('Male =', percMaleResigned.toFixed(2) + '%');
            console.log('Female =', percFemaleResigned.toFixed(2) + '%');

            // Close the readline interface
            rl.close();
          });
        });
      });
    });
})})
