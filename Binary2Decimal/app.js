const binaryInput = document.querySelector("#binary");
const submitBtn = document.querySelector(".btn");
const result = document.querySelector(".result");

const convertBinaryToDecimal = (binaryNumber) => {
    let result = 0;
    let pow = 0;

    while (binaryNumber !== 0) {
        if (binaryNumber % 10 >= 2) {
            alert("Not a valid binary number");
            return 0;
        }
        result += 2 ** pow * (binaryNumber % 10);
        binaryNumber = Math.floor(binaryNumber / 10);
        pow++;
    }
    return result;
};

submitBtn.setAttribute("type", "button");
submitBtn.addEventListener("click", (e) => {
    if (binaryInput.value.length > 0) {
        let decimalNumber = convertBinaryToDecimal(Number(binaryInput.value));
        result.textContent = `Decimal Number : ${decimalNumber}`;
        binaryInput.value = "";
    }
});