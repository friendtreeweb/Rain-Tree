// js/matchmaker.js

// Memastikan memberList dan loveFortune tersedia dari global.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("match-form");
  const resultSection = document.getElementById("result-section");
  const resultName = document.getElementById("match-result-name");
  const resultImage = document.getElementById("match-result-image");
  const resultText = document.getElementById("match-result-text");

  const randomScore = () => Math.floor(Math.random() * 101);

  function getLovePhrase(score) {
    const list = loveFortune[currentLang] || loveFortune["id"];
    return list.find(f => score <= f.max)?.text || "";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userName = document.getElementById("your-name").value.trim();
    const selectedIndex = document.getElementById("member-select").value;
    const member = memberList[selectedIndex];

    if (!userName || !member) return;

    const score = randomScore();
    const message = getLovePhrase(score);

    const displayName = member.name?.[currentLang] || member.name?.id;

    resultName.textContent = `${userName} ❤️ ${displayName} (${score}%)`;
    resultImage.src = `images/${member.image}`;
    resultImage.alt = displayName;
    resultImage.title = displayName;
    resultText.setAttribute("data-raw", score);
    resultText.setAttribute("data-text", message);
    resultText.textContent = message;

    resultSection.classList.remove("hidden");
    setLanguage(currentLang);
  });

  // Unduh hasil sebagai gambar
  const downloadButton = document.getElementById("download-match-result");
  downloadButton.addEventListener("click", () => {
    html2canvas(resultSection, {
      backgroundColor: "#ffffff",
      useCORS: true
    }).then(canvas => {
      const link = document.createElement("a");
      link.download = "rain_tree_matchmaker_result.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });

  // Populasi select member
  const memberSelect = document.getElementById("member-select");
  memberList.forEach((member, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = member.name?.[currentLang] || member.name?.id;
    memberSelect.appendChild(option);
  });
});
