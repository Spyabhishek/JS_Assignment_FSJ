let stats = document.querySelector('.status');
let text = document.getElementById('text');
let char = document.getElementById('char');
let words = document.getElementById('words');
let lines = document.getElementById('lines');
let symbols = document.getElementById('symbols');


count = () => {
    if (text.value.length === 0) {
        stats.style.display = "none";
    }

    else {
        stats.style.display = "block";
        char.innerHTML = text.value.length + "characters";    // character
        words.innerHTML = text.value.trim().split(/\s+/).length + "words";
        lines.innerHTML = text.value.split("\n").length + "lines";
        symbols.innerHTML = text.value.split(/[!@#$%^&*+()_={};:'"<>.,?/-]/).length + "symbols";
    }
}

text.addEventListener("input", count);