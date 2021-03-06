// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "correct numberπ";

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //   when there is no number
  if (!guess) {
    document.querySelector(".message").textContent = "π« No number";
  }
  // when the number is correct
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "π Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  // when the number is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "π Too high" : "π Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "π₯ You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// // when the number is too high
// else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = " Too high";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "π₯ You lost the game";
//     document.querySelector(".score").textContent = 0;
//   }
// }

// //  when the number is too low
// else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = " Too low";
//     score--;
//     document.querySelector(".score").textContent = score;
//   } else {
//     document.querySelector(".message").textContent = "π₯ You lost the game";
//     document.querySelector(".score").textContent = 0;
//   }
// }

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "start guessing..";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
