function checkQuiz() {
  const answers = {
    q1: "b",
    q2: "a",
    q3: "c",
    q4: "b",
    q5: "a",
    q6: "c",
    q7: "b",
    q8: "a",
    q9: "c",
    q10: "b"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let name in answers) {
    const checked = document.querySelector(`input[name="${name}"]:checked`);
    if (checked && checked.value === answers[name]) {
      score++;
    }
  }

  const result = document.querySelector("#quiz-result");
  result.textContent = `Результат: ${score} из ${total}.`;
}
