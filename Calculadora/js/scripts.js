const buttons               = document.querySelectorAll('#buttons-container button');
const currentOperationText  = document.querySelector('#current-operation');
const previousOperationText = document.querySelector('#previous-operation');

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.currentOperation      = '';
        this.currentOperationText  = currentOperationText;
        this.previousOperationText = previousOperationText;
    }

    addDigit(digit){
        if (digit === "." && this.currentOperation.includes(".")) {
            return;
        }

        this.currentOperation = digit;
        this.updateDisplay();
    }

    processOperation(operation){

        if (this.currentOperationText.innerText === "" && operation !== "C") {
            if (this.previousOperationText.innerText !== "") {
                this.changeOperation(operation);
            }
            return;
        }

        const current  = +this.currentOperationText.innerText;
        const previous = +this.previousOperationText.innerText.split(' ')[0];
        let operationValue

        switch(operation){
            case "+":
                operationValue = previous + current;
                this.updateDisplay(current, previous, operation, operationValue);
                break;
            case "-":
                operationValue = previous - current;
                this.updateDisplay(current, previous, operation, operationValue);
                break;
            case "*":
                operationValue = previous * current;
                this.updateDisplay(current, previous, operation, operationValue);
                break;
            case "/":
                operationValue = previous / current;
                this.updateDisplay(current, previous, operation, operationValue);
                break;
            case "DEL":
                this.processDelOperator();
                break;
            case "=":
                this.processEqualOperator();
                break;
            case "CE":
                this.processClearCurrentOperation();
                break;
            case "C":
            this.processClearAll();
            break;
            default:
                return;
        }
    }

    updateDisplay(
        current        = null,
        previous       = null,
        operation      = null,
        operationValue = null
        ){
        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            if(previous === 0){
                operationValue = current;
            }

            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText  = '';
        }
    }

    changeOperation(operation){
        const mathOperations = ['+', '-', '*', '/'];

        if (!mathOperations.includes(operation)) {
            return;
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
    }

    processDelOperator() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
    }

    processClearCurrentOperation() {
        this.currentOperationText.innerText  = '';
    }

    processClearAll() {
        this.currentOperationText.innerText  = '';
        this.previousOperationText.innerText = '';
    }

    processEqualOperator() {
        const operation = previousOperationText.innerText.split(' ')[1];

        this.processOperation(operation);
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;

        if(+value >= 0 || value === "."){
            calc.addDigit(value);
        } else {
            calc.processOperation(value);
        }
    });
});