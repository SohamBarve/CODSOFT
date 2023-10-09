document.addEventListener("DOMContentLoaded", function () {
    const screen = document.getElementById("screen");
    let currentInput = "";

    // Function to update the screen
    function updateScreen() {
        screen.value = currentInput;
    }

    // Add event listeners to number and operator buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const value = button.textContent;
            if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = "Error";
                }
            } else if (value === "C") {
                currentInput = "";
            } else {
                currentInput += value;
            }
            updateScreen();
        });
    });
});
