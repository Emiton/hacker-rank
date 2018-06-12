// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    var maxHeight = 0;
    var count = 0;
    // Check if each "candle" is larger than max
    ar.forEach( function(candle) {
        if (candle > maxHeight) {
            maxHeight = candle;
            count = 1;
        } else if (candle === maxHeight) {
            count++;
        }
    });

    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}

