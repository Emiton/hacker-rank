
function main() {
    var n = parseInt(readLine());

    //For loop that multiplies input i-1 times
    // Will multiply input by i and increment i
    for (var i = 1; i < 11; i++) {
    var multiple = n * i;
    console.log(n + ' x ' + i + ' = ' + multiple);
    }
}
