let power = false;
let temp = null;
let currentValue = 0;
let eraseInput = true;
let lastOperation = null;
let clearAll = 0;

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


function writeNumber(num) {
    clearAll = 1;
    if (power) {
        if (display.textContent == "0" || eraseInput == true) {
            display.textContent = num;
            eraseInput = false; 
        } else if (display.textContent.length < 8) {
            display.textContent += num;
        }
    }
}


btnOn.addEventListener("click", function() {
    power = true;
    display.textContent = "0";
    clearAll++;
    if (clearAll == 3) {
        lastOperation = null;
        temp = null;
        clearAll = 0;
    }
});

btnOff.addEventListener("click", function() {
    power = false;
    display.textContent = "";
    lastOperation = null;
    temp = null;
    clearAll = 0;
});

function calculate(operation) {
    clearAll = 1;
    if (temp === null) {
        temp = parseFloat(display.textContent);
        lastOperation = operation;
        eraseInput = true;
    } else {
        equals(operation)
    }
}

btnPlus.addEventListener("click", function() {
    calculate("add")
});

btnMinus.addEventListener("click", function() {
    calculate("sub")
});

btnX.addEventListener("click", function() {
    calculate("mul")
});

btnDivide.addEventListener("click", function() {
    calculate("div")
});



btnEqual.addEventListener("click", function() {
    equals("result");
});

function equals(operation) {
    clearAll = 1;

    currentValue = parseFloat(display.textContent);
    eraseInput = true;

    switch (lastOperation) {
        case "add":
            display.textContent = temp + currentValue;
            break;
        
        case "sub":
            display.textContent = temp - currentValue;
            break;

        case "mul":
            display.textContent = temp * currentValue;
            break;

        case "div":
            display.textContent = temp / currentValue;
            break;
    }

    if (operation == "result") {
        lastOperation = null;
        temp = null;
    } else {
        lastOperation = operation;
        temp = parseFloat(display.textContent);
    }
    

}