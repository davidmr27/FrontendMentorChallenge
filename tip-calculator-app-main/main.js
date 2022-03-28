let buttons = document.querySelectorAll('.buttons button');
var tagAmount = document.getElementById('amount');
var tagTotal = document.getElementById('total');
var reset = document.getElementById('reset');
var discount = document.getElementById('discount');
var tagBill = document.getElementById('bill');
var tagPeople = document.getElementById('people');

var bill = 0;
var people = 0;
var percent = 0;

const regexNumber = /^\d+$/;
var inputs = document.querySelectorAll('.control > div input');


inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        let tag = e.target;
        const validInput = regexNumber.exec(tag.value);
        // console.log(validInput);
        if (!validInput) {
            tag.value = "";
        } else {
            tag.value = tag.value;
            tag.classList.contains('discount') ? custom_discount() : "";
        }
        // console.log(validInput);
    });
});

reset.addEventListener('click', (e) => {
    tagAmount.textContent = "$0.00";
    tagTotal.textContent = "$0.00";
    let inputData = document.querySelectorAll('.control > div input');
    inputData.forEach((elem) => {
        // console.log("Borrando...");
        elem.value = "";
    })
});

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let value = e.target.value;
        percent = value;
        // console.log(value);
        check_is_input_zero();
    });
});

function custom_discount() {
    // console.log(discount.value);
    if (discount.value > 0) {
        percent = discount.value;
        bill = tagBill.value;
        people = tagPeople.value;
        // console.log(percent);
        check_is_input_zero();
        calculate_total_amount();
    } else if(discount.value = "") {
        tagAmount.textContent = "$0.00";
        tagTotal.textContent = "$0.00";
        percent = 0;
        bill = 0;
        people = 0;
    }
}

function check_is_input_zero() {
    let inputs = document.querySelectorAll('.input-container');
    inputs.forEach(input => {
        let nodeInput = input.lastElementChild;
        let value = nodeInput.value
        // console.log(nodeInput);

        let brother = input.previousElementSibling;
        let father = brother.parentNode;

        if (nodeInput.value == "0") {
            if (!father.classList.contains("error")) {

                let span = document.createElement("span");
                span.textContent = "Can't be zero";
                span.classList.add("zero")
                brother.appendChild(span);
                father.classList.add("error");
            }
        } else {
            if (father.classList.contains("error")) {
                // console.log("Borrando la clase")
                brother.removeChild(brother.lastElementChild)
                father.classList.remove("error");
            }
            bill = tagBill.value;
            people = tagPeople.value;
            calculate_total_amount();
        }
    });
}

function calculate_total_amount() {
    if (percent > 0 && bill > 0 && people > 0) {
        let percentage = percent / 100;
        let propina = bill * percentage;
        let by_person = propina / people;
        // console.log(percentage, propina, by_person);

        tagAmount.textContent = `$${by_person.toFixed(2)}`;
        tagTotal.textContent = `$${propina.toFixed(2)}`;
    }
}