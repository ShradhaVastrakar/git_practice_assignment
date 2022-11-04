function checkPrime(number){
    let factor = 0;

    for(let i = 1; i <= number; i++){
        if(number % i == 0){
            factor++;
        }
    }

    if(factor == 2){
        return true;
    }
    return false;
}

let answer = checkPrime(13)
if(answer == true){
    console.log(number,"is Prime");
}
else{
    console.log(number,"is not Prime");
}