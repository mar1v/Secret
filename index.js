const message = [
    "Are you sure",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
]

let messageIndex = 0;

function HandleNo() {
    const yesbutton = document.querySelector(".yes-button");
    const nobutton = document.querySelector(".no-button");
nobutton.textContent = message[messageIndex];
messageIndex = (messageIndex + 1) % message.length;
const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function HandleYes() {
    window.location.href = "yes_page.html";
}
