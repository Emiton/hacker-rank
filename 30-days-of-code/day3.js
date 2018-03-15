function main() {
    var N = parseInt(readLine());
    
    //Check for odd numbers first
    if (N % 2 != 0) {
        console.log('Weird');
    }
    
    //Then check for even numbers
    else if (N % 2 == 0) {
        
        //If even check the range of N: from 2-5, 6-20, 20-100
        if (2<= N && N <= 5) {
            console.log('Not Weird');
        } else if (6<= N && N <= 20) {
            console.log('Weird');
        } else {
            console.log('Not Weird');
        }
    }

}
