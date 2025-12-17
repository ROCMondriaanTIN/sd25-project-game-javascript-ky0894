const board = document.querySelector('.board');
const size = 15;

for (let i = 0; i < size * size; i++) {
  const cell = document.createElement('div');
  board.appendChild(cell);
}