/*
Title: Binary Numbers 
Author: Emiton Alves
Date: 3-26-18

This excerpt of code will create an array which house the binary representation of
a base 10 number. It will then parse the array and find the largest consecutive streak
of the digit '1'. Finally, the program will print the largest streak to the console.
*/

function main() {
    var n = parseInt(readLine());
    //This array will hold binary represntation of the base-10 number
    var binaryArray = [];
    //This value will be incremented when consecutive values are found
    var streakChecker = 0;
    //This value will hold the  tally largest streak of ones in the binary array
    var biggestStreak = 0;
    
    //Will create binary array using technique given in the tutorial
    while ( n > 0) {
        var currentRemainder;
        //If there is a remainder, push a one to the binary array
        currentRemainder = n % 2;
        binaryArray.push(currentRemainder);
        //Take the quotient, disregarding the remainder, and use it for the next iteration
        n = Math.floor(n/2);
    }
    
    //This loop will count largest available streak
    //It will add one to the streak everytime a consecutive one is found
    for (var i = 0; i < binaryArray.length; i++) {
        if (binaryArray[i] == 1) {
            streakChecker += 1;   
        } else if (binaryArray[i] == 0) {
            //Check if current streak is larger than last streak and set value
            biggestStreak = Math.max(streakChecker, biggestStreak);
            //Reset checker and begin looking for streaks again
            streakChecker = 0;
        }
    }
    
    //Check one last time if final streak was larger than overall streak
    biggestStreak = Math.max(streakChecker, biggestStreak);
    console.log(biggestStreak);
}

