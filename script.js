// Stampo numeri da 1 a 100
for (let myNum = 1; myNum <= 100; myNum++) {
    // Sia multipli di 3 che di 5
    if(myNum % 3 == 0 && myNum % 5 == 0){
        console.log(`FizzBuzz`)
    }
    // Multipli solo di 3
    else if(myNum % 3 == 0){
        console.log(`Fizz`)
    }
    // Multipli solo di 5
    else if(myNum % 5 == 0){
        console.log(`Buzz`)
    }
    else{console.log(myNum)}
    
}