 // js/sorter.js

// Menggunakan global.js yang sudah dimuat lebih dulu

const categoryMap = {
  general: memberList,
  visual: memberList.slice(0, 10), // bisa dipilah jika ada penilaian khusus
  talent: [...memberList],
  comedian: [...memberList]
};

let currentCategory = "general";
let queue = [];
let results = [];
let totalBattles = 0;
let currentPair = [];

const sectionSorter = document.getElementById("sorter-section");
const sectionResult = document.getElementById("results-section");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const resultList = document.getElementById("results-list");

function shuffleArray(arr) {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function prepareSorter(category) {
  currentCategory = category;
  const list = shuffleArray(categoryMap[category]);
  queue = [...list];
  results = [];
  totalBattles = list.length - 1;
  sectionSorter.classList.remove("hidden");
  sectionResult.classList.add("hidden");
  nextBattle();
}

function nextBattle() {
  if (queue.length <= 1) {
    results = [...queue];
    showResults();
    return;
  }
  currentPair = [queue.shift(), queue.shift()];
  updateUI();
}

function updateUI() {
  const [a, b] = currentPair;

  const idol1 = document.getElementById("idol-1");
  const idol2 = document.getElementById("idol-2");

  idol1.querySelector("img").src = `images/${a.image}`;
  idol1.querySelector("img").alt = a.name;
  idol1.querySelector("img").title = a.name;
  idol1.querySelector(".idol-name").textContent = a.name;

  idol2.querySelector("img").src = `images/${b.image}`;
  idol2.querySelector("img").alt = b.name;
  idol2.querySelector("img").title = b.name;
  idol2.querySelector(".idol-name").textContent = b.name;

  const progress = 1 - queue.length / totalBattles;
  progressBar.style.width = `${progress * 100}%`;
  progressText.textContent = `${Math.round(progress * 100)}%`;

  idol1.onclick = () => chooseWinner(a, b);
  idol2.onclick = () => chooseWinner(b, a);
}

function chooseWinner(winner, loser) {
  queue.push(winner);
  nextBattle();
}

function showResults() {
  sectionSorter.classList.add("hidden");
  sectionResult.classList.remove("hidden");
  resultList.innerHTML = "";

  results.slice(0, 10).forEach((idol, index) => {
    const div = document.createElement("div");
    div.className = "result-item";
    div.innerHTML = `
      <span class="rank">#${index + 1}</span>
      <img src="images/${idol.image}" alt="${idol.name}">
      <span class="name">${idol.name}</span>
    `;
    resultList.appendChild(div);
  });
}

function downloadResults() {
  html2canvas(document.querySelector("#results-section"), {
    height: document.querySelector("#results-list").offsetHeight + 100,
    useCORS: true,
    backgroundColor: "#ffffff"
  }).then((canvas) => {
    const link = document.createElement("a");
    link.download = `rain_tree_sorter_${currentCategory}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}

// ===============================
// EVENT SETUP
// ===============================

document.querySelectorAll(".category-buttons button").forEach((btn) => {
  btn.addEventListener("click", () => {
    prepareSorter(btn.dataset.category);
  });
});

document.getElementById("draw-button").addEventListener("click", () => {
  // jika draw, acak penempatan ulang
  queue.push(...currentPair);
  nextBattle();
});

document.getElementById("download-results").addEventListener("click", downloadResults);

document.getElementById("restart-sorter").addEventListener("click", () => {
  document.getElementById("sorter-section").classList.add("hidden");
  document.getElementById("results-section").classList.add("hidden");
  document.getElementById("category-selection").classList.remove("hidden");
});
