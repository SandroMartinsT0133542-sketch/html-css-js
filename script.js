// obtain form elements and message container from the DOM
const form = document.getElementById("form-greeting");
const divMessage = document.getElementById("message");
const inputName = document.getElementById("name");
const selectPeriod = document.getElementById("period");

// reset aria-invalid attributes and allow for new validation
function clearErrorStates() {
  inputName.removeAttribute("aria-invalid");
  selectPeriod.removeAttribute("aria-invalid");
}

// add event listener to grab form submission on button click or enter key
form.addEventListener("submit", function (event) {
  // prevent default form submission behavior (page reload)
  event.preventDefault();
  // clear previous error states
  clearErrorStates();

  // get values from form fields
  const name = inputName.value.trim();
  const period = selectPeriod.value;
  const age = parseInt(document.getElementById("age").value, 10);

  // validate inputs and show error messages if needed when there are empty or invalid
  if (!name) {
    inputName.setAttribute("aria-invalid", "true");
    showMessage("Por favor, introduz o teu nome.", "error");
    inputName.focus();
    return;
  }

  if (!period) {
    selectPeriod.setAttribute("aria-invalid", "true");
    showMessage("Por favor, seleciona o período do dia.", "error");
    selectPeriod.focus();
    return;
  }

  // switch case to determine greeting based on selected period of the day
  let greeting;
  switch (period) {
    case "manha":
      greeting = "Bom dia";
      break;
    case "tarde":
      greeting = "Boa tarde";
      break;
    case "noite":
      greeting = "Boa noite";
      break;
    default:
      greeting = "Olá";
  }

  // determine age category based on input age
  let ageCategory = "";
  if (!isNaN(age) && age > 0) {
    if (age < 13) {
      ageCategory = "És uma criança.";
    } else if (age < 18) {
      ageCategory = "És um adolescente.";
    } else if (age < 65) {
      ageCategory = "És um adulto.";
    } else {
      ageCategory = "És um sénior.";
    }
  }

  const finalMessage = `${greeting}, ${name}! Bem-vindo(a) à página. ${ageCategory}`;
  showMessage(finalMessage, "success");
});

// function to display messages in the message container with appropriate styling based on message type (error or success)
function showMessage(text, type) {
  divMessage.textContent = text;
  divMessage.className = `message ${type}`;
  divMessage.focus();
}
