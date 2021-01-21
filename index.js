const factorialize = function(num){

    /* YOUR CODE HERE */
    let i;
    let total= num;

    for(i = num-1 ; i>0; i--){
        total *= i
    }

    return total

}

module.exports = factorialize
