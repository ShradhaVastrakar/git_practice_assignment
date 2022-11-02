function checkPrime(number){
    let factor = 0;

    for(let i = 1; i <= number; i++){
        if(num%i== 0){
            count++;
        }
    }

    if(factor == 2){
        return true;
    }
    return false;
}

let answer = checkPrime(13)
console.log(ans);