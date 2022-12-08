function getRandomSymbol() {
    let symbol = "@#$%&-!";
    return symbol[Math.floor(Math.random() * symbol.length)];
}
let a = getRandomSymbol();
console.log(a);