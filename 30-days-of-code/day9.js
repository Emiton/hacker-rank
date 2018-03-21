function factorial(n) {
    // Complete this function
    var answer;
    //Base case: will yield an answer of 1
    if (n === 0 || n === 1) {
        answer = 1;
    //Following cases will find base case and start multiplying from there    
    } else {
        answer = n * factorial(n-1);
    }
    return answer;
}

function main() {
    var n = parseInt(readLine());
    var result = factorial(n);
    process.stdout.write("" + result + "\n");

}
