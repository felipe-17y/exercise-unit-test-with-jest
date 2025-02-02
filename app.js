
const sum = (a, b) => {
    return a + b
}
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

console.log(sum(7, 3))


// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInYen = valueInDollar / 1.2 * 127.9;
   return valueInYen;
}

const fromYenToPound = function(valueInYen) {
     let valueInPound = valueInYen / 127.9 * 0.8;
    return valueInPound;
}


module.exports = {
    sum,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
}