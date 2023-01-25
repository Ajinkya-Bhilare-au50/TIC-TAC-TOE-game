const theme1 = document.getElementById("theme1");
theme1.addEventListener("click", () => {
  document.getElementById("myCSS").href = "theme1.css";
});
const theme2 = document.getElementById("theme2");
theme2.addEventListener("click", () => {
  document.getElementById("myCSS").href = "theme2.css";
});
const theme3 = document.getElementById("theme3");
theme3.addEventListener("click", () => {
  document.getElementById("myCSS").href = "theme3.css";
});
const theme4 = document.getElementById("theme4");
theme4.addEventListener("click", () => {
  document.getElementById("myCSS").href = "theme4.css";
});
const theme5 = document.getElementById("theme5");
theme5.addEventListener("click", () => {
  document.getElementById("myCSS").href = "theme5.css";
});
const boxes = Array.from(document.getElementsByClassName("boxes"));
const playText = document.getElementById("playText");
console.log(boxes);
const o_text = "O";
const x_text = "X";
let count = 0;

const spaces = [null, null, null, null, null, null, null, null, null];
currentPlayer = x_text;

const drawboard = () => {
  boxes.forEach((element) => {
    element.addEventListener("click", boxClicked);
  });
};
drawboard();
function boxClicked(e) {
  const id = e.target.id;
  //   console.log("box clicked " + id);
  if (!spaces[id]) {
    count++;
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (hasPlayerWon(currentPlayer)) {
      playText.innerHTML = `${currentPlayer} wins!!`;

      return;
    }
    currentPlayer = currentPlayer === o_text ? x_text : o_text;
    if (spaces.every != null && count == 9) {
      //   console.log("its a tie");
      playText.innerHTML = `Its a TIE`;
    }
  }
}
const hasPlayerWon = (player) => {
  //from top left, check across, down, and diagonal
  if (spaces[0] === player) {
    if (spaces[1] === player && spaces[2] === player) {
      console.log(`${player} wins up top`);
      document.getElementById("0").style.background = "yellow";
      document.getElementById("1").style.background = "yellow";
      document.getElementById("2").style.background = "yellow";
      return true;
    }
    if (spaces[3] === player && spaces[6] === player) {
      console.log(`${player} wins on the left`);
      document.getElementById("0").style.background = "yellow";
      document.getElementById("3").style.background = "yellow";
      document.getElementById("6").style.background = "yellow";
      return true;
    }
    if (spaces[4] === player && spaces[8] === player) {
      console.log(`${player} wins on the diagonal`);
      document.getElementById("0").style.background = "yellow";
      document.getElementById("4").style.background = "yellow";
      document.getElementById("8").style.background = "yellow";
      return true;
    }
  }
  //from bottom check up and across
  if (spaces[8] === player) {
    if (spaces[2] === player && spaces[5] === player) {
      console.log(`${player} wins on the right`);
      document.getElementById("8").style.background = "yellow";
      document.getElementById("2").style.background = "yellow";
      document.getElementById("5").style.background = "yellow";
      return true;
    }
    if (spaces[7] === player && spaces[6] === player) {
      console.log(`${player} wins on the bottom`);
      document.getElementById("8").style.background = "yellow";
      document.getElementById("7").style.background = "yellow";
      document.getElementById("6").style.background = "yellow";
      return true;
    }
  }
  //from middle check middle vertical and middle horizontal
  if (spaces[4] === player) {
    if (spaces[3] === player && spaces[5] === player) {
      console.log(`${player} wins on the middle horizontal`);
      document.getElementById("4").style.background = "yellow";
      document.getElementById("3").style.background = "yellow";
      document.getElementById("5").style.background = "yellow";
      return true;
    }
    if (spaces[1] === player && spaces[7] === player) {
      console.log(`${player} wins on the middle vertical`);
      document.getElementById("4").style.background = "yellow";
      document.getElementById("1").style.background = "yellow";
      document.getElementById("7").style.background = "yellow";
      return true;
    }
  }
  if (spaces[4] === player) {
    if (spaces[2] === player && spaces[6] === player) {
      console.log(`${player} wins on the middle horizontal`);
      document.getElementById("4").style.background = "yellow";
      document.getElementById("2").style.background = "yellow";
      document.getElementById("6").style.background = "yellow";
      return true;
    }
  }
};
const m = document.getElementById("myCSS").href;
const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", () => {
  spaces.forEach((_space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
    // box.style.background = "#ff4659";
    
      box.style.background = "#ff4659";
    
  });
  playText.innerHTML = `let's Play Again`;

  currentPlayer = x_text;
});
