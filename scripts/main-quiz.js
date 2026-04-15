const quizPosition = document.getElementById("quiz-position");
const quizScore = document.getElementById("quiz-score");
const quizProgressFill = document.getElementById("quiz-progress-fill");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const btnNextQuestion = document.getElementById("btn-next-question");
const resultPanel = document.getElementById("quiz-result-panel");
const quizPanel = document.getElementById("quiz-panel");
const finalScore = document.getElementById("final-score");
const finalPercent = document.getElementById("final-percent");
const finalFeedback = document.getElementById("final-feedback");
const btnRestartQuiz = document.getElementById("btn-restart-quiz");

const engine = createQuizEngine(getRandomQuizQuestions(10));
let selectedOption = null;

function getFeedback(percent) {
  if (percent >= 80) {
    return "Excelente! Tens uma base muito forte de ciberseguranca.";
  }
  if (percent >= 50) {
    return "Bom resultado. Rever o crash course pode aumentar a tua seguranca.";
  }
  return "Precisas de reforcar os conceitos. Faz o crash course e tenta novamente.";
}

function renderQuestion() {
  const current = engine.getCurrentQuestion();
  selectedOption = null;
  btnNextQuestion.disabled = true;

  quizPosition.textContent = `${engine.state.index + 1}`;
  quizScore.textContent = `${engine.state.score}`;
  quizProgressFill.style.width = `${(engine.state.index / 10) * 100}%`;
  questionText.textContent = current.question;
  optionsContainer.innerHTML = "";

  current.options.forEach(function (option, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.classList.add("option-btn");
    button.textContent = option;

    button.addEventListener("click", function () {
      selectedOption = index;
      btnNextQuestion.disabled = false;

      optionsContainer.querySelectorAll(".option-btn").forEach(function (item) {
        item.classList.remove("selected");
      });

      button.classList.add("selected");
    });

    optionsContainer.appendChild(button);
  });
}

function showResult() {
  const result = engine.getResult();
  quizPanel.classList.add("hidden");
  resultPanel.classList.remove("hidden");

  finalScore.textContent = `${result.score}/${result.total}`;
  finalPercent.textContent = `${result.percent}%`;
  finalFeedback.textContent = getFeedback(result.percent);
}

if (btnNextQuestion) {
  btnNextQuestion.addEventListener("click", function () {
    if (selectedOption === null) {
      return;
    }

    engine.submitAnswer(selectedOption);

    if (engine.isFinished()) {
      showResult();
      return;
    }

    renderQuestion();
  });
}

if (btnRestartQuiz) {
  btnRestartQuiz.addEventListener("click", function () {
    window.location.reload();
  });
}

if (questionText) {
  renderQuestion();
}
