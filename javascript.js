let power = false;
let temp = null;
let currentValue = 0;
let eraseInput = true;
let lastOperation = null;

display = document.getElementById("display");

btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function() {
    writeNumber(1);
});

btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function() {
    writeNumber(2);
});

btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function() {
    writeNumber(3);
});

btn4.addEventListener("click", function() {
    writeNumber(4);
});

btn5.addEventListener("click", function() {
    writeNumber(5);
});

btn6.addEventListener("click", function() {
    writeNumber(6);
});

btn7.addEventListener("click", function() {
    writeNumber(7);
});

btn8.addEventListener("click", function() {
    writeNumber(8);
});

btn9.addEventListener("click", function() {
    writeNumber(9);
});

btn0.addEventListener("click", function() {
    writeNumber(0);
});

btnDot.addEventListener("click", function() {
    writeNumber(".");
});


function writeNumber(x) {
    if (power) {
        if (display.textContent == "0" || eraseInput == true) {
            display.textContent = x;
            eraseInput = false; 
        } else if (display.textContent.length < 8) {
            display.textContent += x;
        }
    }
}


btnOn.addEventListener("click", function() {
    power = true;
    display.textContent = "0";
});

btnOff.addEventListener("click", function() {
    power = false;
    display.textContent = "";
});

btnPlus.addEventListener("click", function() {
    if (temp === null) {
        temp = parseFloat(display.textContent);
        lastOperation = "add";
        eraseInput = true;
    }
});

btnMinus.addEventListener("click", function() {
    if (temp === null) {
        temp = parseFloat(display.textContent);
        lastOperation = "sub";
        eraseInput = true;
    }
});

btnEqual.addEventListener("click", function() {
    equals("result");
});

function equals(operation) {
    if (operation == "result") {
        currentValue = parseFloat(display.textContent);
        if (lastOperation == "add") {
            display.textContent = temp + currentValue;
        } else if (lastOperation == "sub") {
            display.textContent = temp - currentValue;
        }    
        lastOperation = null;
        eraseInput = true;
        temp = null;
    } 
    

}