// Compteur
let counter = 0;
const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

incrementBtn.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
});

decrementBtn.addEventListener('click', () => {
    counter--;
    counterElement.textContent = counter;
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    counterElement.textContent = counter;
});

// Message
const messageInput = document.getElementById('messageInput');
const displayBtn = document.getElementById('displayBtn');
const messageOutput = document.getElementById('messageOutput');

displayBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        messageOutput.textContent = message;
        messageInput.value = '';
    } else {
        messageOutput.textContent = 'Veuillez entrer un message';
    }
});

messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        displayBtn.click();
    }
});

// Thème sombre
const themeBtn = document.getElementById('themeBtn');
let isDarkTheme = false;

themeBtn.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.body.classList.toggle('dark-theme');
    themeBtn.textContent = isDarkTheme ? 'Mode Clair' : 'Mode Sombre';
});

// Message de bienvenue au chargement
window.addEventListener('DOMContentLoaded', () => {
    console.log('Interface chargée avec succès!');
});