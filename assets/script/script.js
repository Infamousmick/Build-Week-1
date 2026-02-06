const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

window.addEventListener("load", function () {
  // Bottone di prova per il timer
  let prova = document.querySelector("#contoRovescia");
  // prova.addEventListener("click", () => startTimer());
  // Fine bottone di prova

  let timerElement = document.querySelector(".timer");
});

const TIMELIMIT = 30;
let timePassed = 0;
let timeLeft = TIMELIMIT;
let currentObject = {};
let risposte = [];
randomQuestion();

function randomQuestion() {
  let randomIndex = 0;
  let titleContainer = document.querySelector(".mainText");
  randomIndex = Math.floor(Math.random() * questions.length);
  currentObject = questions[randomIndex];
  questions.splice(randomIndex, 1);
  risposte.push(questions[randomIndex].correct_answer);
  risposte.push(...questions[randomIndex].incorrect_answers);
  console.log(risposte);
  let questionTitle = currentObject.question;
  titleContainer.innerHTML = `<h1>${questionTitle}</h1>`;
  randomAnswers();
  injectAnswers();
  startTimer();
}
function randomAnswers() {
  let copy = [...risposte];
}

function injectAnswers() {
  let formContainer = document.querySelector(".answerContainer");
  let firstRow = document.querySelector("#row1");
  firstRow.innerHTML = "";
  let secondRow = document.querySelector("#row2");
  secondRow.innerHTML = "";

  risposte.forEach((answer, index) => {
    let radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.id = `radio${index + 1}`;
    radio.value = answer;

    let label = document.createElement("label");
    label.for = `radio${index + 1}`;
    label.textContent = answer;
    if (index <= 1) {
      firstRow.appendChild(radio);
      firstRow.appendChild(label);
    } else {
      secondRow.appendChild(radio);
      secondRow.appendChild(label);
    }
  });
}
// Funzione per fare il conto alla rovescia
function startTimer() {
  let secondiElement = this.document.querySelector(".secondi");
  const circleElement = document.querySelector(".timer");

  // Provo a iniettare il tempo rimanente
  let container = document.querySelector("body");
  let elemento = document.createElement("p");
  secondiElement.textContent = timeLeft;

  const timerId = setInterval(() => {
    console.log(timeLeft);
    timePassed++;
    timeLeft = TIMELIMIT - timePassed;
    updateCircle(circleElement);
    if (timePassed == 30) {
      clearInterval(timerId);
      console.log("Timer scaduto!");
    }
    secondiElement.textContent = timeLeft;
  }, 1000);
  container.appendChild(elemento);
}

function updateCircle(element) {
  const percentage = (timePassed / TIMELIMIT) * 100;

  element.style.background = `
    radial-gradient(closest-side, #1e0b36 79%, transparent 80% 100%),
    conic-gradient(#5b5b5b  ${percentage}%, #00ffff 0)
  `;
}
