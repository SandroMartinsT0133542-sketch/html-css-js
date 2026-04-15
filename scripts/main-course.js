const courseChecks = document.querySelectorAll(".course-check");
const courseProgress = document.getElementById("course-progress");

function updateCourseProgress() {
  if (!courseProgress) {
    return;
  }

  let checked = 0;
  courseChecks.forEach(function (check) {
    if (check.checked) {
      checked += 1;
    }
  });

  courseProgress.textContent = `${checked}/6`;
}

courseChecks.forEach(function (check) {
  check.addEventListener("change", updateCourseProgress);
});

updateCourseProgress();
