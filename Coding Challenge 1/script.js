"use strict";

const poll = {
  question: "What is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    //console.log(answer);
    let validInput = false;
    while (validInput === false) {
      const answer = prompt(
        "What is your favoirte programming language? Enter 0 for Javascript, enter 1 for Python, 2 for Rust, and 3 for C++"
      );
      if (answer === "") {
        console.log("no input given");
        alert("Please enter valid input integers from 0 - 3");
      } else if (answer >= 0 && answer <= 3) {
        this.answers[answer] += 1;
        validInput = true;
        //console.log(answer);
      } else {
        alert("Please enter valid input integers from 0 - 3");
      }
    }

    //console.log(answer);
    this.displayResults();
  },

  displayResults: function () {
    let validInput = false;
    while (validInput === false) {
      const type = prompt(
        "What type of out would you like 'array' or 'string'?"
      );
      if (type === "array") {
        console.log(this.answers);
        validInput = true;
      } else if (type === "string") {
        console.log(
          "Poll Results are: " +
            this.answers[0] +
            ", " +
            this.answers[1] +
            ", " +
            this.answers[2] +
            ", " +
            this.answers[3]
        );
        validInput = true;
      } else {
        alert("invalid input, try again");
      }
    }
  },
};

const myfunction = () => {
  console.log("hello");
};
const pollButton = document.getElementById("pollBtn");

pollButton.addEventListener("click", poll.registerNewAnswer.bind(poll));
