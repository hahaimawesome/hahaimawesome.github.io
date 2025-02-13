function goToYesPage() {
    // Navigate to the "Yes" page
    window.location.href = "yes.html";
}

function moveNoButton() {
    const noButton = document.getElementById("noBtn");

    // Make the "No" button unclickable
    noButton.disabled = true;

    // Start the movement of the button
    moveButtonRandomly(noButton);
}

function moveButtonRandomly(button) {
    // Randomly set new position
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    function randomPosition() {
        const randomX = Math.random() * (screenWidth - button.offsetWidth);
        const randomY = Math.random() * (screenHeight - button.offsetHeight);

        // Set new position
        button.style.position = "absolute";
        button.style.left = randomX + "px";
        button.style.top = randomY + "px";
    }

    // Move the button every 500ms
    const intervalId = setInterval(() => {
        randomPosition();
    }, 500);

    // Stop the button from moving after 10 seconds (you can adjust this time)
    setTimeout(() => {
        clearInterval(intervalId);
    }, 10000);
}
