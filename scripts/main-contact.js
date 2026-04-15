const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");
const btnSendAnother = document.getElementById("btn-send-another");
const messageInput = document.getElementById("message");
const charCount = document.getElementById("char-count");
const submitBtn = document.querySelector(".btn-submit");

const validationRules = {
  name: {
    validate: (value) => {
      return value.trim().length >= 3;
    },
    message: "O nome deve ter pelo menos 3 caracteres",
  },
  email: {
    validate: (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    },
    message: "Email inválido",
  },
  subject: {
    validate: (value) => value !== "",
    message: "Selecione um assunto",
  },
  message: {
    validate: (value) => {
      return value.trim().length >= 10 && value.length <= 500;
    },
    message: "A mensagem deve ter entre 10 e 500 caracteres",
  },
  consent: {
    validate: (checked) => checked,
    message: "Deve consentir no tratamento dos dados",
  },
};

// Character counter
if (messageInput) {
  messageInput.addEventListener("input", function () {
    charCount.textContent = this.value.length;
  });
}

// Form submission
if (contactForm) {
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.classList.add("loading");
    submitBtn.textContent = "A enviar...";

    // Get form data
    const formData = new FormData(contactForm);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      timestamp: new Date().toISOString(),
    };

    // Simulate API call with delay
    await simulateSending(data);

    // Reset button state
    submitBtn.disabled = false;
    submitBtn.classList.remove("loading");
    submitBtn.textContent = "Enviar Mensagem";

    // Show success message
    showSuccessMessage();

    // Reset form
    contactForm.reset();
    charCount.textContent = "0";
  });
}

// Send another message button
if (btnSendAnother) {
  btnSendAnother.addEventListener("click", function () {
    hideSuccessMessage();
    contactForm.focus();
  });
}

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const consent = document.getElementById("consent").checked;

  let isValid = true;

  // Validate each field
  if (!validationRules.name.validate(name)) {
    showError("name", validationRules.name.message);
    isValid = false;
  }

  if (!validationRules.email.validate(email)) {
    showError("email", validationRules.email.message);
    isValid = false;
  }

  if (!validationRules.subject.validate(subject)) {
    showError("subject", validationRules.subject.message);
    isValid = false;
  }

  if (!validationRules.message.validate(message)) {
    showError("message", validationRules.message.message);
    isValid = false;
  }

  if (!validationRules.consent.validate(consent)) {
    showError("consent", validationRules.consent.message);
    isValid = false;
  }

  return isValid;
}

function showError(fieldName, message) {
  const errorElement = document.getElementById(`${fieldName}-error`);
  const fieldElement = document.getElementById(fieldName);

  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add("show");
  }

  if (fieldElement) {
    const formGroup = fieldElement.closest(".form-group");
    if (formGroup) {
      formGroup.classList.add("error");
    }
  }
}

function clearErrors() {
  const errorMessages = document.querySelectorAll(".error-message");
  const formGroups = document.querySelectorAll(".form-group.error");

  errorMessages.forEach((msg) => {
    msg.classList.remove("show");
    msg.textContent = "";
  });

  formGroups.forEach((group) => {
    group.classList.remove("error");
  });
}

async function simulateSending(data) {
  // Simulate network delay (2-3 seconds)
  const delay = Math.random() * 1000 + 2000;

  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate success response
      console.log("Mensagem enviada:", data);

      // Store in localStorage for demo purposes
      const submissions = JSON.parse(
        localStorage.getItem("contactSubmissions") || "[]",
      );
      submissions.push(data);
      localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

      resolve({
        success: true,
        message: "Mensagem enviada com sucesso!",
      });
    }, delay);
  });
}

function showSuccessMessage() {
  successMessage.classList.remove("hidden");

  // Auto-scroll to success message
  setTimeout(() => {
    successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 100);

  // Hide success message after 8 seconds
  setTimeout(() => {
    hideSuccessMessage();
  }, 8000);
}

function hideSuccessMessage() {
  successMessage.classList.add("hidden");
}
