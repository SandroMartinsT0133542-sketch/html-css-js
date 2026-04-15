const courseChecks = document.querySelectorAll(".course-check");
const courseProgress = document.getElementById("course-progress");
const completeModal = document.getElementById("course-complete-modal");
const btnGoQuiz = document.getElementById("btn-course-go-quiz");
const btnGoTester = document.getElementById("btn-course-go-tester");
const btnCloseModal = document.getElementById("btn-course-modal-close");

let hasShownCompletionModal = false;

function openCompleteModal() {
  if (!completeModal) {
    return;
  }

  if (typeof openSecurityModal === "function") {
    openSecurityModal(completeModal);
    return;
  }

  if (typeof completeModal.showModal === "function") {
    completeModal.showModal();
  }
}

function closeCompleteModal() {
  if (!completeModal) {
    return;
  }

  if (typeof closeSecurityModal === "function") {
    closeSecurityModal(completeModal);
    return;
  }

  if (typeof completeModal.close === "function") {
    completeModal.close();
  }
}

function updateCourseProgress() {
  if (!courseProgress) {
    return;
  }

  let checked = 0;
  courseChecks.forEach(function (check) {
    if (check.classList.contains("is-done")) {
      checked += 1;
    }
  });

  const total = courseChecks.length;
  courseProgress.textContent = `${checked}/${total}`;

  if (checked === total && total > 0 && !hasShownCompletionModal) {
    hasShownCompletionModal = true;
    openCompleteModal();
  }
}

courseChecks.forEach(function (check) {
  check.addEventListener("click", function () {
    const isDone = check.classList.toggle("is-done");
    check.setAttribute("aria-pressed", String(isDone));
    updateCourseProgress();
  });
});

if (btnGoQuiz) {
  btnGoQuiz.addEventListener("click", function () {
    window.location.href = "../pages/quiz.html";
  });
}

if (btnGoTester) {
  btnGoTester.addEventListener("click", function () {
    window.location.href = "../pages/tester.html";
  });
}

if (btnCloseModal) {
  btnCloseModal.addEventListener("click", closeCompleteModal);
}

if (completeModal) {
  completeModal.addEventListener("click", function (event) {
    if (typeof handleDialogBackdropClick === "function") {
      handleDialogBackdropClick(event, completeModal);
      return;
    }

    if (event.target === completeModal) {
      closeCompleteModal();
    }
  });
}

updateCourseProgress();
