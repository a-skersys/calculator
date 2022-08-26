let power = false;
let temp = null;
let currentValue = 0;
let eraseInput = true;
let lastOperation = null;
let clearAll = 0;
let output = null;
let sign = "";

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
            display.textContent = parseFloat(num);
            eraseInput = false; 
        } else if (display.textContent.length < 8) {
            display.textContent += num;
        }
    }
    displayToOutput();
}


btnOn.addEventListener("click", function() {
    power = true;
    display.textContent = "0";
    output = 0;
    clearAll++;
    if (clearAll == 3) {
        lastOperation = null;
        temp = null;
        clearAll = 0;
    }
});

btnOff.addEventListener("click", function() {
    power = false;
    output = null;
    display.textContent = "";
    lastOperation = null;
    temp = null;
    clearAll = 0;
});

function calculate(operation) {
    clearAll = 1;

    if (temp === null) {
        temp = output;                   //
        lastOperation = operation;
        eraseInput = true;
    } else {
        equals(operation)
    }
    outputToDisplay;
}

function outputToDisplay() {
    display.textContent = output;
}

function displayToOutput() {
    output = parseFloat(display.textContent);
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

btnRoot.addEventListener("click", function() {
    output = Math.sqrt(output);
    outputToDisplay();
});

btnSquare.addEventListener("click", function() {
    output = output ** 2;
    outputToDisplay();
});

btnFactorial.addEventListener("click", function() {
    output = 1 / output;
    outputToDisplay();
});



btnEqual.addEventListener("click", function() {
    equals("result");
});

function equals(operation) {
    clearAll = 1;

    currentValue = output;          //
    eraseInput = true;

    switch (lastOperation) {
        case "add":
            output = temp + output;
            break;
        
        case "sub":
            output = temp - output;
            break;

        case "mul":
            output = temp * output;
            break;

        case "div":
            output = temp / output;
            break;
    }

    if (operation == "result") {
        lastOperation = null;
        temp = null;
    } else {
        lastOperation = operation;
        temp = output;              ///
    }

    outputToDisplay();
    

}