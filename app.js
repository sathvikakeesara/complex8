
function calculateSum(a, b) {
    return a + b;
}

document.getElementById('add').addEventListener('click', function() {

    const num1 = parseInt(
        document.getElementById('num1').value, 10
    );

    const num2 = parseInt(
        document.getElementById('num2').value, 10
    );

    const result = calculateSum(num1, num2);

    document.getElementById('result').textContent = result;
});
