const contactBtn = document.getElementById("btn-contact");
const contactModal = document.getElementById("contact-modal");
const contactForm = document.getElementById("contact-form");
const messageInput = document.getElementById("contact-message");
const charCount = document.getElementById("contact-char-count");
const successMessage = document.getElementById("contact-success");
const closeBtn = contactModal?.querySelector(".close-modal");
const cancelBtn = contactForm?.querySelector(".btn-cancel");

if (messageInput) {
  messageInput.addEventListener("input", function () {
    charCount.textContent = this.value.length;
  });
}

if (contactBtn) {
  contactBtn.addEventListener("click", function (e) {
    e.preventDefault();
    openSecurityModal(contactModal);
    resetContactForm();
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", function () {
    closeSecurityModal(contactModal);
  });
}

if (cancelBtn) {
  cancelBtn.addEventListener("click", function () {
    closeSecurityModal(contactModal);
  });
}

if (contactModal) {
  contactModal.addEventListener("click", function (event) {
    handleDialogBackdropClick(event, contactModal);
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!validateContactForm()) {
      return;
    }

    const submitBtn = this.querySelector(".btn-submit");
    submitBtn.disabled = true;
    submitBtn.textContent = "A enviar...";

    const formData = new FormData(contactForm);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      timestamp: new Date().toISOString(),
    };

    await simulateSending(data);

    // Hide form and show success message
    contactForm.style.display = "none";
    showContactSuccess();

    // Reset after success message
    setTimeout(() => {
      closeSecurityModal(contactModal);
      resetContactForm();
      submitBtn.disabled = false;
      submitBtn.textContent = "Enviar";
    }, 3000);
  });
}

function validateContactForm() {
  const name = document.getElementById("contact-name");
  const email = document.getElementById("contact-email");
  const subject = document.getElementById("contact-subject");
  const message = document.getElementById("contact-message");

  clearContactErrors();
  let isValid = true;

  if (!name.value.trim() || name.value.trim().length < 3) {
    showContactError(name, "Nome deve ter pelo menos 3 caracteres");
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    showContactError(email, "Email inválido");
    isValid = false;
  }

  if (!subject.value) {
    showContactError(subject, "Selecione um assunto");
    isValid = false;
  }

  if (
    !message.value.trim() ||
    message.value.length < 10 ||
    message.value.length > 500
  ) {
    showContactError(message, "Mensagem deve ter entre 10 e 500 caracteres");
    isValid = false;
  }

  return isValid;
}

function showContactError(field, message) {
  const errorSpan = field.parentElement.querySelector(".error-message");
  if (errorSpan) {
    errorSpan.textContent = message;
    errorSpan.style.display = "block";
    field.style.borderColor = "#e74c3c";
  }
}

function clearContactErrors() {
  const inputs = contactForm.querySelectorAll("input, select, textarea");
  const errors = contactForm.querySelectorAll(".error-message");

  inputs.forEach((input) => {
    input.style.borderColor = "";
  });

  errors.forEach((error) => {
    error.textContent = "";
    error.style.display = "none";
  });
}

function resetContactForm() {
  contactForm.style.display = "block";
  successMessage.classList.add("hidden");
  contactForm.reset();
  charCount.textContent = "0";
  clearContactErrors();
}

async function simulateSending(data) {
  const delay = Math.random() * 1000 + 1500;

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Contacto enviado:", data);

      // Store in localStorage
      const submissions = JSON.parse(
        localStorage.getItem("contactSubmissions") || "[]",
      );
      submissions.push(data);
      localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

      resolve({ success: true });
    }, delay);
  });
}

function showContactSuccess() {
  successMessage.classList.remove("hidden");
}
