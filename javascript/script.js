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
    question: `1) What is the National Tree of India.`,
    Answer: 2,
    option: ["Tamarind Tree", "Banyan Tree", "Neem Tree", "Peepal Tree"],
  },
  {
    question: `2) What is the National Fruit of India.`,
    Answer: 4,
    option: ["Pomegranate", "Apple", "Banana", "Mango"],
  },
  {
    question: `3) What is the National Bird of India.`,
    Answer: 1,
    option: ["Peacock", "Kingfisher", "Bald Eagle", "Parrot"],
  },
  {
    question: `4) What is the National Animal of India.`,
    Answer: 3,
    option: ["Deer", " Giraffe", "Bengal Tiger", "Lion"],
  },
  {
    question: `5) What is the National Flower of India.`,
    Answer: 1,
    option: ["Lotus", "Jasmine", "Lily", "Sunflower"],
  },
  {
    question: `6) What is the National Monument of India.`,
    Answer: 3,
    option: ["Charminar", "Red Fort", "India Gate", "Gateway of India"],
  },
  {
    question: `7) What is the National Heritage Animal.`,
    Answer: 4,
    option: ["Sheep", "Cow", "Deer", "Elephant"],
  },
  {
    question: `8) What is the National Aquatic Animal of India.`,
    Answer: 1,
    option: ["Dolphin", "Fish", "Octopus", "Whale"],
  },
  {
    question: `9) What is the National River of India.`,
    Answer: 3,
    option: [
      "The Narmada River",
      "The Krishna River",
      "The Ganga River",
      "The Brahmaputra River",
    ],
  },
  {
    question: `10) What is the National Game of India.`,
    Answer: 1,
    option: ["Hockey", "Cricket", "Football", "Volleyball"],
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
  if (increse < 9) {
    increse += 1;

    changeQuestion();
  } else if (increse >= 10) {
    init();
  } else {
    questionEl.innerText = ``;
    optionContainer.innerHTML = ``;
    optionContainer.innerHTML = `<h1 class="answer">You answered ${score}/10 questions correctly</h1>`;
    btn.innerText = `Reload`;
    increse += 1;
  }
});

//init
init();
