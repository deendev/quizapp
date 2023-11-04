const data = [
  {
    id: 1,
    question: "Who created this project?",
    answers: [
      { answer: "Barake Obama", isCorrect: false },
      { answer: "Bernise Kengmo", isCorrect: false },
      { answer: "Ibrahim Tajudeen Umoru ", isCorrect: true },
      { answer: "Joe Biden", isCorrect: false }
    ],
  },

  {
    id: 2,
    question: "What is my major?",
    answers: [
      { answer: "Computer Science.", isCorrect: true },
      { answer: "Micro Biology", iscorrect: false },
      { answer: "Economices", iscorrect: false },
      { answer: "Engineering", iscorrect: false }
    ],
  },

  {
    id: 3,
    question: "What is my favorite color?",
    answers: [
      { answer: "Blue", iscorrect: false },
      { answer: "Green", iscorrect: true },
      { answer: "Red", iscorrect: false },
      { answer: "Yellow", iscorrect: false }
    ],
  },

  {
    id: 4,
    question: "What is my favorite food?",
    answers: [
      { answer: "Pizza", iscorrect: false },
      { answer: "Burger", iscorrect: true },
      { answer: "Fries", iscorrect: false },
      { answer: "Ice Cream", iscorrect: false }
    ],
  },
  {
    id: 5,
    question: "What is my favorite sport?",
    answers: [
      { answer: "Basketball", iscorrect: false },
      { answer: "Football", iscorrect: true },
      { answer: "Golf", iscorrect: false },
      { answer: "Hockey", iscorrect: false }
    ],
  },
]

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".playbtn");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;

const playagin = () => {
   qIndex = 0;
   correctCount = 0;
   wrongCount = 0;
   total = 0;
   selectedAnswer;
  showQuestion(qIndex);
}
play.addEventListener("click", () => {
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
  playagin()
}) 

const showResult = () => {
  resultScreen.style.display = "block"
  gameScreen.style.display = "none"
  resultScreen.querySelector(".correct").textContent = `Correct Answers: ${correctCount}`;

  resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wrongCount}`;

  resultScreen.querySelector(".score").textContent = ` Score: ${(correctCount - wrongCount) * 10}`;
};



const showQuestion = (qNumber) => {
  if(qIndex === data.length) return showResult();
  selectedAnswer= null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers.map((item, index) => 
   `
   <div class="answer">
    <input type="radio" name="answer" id=${index} value=${item.isCorrect} />
    <label for="1">${item.answer}</label>
    </div>
   `
  )
  .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach(el=> {
    el.addEventListener("click", (e)=> {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = ()=> {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    }else alert("Please select an answer");
  });
};

showQuestion(qIndex);
submitAnswer();
