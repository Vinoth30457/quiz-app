"use strict";
const questionEl = document.getElementById("question");
const btn = document.getElementById("submit");
const optionContainer = document.getElementById("option-container");
const option1 = document.getElementById("option-label-1");
const option2 = document.getElementById("option-label-2");
const option3 = document.getElementById("option-label-3");
const option4 = document.getElementById("option-label-4");
const main = document.getElementById("main");

const questions = [
  {
    question: "Which language runs in a web browser?",
    option: ["Java", "C", "Python", "JavaScript"],
    Answer: 4,
  },
  {
    question: "What does CSS stands for?",
    option: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    Answer: 2,
  },
  {
    question: "What does HTML stand for?",
    option: [
      "Hypertext Markup Language",
      "Hypertext Markdown Language",
      "Hyperloop Machine Language",
      "Helicopters Terminals Motorboats Lamborginis",
    ],
    Answer: 1,
  },
  {
    question: "What year was JavaScript launched?",
    option: ["1996", "1995", "1994", "none of the above"],
    Answer: 2,
  },
];

let increse = 0;
let score = 0;

const init = () => {
  increse = 0;
  score = 0;

  changeQuestion();
  btn.innerText = `Submit`;
};
console.log(questions[increse].option[1]);

const changeQuestion = () => {
  questionEl.innerText = `${questions[increse].question}`;
  optionContainer.innerHTML = `
  <div class="option">
        <input type="radio" name="options" id="option-1" onclick="checkAnswer(1)">
        <label for="option-1" id="option-label-1" >${questions[increse].option[0]}</label>
      </div>
      <div class="option">
        <input type="radio" name="options" id="option-2" onclick="checkAnswer(2)">
        <label for="option-2" id="option-label-2" >${questions[increse].option[1]}</label>
      </div>
      <div class="option">
        <input type="radio" name="options" id="option-3" onclick="checkAnswer(3)">
        <label for="option-3" id="option-label-3" >${questions[increse].option[2]}</label>
      </div>
      <div class="option">
        <input type="radio" name="options" id="option-4" >
        <label for="option-4" id="option-label-4" onclick="checkAnswer(4)">${questions[increse].option[3]}</label>
      </div>`;
  console.log(increse);
};
const checkAnswer = (user) => {
  // increse = 0;

  if (user == questions[increse].Answer) {
    score += 1;
  }
};

btn.addEventListener("click", () => {
  if (increse < 3) {
    increse += 1;

    changeQuestion();
  } else if (increse >= 4) {
    init();
  } else {
    questionEl.innerText = ``;
    optionContainer.innerHTML = ``;
    optionContainer.innerHTML = `<h1 class="answer">You answered ${score}/4 questions correctly</h1>`;
    btn.innerText = `Reload`;
    increse += 1;
  }
});

//init
init();
