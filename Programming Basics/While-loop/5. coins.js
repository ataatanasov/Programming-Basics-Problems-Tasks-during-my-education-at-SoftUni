function coins(input) {
    let change = Number(input[0]);
    let changeInCoins = Math.floor(change * 100);
    let counterCoins = 0;

    while (changeInCoins > 0) {
        counterCoins++
        
        if (changeInCoins >= 200) {
            changeInCoins -= 200;
        } else if (changeInCoins >= 100) {
            changeInCoins -= 100;
        } else if (changeInCoins >= 50) {
            changeInCoins -= 50;
        } else if (changeInCoins >= 20) {
            changeInCoins -= 20;
        } else if (changeInCoins >= 10) {
            changeInCoins -= 10;
        } else if (changeInCoins >= 5) {
            changeInCoins -= 5;
        } else if (changeInCoins >= 2) {
            changeInCoins -= 2;
        } else {
            changeInCoins -= 1;
        }
    
    }
    console.log(counterCoins)
    
}
coins()