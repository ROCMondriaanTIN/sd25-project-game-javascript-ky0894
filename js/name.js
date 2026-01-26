
//name functie
function saveNames() {
    const p1 = document.getElementById("player1").value;
    const p2 = document.getElementById("player2").value;

    localStorage.setItem("player1", p1);
    localStorage.setItem("player2", p2);

    window.location.href = "game.html";
}

window.addEventListener("load", () => {
    const p1 = localStorage.getItem("player1");
    const p2 = localStorage.getItem("player2");

    if (document.getElementById("blackName")) {
        document.getElementById("blackName").textContent = p1;
    }

    if (document.getElementById("whiteName")) {
        document.getElementById("whiteName").textContent = p2;
    }
});

