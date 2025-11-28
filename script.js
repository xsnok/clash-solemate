let currentQ = 0;

let scores = {
  hutao: 0,
  zhongli: 0,
  xiao: 0,
  childe: 0,
  raiden: 0,
  miko: 0,
  kazuha: 0,
  nahida: 0,
};

document.getElementById("startBtn").onclick = () => {
  showScreen("quiz");
  loadQuestion();
};

document.getElementById("retryBtn").onclick = () => {
  window.location.reload();
};

function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function loadQuestion() {
  if (currentQ >= questions.length) {
    finishQuiz();
    return;
  }

  const q = questions[currentQ];
  document.getElementById("questionText").textContent = q.q;

  const ansDiv = document.getElementById("answers");
  ansDiv.innerHTML = "";

  q.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;

    btn.onclick = () => {
      answer.add.forEach((char) => (scores[char] += 2));
      currentQ++;
      loadQuestion();
    };

    ansDiv.appendChild(btn);
  });
}

function finishQuiz() {
  let best = "hutao";
  for (let c in scores) {
    if (scores[c] > scores[best]) best = c;
  }

  const maxPossible = questions.length * 2;
  const score = Math.floor(70 + (scores[best] / maxPossible) * 30);

  showResult(best, score);
}

function showResult(id, score) {
  const char = characters[id];

  document.getElementById("resultImg").src = char.img;
  document.getElementById("resultName").textContent = char.name;
  document.getElementById("resultDesc").textContent = char.description;
  document.getElementById(
    "resultScore"
  ).textContent = `Compatibility: ${score}%`;

  showScreen("result");
}
