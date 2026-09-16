setInterval(function() {
    alert("Please, use me...")
}, 30000);

const btn = document.getElementById("calc-btn");

btn.addEventListener("click", function() {
    const left = document.getElementById("left-num").value;
    const right = document.getElementById("right-num").value;
    const operator = document.getElementById("operator").value;

    const isPositive = /^\d+$/;

    if (!isPositive.test(left) || !isPositive.test(right)) {
        alert("Error : (");
        console.log("Error : (");
        return;
    }

    const num1 = parseInt(left, 10);
    const num2 = parseInt(right, 10);

    if ((operator === "/" || operator === "%") && num2 === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result = 0;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "%":
            result = num1 % num2;
            break;
    }

    alert(result);
    console.log(result);
});

