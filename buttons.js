// buttons.js

export function modelButtons(callback) {
    // Get all buttons with the class 'btn-check'
    const modelButtons = document.querySelectorAll('.btn-check');

    // Add event listener for each radio button
    modelButtons.forEach((button) => {
        button.addEventListener('click', () => {
            
            callback(button.id); //callback function so that the switch statement updates every time a button is pressed
        });
    });
}
