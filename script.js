// Stampo numeri da 1 a 100
for (let myNum = 1; myNum <= 100; myNum++) {
    const newDiv = document.querySelector(`div`);
    // Sia multipli di 3 che di 5
    if(myNum % 3 == 0 && myNum % 5 == 0){
        console.log(`FizzBuzz`)
        newDiv.innerHTML = newDiv.innerHTML + `<div>FizzBuzz</div>`    
    }
    // Multipli solo di 3
    else if(myNum % 3 == 0){
        console.log(`Fizz`)
        newDiv.innerHTML = newDiv.innerHTML + `<div>Fizz</div>`    
    }
    // Multipli solo di 5
    else if(myNum % 5 == 0){
        console.log(`Buzz`)
        newDiv.innerHTML = newDiv.innerHTML + `<div>Buzz</div>`
    }
    else{console.log(myNum)};
    let myNewNum = myNum;    
    newDiv.innerHTML = newDiv.innerHTML + `<div>${myNum}</div>`
}