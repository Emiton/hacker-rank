function processData(input) {
    
    //Take input and create a string array to be manipulated
    var inputArray = input.split("\n");
    
    //Get the amount of new entries added to the dictionary and convert to number
    var newEntries = Number(inputArray[0]);
    
    //Create a dictionary object
    var myDictionary = new Object();
    
    //Take new entries and add them to dictionary
    for (var i = 1; i <= newEntries; i++) {
        //Separate name and number into array
        var entryArray = inputArray[i].split(' ');
        var person = entryArray[0];
        var phoneNumber = entryArray[1];
        
        //Add entry to dictionary by creating new property
        myDictionary[person] = phoneNumber;
    }
    
    //Check if a property has a value, if undefined log 'Not found'
    for (var j = newEntries + 1; j < inputArray.length; j++) {
        if (myDictionary[inputArray[j]] !== undefined) {
            console.log(inputArray[j] + "=" + myDictionary[inputArray[j]]);
        } else {
            console.log("Not found");
        }
    }  
} 
