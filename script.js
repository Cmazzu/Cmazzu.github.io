// Ottieni il riferimento al pulsante di login e alla modale di login
var loginButton = document.getElementById("loginButton");
var loginModal = document.getElementById("loginModal");

// Quando si fa clic sul pulsante di login, mostra la modale di login
loginButton.addEventListener("click", function() {
    loginModal.style.display = "block";
});

// Ottieni il riferimento all'elemento di chiusura della modale
var closeButton = document.getElementsByClassName("close")[0];

// Quando si fa clic sul pulsante di chiusura, nascondi la modale
closeButton.addEventListener("click", function() {
    loginModal.style.display = "none";
});

// Quando si fa clic al di fuori della modale, nascondi la modale
window.addEventListener("click", function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
});
