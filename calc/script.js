let buttons = document.querySelectorAll(".btn");
let string = "";
let clear = document.querySelector(".c");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.value == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.value == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else {
            // console.log(e.target);
            string = string + e.target.value;
            document.querySelector('input').value = string;
        }
    });
});
