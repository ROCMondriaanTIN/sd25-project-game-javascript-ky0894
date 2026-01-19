const board = document.querySelector('.board');
const size = 15;

// 0 = leeg, 1 = zwarte steen, 2 = witte steen
const map = Array.from({ length: size }, () => Array(size).fill(0));

let current = 1; // zwart begint
let gameOver = false;

// Bord maken
for (let i = 0; i < size * size; i++) {
  const cell = document.createElement('div');
  cell.dataset.index = i;
  board.appendChild(cell);
}

// Klik om een steen te plaatsen
board.addEventListener('click', (e) => {
  if (gameOver) return;

  const index = e.target.dataset.index;
  if (index === undefined) return;

  const x = Math.floor(index / size);
  const y = index % size;

  if (map[x][y] !== 0) return; // positie is al bezet

  placeStone(x, y, current);

  if (checkWin(x, y, current)) {
    alert((current === 1 ? "Zwart" : "Wit") + " wint!");
    gameOver = true;
    return;
  }

  current = current === 1 ? 2 : 1; // beurt wisselen
});

// Steen plaatsen
function placeStone(x, y, player) {
  map[x][y] = player;

  const cell = board.children[x * size + y];
  const stone = document.createElement('div');
  stone.classList.add('stone', player === 1 ? 'black' : 'white');
  cell.appendChild(stone);
}

// Winconditie controleren
function checkWin(x, y, player) {
  return (
    count(x, y, 1, 0, player) + count(x, y, -1, 0, player) >= 4 || // horizontaal
    count(x, y, 0, 1, player) + count(x, y, 0, -1, player) >= 4 || // verticaal
    count(x, y, 1, 1, player) + count(x, y, -1, -1, player) >= 4 || // diagonaal ↘
    count(x, y, 1, -1, player) + count(x, y, -1, 1, player) >= 4    // diagonaal ↗
  );
}

// Aantal opeenvolgende stenen tellen
function count(x, y, dx, dy, player) {
  let n = 0;
  let i = x + dx;
  let j = y + dy;

  while (i >= 0 && i < size && j >= 0 && j < size && map[i][j] === player) {
    n++;
    i += dx;
    j += dy;
  }
  return n;
}

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

