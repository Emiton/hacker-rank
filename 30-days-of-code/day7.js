function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    //Set increment variable equal to array size
    //Will be used to work from end of array to the beginning
    var i = n;
    
    //This string is used to concatenate numbers from the array
    var reverseString = "";
    
    //This loop will concatenate numbers from the array in reverse order
    while (i > 0) {
        reverseString += arr[i-1];
        reverseString += " ";
        i--;
    }
    
    console.log(reverseString);
}

