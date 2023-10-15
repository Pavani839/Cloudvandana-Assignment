
// Get all form fields
const formFields = document.querySelectorAll('input, select');

// Add event listener to submit button
document.getElementById('submit-button').addEventListener('click', validateForm);

// Add event listener to reset button
document.getElementById('reset-button').addEventListener('click', resetForm);

// Function to validate form fields
function validateForm() {
// Loop through all form fields and check if they are empty
for (let i = 0; i < formFields.length; i++) {
if (formFields[i].value === '') {
// Display error message for empty fields
const errorMessage = document.createElement('div');
errorMessage.textContent = `Please fill out all required fields`;
errorMessage.style.cssText = 'color: red; font-size: 16px;';
formFields[i].parentNode.appendChild(errorMessage);
return false;
}
}

// If all fields are filled out, display popup with selected values
const popup = document.createElement('div');
popup.style.cssText = 'position: fixed; top: 50%; left: 50%; background-color: white; border-radius: 10px; padding: 20px; z-index: 999;';
popup.innerHTML = `
Details submitted successfully:`;
document.body.appendChild(popup);

// Loop through all form fields and add their values to the popup
for (let i = 0; i < formFields.length; i++) {
const field = formFields[i];
const value = field.value;
const label = field.name;
const listItem = document.createElement('li');
listItem.textContent = `${label}: ${value}`;
popup.querySelector('ul').appendChild(listItem);
}

// Add event listener to popup to close it when clicked outside
popup.addEventListener('click', function(event) {
if (event.target !== popup) {
popup.parentNode.removeChild(popup);
}
});

return true;
}

// Function to reset form fields
function resetForm() {
// Loop through all form fields and reset their values
for (let i = 0; i < formFields.length; i++) {
formFields[i].value = '';
}

// Remove popup and error messages
document.body.querySelectorAll('div.error-message').forEach(function(message) {
message.parentNode.removeChild(message);
});
popup.parentNode.removeChild(popup);
}
