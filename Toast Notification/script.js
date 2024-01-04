const button = document.getElementById('btn');
const toasts = document.getElementById('toasts');

const messages = [
    "Message One",
    "Message Two",
    "Message Three",
    "Message Four"
];

const types = ['info', 'success', 'error'];

function createNotification(message = null, type = null) {
    // Create the div element:
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.classList.add(type ? type : getRandomType());
    notif.innerText = message ? message : getRandomMessage();
    toasts.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

// Use the addEventListener to listen for Click:
// Incorporating the different type which is the info, success and error:
button.addEventListener('click', () => createNotification(getRandomMessage(), getRandomType()));

