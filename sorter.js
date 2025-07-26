 // js/sorter.js

document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.getElementById("category-select");
  const startButton = document.getElementById("start-sorter");
  const sortArea = document.getElementById("sort-area");
  const resultSection = document.getElementById("result-section");
  const resultList = document.getElementById("result-list");
  const progressBar = document.getElementById("progress-bar");
  const leftImg = document.getElementById("left-img");
  const rightImg = document.getElementById("right-img");
  const leftName = document.getElementById("left-name");
  const rightName = document.getElementById("right-name");
  const drawButton = document.getElementById("draw-button");
  const restartButton = document.getElementById("restart-button");

  let candidates = [];
  let finalResults = [];
  let round = 0;
  let left, right;

  startButton.addEventListener("click", () => {
    const category = categorySelect.value;
    if (!category) return;
    initSorter();
  });

  function initSorter() {
    candidates = shuffle([...memberList]);
    finalResults = [];
    round = 0;
    resultSection.classList.add("hidden");
    sortArea.classList.remove("hidden");
    nextBattle();
  }

  function nextBattle() {
    if (candidates.length <= 1) {
      finalResults.push(...candidates);
      showResults();
      return;
    }
    left = candidates.shift();
    right = candidates.shift();
    updateBattleUI();
  }

  function updateBattleUI() {
    leftImg.src = `images/${left.image}`;
    rightImg.src = `images/${right.image}`;
    leftImg.alt = left.name?.[currentLang] || left.name?.id;
    rightImg.alt = right.name?.[currentLang] || right.name?.id;
    leftName.textContent = left.name?.[currentLang] || left.name?.id;
    rightName.textContent = right.name?.[currentLang] || right.name?.id;

    const total = memberList.length;
    const done = finalResults.length;
    progressBar.style.width = `${(done / total) * 100}%`;
  }

  function selectWinner(winner, loser) {
    candidates.push(winner);
    finalResults.push(loser);
    nextBattle();
  }

  leftImg.addEventListener("click", () => selectWinner(left, right));
  rightImg.addEventListener("click", () => selectWinner(right, left));
  drawButton.addEventListener("click", () => {
    candidates.push(left, right);
    nextBattle();
  });

  function showResults() {
    sortArea.classList.add("hidden");
    resultSection.classList.remove("hidden");
    resultList.innerHTML = "";
    finalResults.reverse().forEach((member, index) => {
      const li = document.createElement("li");
      const name = member.name?.[currentLang] || member.name?.id;
      li.textContent = `${index + 1}. ${name}`;
      resultList.appendChild(li);
    });
  }

  restartButton.addEventListener("click", () => {
    initSorter();
  });

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
});
