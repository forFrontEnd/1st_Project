const players = {
  player1: "O",
  player2: "X",
};

const Board = {
  nowTurn: "player1",

  init() {
    this.nowTurn = "player1";
    let buttons = "";

    for (let i = 1; i <= 9; ++i) {
      buttons += `<button onclick="Board.handleClickEvent(this)"></button>`;
    }

    document.querySelector("#tictactoe").innerHTML = buttons;
  },

  handleClickEvent(ele) {
    ele.classList.add(`${this.nowTurn}`, "clicked");
    ele.innerText = players[this.nowTurn];

    if (this.isGameOver()) {
      setTimeout(() => {
        alert(`${this.nowTurn} Win! New Game Start!`);
        this.init();
      }, 3000);
    } else {
      this.changeTurn();
    }
  },

  changeTurn() {
    this.nowTurn = this.nowTurn === "player1" ? "player2" : "player1";
  },

  isGameOver() {
    const boardState = Array.from({ length: 9 }, () => 0);

    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < 9; ++i) {
      if (buttons[i].classList.contains("player1")) {
        boardState[i] = 1;
      } else if (buttons[i].classList.contains("player2")) {
        boardState[i] = 2;
      } else continue;
    }

    if (
      this.checkRows(boardState) ||
      this.checkCols(boardState) ||
      this.checkDiagonals(boardState)
    ) {
      const buttons = document.querySelectorAll("button");
      buttons.forEach((button) => {
        button.disabled = true;
      });

      return true;
    } else {
      return false;
    }
  },

  checkRows(boardState) {
    console.log(boardState);
    for (let i = 0; i < 9; i += 3) {
      if (
        boardState[i] !== 0 &&
        boardState[i] === boardState[i + 1] &&
        boardState[i + 1] === boardState[i + 2]
      ) {
        return true;
      }
    }

    return false;
  },

  checkCols(boardState) {
    console.log(boardState);
    for (let i = 0; i < 3; i += 1) {
      if (
        boardState[i] !== 0 &&
        boardState[i] === boardState[i + 3] &&
        boardState[i + 3] === boardState[i + 6]
      ) {
        return true;
      }
    }

    return false;
  },

  checkDiagonals(boardState) {
    console.log(boardState);
    if (
      boardState[0] !== 0 &&
      boardState[0] === boardState[4] &&
      boardState[4] === boardState[8]
    ) {
      return true;
    }

    if (
      boardState[2] !== 0 &&
      boardState[2] === boardState[4] &&
      boardState[4] === boardState[6]
    ) {
      return true;
    }

    return false;
  },
};

window.onload = () => {
  Board.init();
};
