const gateModal = document.getElementById("quiz-gate-modal");
const btnStartQuiz = document.getElementById("btn-start-quiz");
const btnStartQuizBottom = document.getElementById("btn-start-quiz-bottom");
const btnCourseFirst = document.getElementById("btn-course-first");
const btnQuizNow = document.getElementById("btn-quiz-now");
const btnCloseGate = document.getElementById("btn-close-gate");

function openQuizGate() {
  openSecurityModal(gateModal);
}

if (btnStartQuiz) {
  btnStartQuiz.addEventListener("click", openQuizGate);
}

if (btnStartQuizBottom) {
  btnStartQuizBottom.addEventListener("click", openQuizGate);
}

if (btnCourseFirst) {
  btnCourseFirst.addEventListener("click", function () {
    window.location.href = "/pages/course.html";
  });
}

if (btnQuizNow) {
  btnQuizNow.addEventListener("click", function () {
    window.location.href = "/pages/quiz.html";
  });
}

if (btnCloseGate) {
  btnCloseGate.addEventListener("click", function () {
    closeSecurityModal(gateModal);
  });
}

if (gateModal) {
  gateModal.addEventListener("click", function (event) {
    handleDialogBackdropClick(event, gateModal);
  });
}
