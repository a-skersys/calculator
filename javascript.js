let power;
let temp;
let currentValue;
let eraseInput;
let lastOperation;
let clearAll;
let output;
let outputString;
let decimalCount;
let integerCount;
let memory;

window.onload = resetAll();

function resetAll() {
    temp = null;
    currentValue = 0;
    eraseInput = true;
    lastOperation = null;
    clearAll = 0;
    output = null;
    outputString = "";
    decimalCount = 0;
    integerCount = 0;
}


display = document.getElementById("display");

sign = document.getElementById("sign");

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
    sign.textContent = "";
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
    sign.textContent = "";
    output = 0;
    clearAll++;
    if (clearAll == 3) {
        resetAll();
        display.textContent = "";
    }
});

btnOff.addEventListener("click", function() {
    resetAll();
    display.textContent = "";
    power = false;
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
    if (output < 0) {
        sign.textContent = "–";
    } else {
        sign.textContent = "";
    }

    outputString = Math.abs(output).toString();
   
    if (outputString.indexOf(".") <= 0) {
        integerCount = outputString.length;
        decimalCount = 0;
    } else {
        integerCount = outputString.indexOf(".");
        decimalCount = outputString.length - integerCount - 1;
    }

    if (integerCount > 8 || isNaN(output)) {
        display.textContent = "ERR";
    } else if (decimalCount + integerCount >= 7) {
        display.textContent = Math.abs(output).toFixed(8 - integerCount - 1);
    } else {
        display.textContent = outputString;
    }
}

function displayToOutput() {
    output = parseFloat(display.textContent);
}

 

btnPlus.addEventListener("click", function() {
    if(power) {
        calculate("add")
    }
});

btnMinus.addEventListener("click", function() {
    if(power) {
        calculate("sub")
    }
});

btnX.addEventListener("click", function() {
    if(power) {
        calculate("mul")
    }
});

btnDivide.addEventListener("click", function() {
    if(power) {
        calculate("div")
    }
});

btnRoot.addEventListener("click", function() {
    if(power) {
        output = Math.sqrt(output);
        outputToDisplay();
    }
});

btnSquare.addEventListener("click", function() {
    if(power) {
        output = output ** 2;
        outputToDisplay();
    }
});

btnFactorial.addEventListener("click", function() {
    if(power) {
        output = 1 / output;
        outputToDisplay();
    }
});

btnPlusMinus.addEventListener("click", function() {
    if(power) {
        output = output * (-1);
        outputToDisplay();
    }
});

btnPercent.addEventListener("click", function() {
    if(power) {
        if (lastOperation == "add" ||
            lastOperation == "sub") {
                calculate("pro");
        } else if (lastOperation == "mul" ||
                   lastOperation == "div") {
            output = output / 100;
            outputToDisplay();
        }
    }
})

btnMPlus.addEventListener("click", function() {
    if(power) {
        memory += output;
    }
})

btnRM.addEventListener("click", function() {
    
})

btnEqual.addEventListener("click", function() {
    if(power) {
        equals("result");
    }
});

function equals(operation) {
    clearAll = 1;

    currentValue = output;          //
    eraseInput = true;

    switch (lastOperation) {
        case "add":
            if (operation = "pro") {
                output = temp + (temp * output / 100);
                break;
            } else {
                output = temp + output;
                break;
            }
        
        case "sub":
            if (operation = "pro") {
                output = temp - (temp * output / 100);
                break;
            } else {
                output = temp - output;
                break;
            }

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