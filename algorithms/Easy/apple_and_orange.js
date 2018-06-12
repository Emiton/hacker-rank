/**
 * For problem info: https://www.hackerrank.com/challenges/apple-and-orange/problem
 * Category: Algorithms/Implementation
**/

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Find the number of fruit fell on Sam's house from each tree
    var applesOnHome = checkTheRange(s, t, a, apples);
    var orangesOnHome = checkTheRange(s, t, b, oranges);
    console.log(applesOnHome);
    console.log(orangesOnHome);
}


// Check if the fruit have fallen within the range of the home
function checkTheRange (s, t, tree, fruit) {
    // Keeps track of how many fruit fell on Sam's house
    var onTheHouse = 0;
    fruit.forEach( function(piece) {
        // Add the distance the fruit fell to position of the tree 
        // If within the range of the home, increment the counter
        if (s <= (piece + tree) && (piece + tree) <= t ) {
            onTheHouse++;
        }
    });
    return onTheHouse;
}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
