function countChange(amount) {
    return cc(amount, 5);
}

function cc(amount, kindOfCoinds) {
    return amount === 0 
        ? 1 
        : amount < 0 || kindOfCoinds === 0
        ? 0
        : cc(amount, kindOfCoinds - 1)
        + cc(amount - firstDenomination(kindOfCoinds), kindOfCoinds);
}

function firstDenomination(kindOfCoinds) {
    return kindOfCoinds === 1 ? 1
         : kindOfCoinds === 2 ? 5
         : kindOfCoinds === 3 ? 10
         : kindOfCoinds === 4 ? 25
         : kindOfCoinds === 5 ? 50
         : 0;
}

console.log(countChange(100));