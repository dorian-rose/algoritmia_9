//select
const table = document.querySelector("table");
const submit = document.querySelector("#submit");
const userChoose = document.querySelector("#user-choose");
const results = [];
//const result = {};
submit.addEventListener("click", (ev) => {
  ev.preventDefault(), rockPaperScissors();
});

const rockPaperScissors = () => {
  const arrayChoose = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * arrayChoose.length);
  const compChosenOption = arrayChoose[randomNumber];
  const userChosenOption = userChoose.value;
  const result = {};
  table.innerHTML = "";
  if (userChosenOption == compChosenOption) {
    result.comp = compChosenOption;
    result.user = userChosenOption;
    result.winner = "draw";
    // alert(
    //   `You chose ${userChosenOption} and the computer chose ${compChosenOption}, so it was a draw`
    // );
  } else {
    if (userChosenOption == "rock" && compChosenOption == "scissors") {
      result.comp = compChosenOption;
      result.user = userChosenOption;
      result.winner = "user";
      // alert(
      //   `You chose ${userChosenOption} and the computer chose ${compChosenOption}, so you won`
      // );
    } else {
      if (userChosenOption == "paper" && compChosenOption == "rock") {
        result.comp = compChosenOption;
        result.user = userChosenOption;
        result.winner = "user";
        // alert(
        //   `You chose ${userChosenOption} and the computer chose ${compChosenOption}, so you won`
        // );
      } else {
        if (userChosenOption == "scissors" && compChosenOption == "paper") {
          result.comp = compChosenOption;
          result.user = userChosenOption;
          result.winner = "user";
          // alert(
          //   `You chose ${userChosenOption} and the computer chose ${compChosenOption}, so you won`
          // );
        } else {
          result.comp = compChosenOption;
          result.user = userChosenOption;
          result.winner = "computer";
          // alert(
          //   `You chose ${userChosenOption} and the computer chose ${compChosenOption}, so the computer won`
          // );
        }
      }
    }
  }
  results.push(result);
  printResults(result);
};

const printResults = () => {
  results.forEach((result) => {
    console.log(result);
    let row = document.createElement("TR");
    let data1 = document.createElement("TD");
    data1.textContent = result.comp;
    let data2 = document.createElement("TD");
    data2.textContent = result.user;
    let data3 = document.createElement("TD");
    data3.textContent = result.winner;
    row.append(data1, data2, data3);
    table.append(row);
  });
};
