/*
 * Complete the solve function below.
 */
function solve(a0, a1, a2, b0, b1, b2) {

    var compareArray = [0,0];
    
    if (a0 > b0) {
        compareArray[0]++;
    } else if (b0 > a0) {
        compareArray[1]++;
    }
    
    
    if (a1 > b1) {
        compareArray[0]++;
    } else if (b1 > a1) {
        compareArray[1]++;
    }
    
    
    if (a2 > b2) {
        compareArray[0]++;
    } else if (b2 > a2) {
        compareArray[1]++;
    }
    return compareArray;

}
