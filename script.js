let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            try {
                string = string.replace(/[^0-9+\-*/.%]/g, ''); 
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } 
        else if (value == 'AC') {
            string = "";
            input.value = string;
        } 
        else if (value == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
        else {
            if (["+", "-", "", "/", "%"].includes(value) && ["+", "-", "", "/", "%"].includes(string.slice(-1))) {
                return; // Prevent multiple operators
            }
            string += value;
            input.value = string;
        }
    });
});