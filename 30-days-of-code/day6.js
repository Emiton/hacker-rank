function processData(input) {
    //Take the input and separate all lines
    var inputArray = input.split("\n");
    
    //Find the number of test cases
    var testCases = inputArray[0];
    
    // For loop will work through each test case individually
    for (var i = 0; i < testCases; i++) {
        
        // Get the string of the current test case
        var currentString = inputArray[i+1];
        
        // Used to store characters at the odd or even indexes
        var evenChar = "";
        var oddChar = "";
        
        // Get length of current test case
        var n = currentString.length;
        
        // Turn string into array in order to be manipulated
        var stringArray = currentString.split('');
        
        //For loop to find characters indexed at even numbers '0 is even'
        for (var j = 0; j < n; j += 2) {
            evenChar += stringArray[j];
        }
        
        //For loop to find characters indexed at odd characters
        for(var k = 1; k < n; k += 2) {
            oddChar += stringArray[k];
        }
        
        console.log(evenChar + " " + oddChar);
    }
    
    
    
} 
