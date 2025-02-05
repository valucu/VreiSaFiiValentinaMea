const noButton = document.getElementById("noButton");

noButton.addEventListener("mouseover", function() {
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 50;
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

document.getElementById("yesButton").addEventListener("click", function() {
    alert("Yay! ❤️ See you on Valentine's Day! 😊");
});