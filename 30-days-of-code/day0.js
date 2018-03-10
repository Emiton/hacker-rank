function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
   
    //Use readline interface to take input from user and output to console
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    //Left the question blank, is there a more efficient way to do this?
    rl.question("", function(answer) {
                var inputString = answer;
                });
    console.log(inputString);
    
} 
