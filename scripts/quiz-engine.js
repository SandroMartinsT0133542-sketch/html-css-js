function createQuizEngine(questions) {
  const state = {
    questions,
    index: 0,
    answers: [],
    score: 0,
  };

  function getCurrentQuestion() {
    return state.questions[state.index];
  }

  function submitAnswer(selectedIndex) {
    const current = getCurrentQuestion();
    const isCorrect = selectedIndex === current.correctIndex;

    state.answers.push({
      questionIndex: state.index,
      selectedIndex,
      isCorrect,
    });

    if (isCorrect) {
      state.score += 1;
    }

    state.index += 1;
    return isCorrect;
  }

  function isFinished() {
    return state.index >= state.questions.length;
  }

  function getResult() {
    const total = state.questions.length;
    const percent = Math.round((state.score / total) * 100);
    return {
      score: state.score,
      total,
      percent,
    };
  }

  return {
    state,
    getCurrentQuestion,
    submitAnswer,
    isFinished,
    getResult,
  };
}
