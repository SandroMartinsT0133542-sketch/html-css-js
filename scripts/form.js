// obtain form elements and message container from the DOM
const form = document.getElementById("form");
const divMessage = document.getElementById("message");
const inputName = document.getElementById("name");
const selectSeason = document.getElementById("season");
const inputAge = document.getElementById("age");
const btnClear = document.getElementById("btn-clear");
const btnStyle = document.getElementById("btn-style");
const title = document.getElementById("main-title");

// reset aria-invalid attributes and allow for new validation
function clearErrorStates() {
  inputName.removeAttribute("aria-invalid");
  selectSeason.removeAttribute("aria-invalid");
}

// add event listener to grab form submission on button click or enter key
form.addEventListener("submit", function (event) {
  // prevent default form submission behavior (page reload)
  event.preventDefault();
  // clear previous error states
  clearErrorStates();

  // get values from form fields
  const name = inputName.value.trim();
  const season = selectSeason.value;
  const ageValue = inputAge.value.trim();
  const age = parseInt(ageValue, 10);

  // validate inputs and show error messages if needed when there are empty or invalid
  if (!name) {
    inputName.setAttribute("aria-invalid", "true");
    showMessage("Por favor, introduz o teu nome.", "error");
    inputName.focus();
    return;
  }

  if (!season) {
    selectSeason.setAttribute("aria-invalid", "true");
    showMessage("Por favor, seleciona a estação do ano.", "error");
    selectSeason.focus();
    return;
  }

  // switch case to determine specific message based on the selected season
  let seasonLabel;
  let seasonMessage;
  switch (season) {
    case "verao":
      seasonLabel = "Verão";
      seasonMessage = "Gostas de calor e praia.";
      break;
    case "inverno":
      seasonLabel = "Inverno";
      seasonMessage = "Preferes frio e conforto.";
      break;
    case "primavera":
      seasonLabel = "Primavera";
      seasonMessage = "Gostas de natureza.";
      break;
    case "outono":
      seasonLabel = "Outono";
      seasonMessage = "Preferes tempo mais fresco.";
      break;
    default:
      seasonLabel = "Não definida";
      seasonMessage = "";
  }

  let ageLabel = "Não indicada";
  if (ageValue && !isNaN(age) && age > 0) {
    ageLabel = `${age}`;
  }

  const finalMessage = `Nome: ${name}. Idade: ${ageLabel}. Estação favorita: ${seasonLabel}. ${seasonMessage}`;
  showMessage(finalMessage, "success");
});

btnClear.addEventListener("click", function () {
  form.reset();
  clearErrorStates();
  divMessage.textContent = "";
  divMessage.className = "message hidden";
  divMessage.style.backgroundColor = "";
  divMessage.style.color = "";
  divMessage.style.borderColor = "";
  divMessage.style.fontSize = "";
});

btnStyle.addEventListener("click", function () {
  const resultBackgrounds = [
    "#ffe8d6",
    "#d8f3dc",
    "#e9ecef",
    "#fff1c1",
    "#dbe7ff",
  ];

  const getRandomColor = (elem) =>
    elem[Math.floor(Math.random() * elem.length)];

  const titleColors = ["#0b4f6c", "#6f1d1b", "#2d6a4f", "#5f0f40", "#264653"];
  const textSizes = ["0.95rem", "1rem", "1.1rem", "1.2rem"];

  const randomBackground = getRandomColor(resultBackgrounds);
  const randomTitleColor = getRandomColor(titleColors);
  const randomTextSize = getRandomColor(textSizes);

  divMessage.style.backgroundColor = randomBackground;
  divMessage.style.fontSize = randomTextSize;
  title.style.color = randomTitleColor;

  if (divMessage.classList.contains("hidden")) {
    showMessage(
      "Estilo alterado. Preenche o formulário para veres os dados.",
      "warning",
    );
  }
});

// function to display messages in the message container with appropriate styling based on message type (error or success)
function showMessage(text, type) {
  divMessage.textContent = text;
  divMessage.className = `message ${type}`;
  divMessage.focus();
}
