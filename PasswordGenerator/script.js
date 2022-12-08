const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.textContent);

})

generateEl.addEventListener('click', () => {
    resultEl.style.background = "none";

    const lower = lowercaseEl.checked;
    const upper = uppercaseEl.checked;
    const number = numbersEl.checked;
    const symbol = symbolsEl.checked;
    const length = lengthEl.value;
    generatePassword(lower, upper, number, symbol, length);
});


function generatePassword(lower, upper, number, symbol, length) {
    let password = "";
    while (password.length <= length) {
        lower ? (password = password + randomFunc.lower()) : "";
        upper ? (password = password + randomFunc.upper()) : "";
        number ? (password = password + randomFunc.number()) : "";
        symbol ? (password = password + randomFunc.symbol()) : "";
    }
    resultEl.textContent = password.slice(0, length);
}



function getRandomLower() {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    return lower[Math.floor(Math.random() * lower.length)];
}

function getRandomUpper() {
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return upper[Math.floor(Math.random() * upper.length)];

}

function getRandomNumber() {
    let number = "0123456789";
    return number[Math.floor(Math.random() * number.length)];
}

function getRandomSymbol() {
    let symbol = "@#$%&-!";
    return symbol[Math.floor(Math.random() * symbol.length)];
}