function createSenbatsuSlot() {
  const slot = document.createElement('div');
  slot.classList.add('formation-slot');
  slot.textContent = 'Slot Kosong';
  return slot;
}

function splitIntoTriangleRows(size) {
  const formations = {
    1: [1],
    2: [2],
    3: [3],
    4: [4],
    5: [5],
    6: [6],
    7: [4, 3],
    8: [5, 3],
    9: [6, 3],
    10: [6, 4],
    11: [6, 5],
    12: [5, 4, 3],
    13: [6, 4, 3],
    14: [6, 5, 3],
    15: [7, 5, 3],
    16: [7, 6, 3],
    17: [8, 6, 3],
  };

  return formations[size] || [Math.ceil(size / 3), Math.floor(size / 3), size - Math.ceil(size / 3) - Math.floor(size / 3)];
}

function generateFormationGrid(size) {
  const container = document.getElementById("senbatsu-slots-container");
  if (!container) return;
  container.innerHTML = "";

  const rows = splitIntoTriangleRows(size);
  rows.forEach((count) => {
    const row = document.createElement("div");
    row.classList.add("formation-row");
    for (let i = 0; i < count; i++) {
      row.appendChild(createSenbatsuSlot());
    }
    container.appendChild(row);
  });

  // Tampilkan formasi jika sebelumnya tersembunyi
  document.getElementById("senbatsu-formation").classList.remove("hidden");
}

function resetFormation() {
  const select = document.getElementById("senbatsu-size-select");
  const size = parseInt(select.value, 10);
  generateFormationGrid(size);
}

function downloadFormationAsImage() {
  const area = document.getElementById("senbatsu-formation");
  if (!area) return;
  html2canvas(area).then((canvas) => {
    const link = document.createElement("a");
    link.download = "formasi-senbatsu.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}

function applyTranslations(lang) {
  const translations = {
    id: {
      pageTitle: "Rain Tree Idola",
      senbatsuTitle: "Formasi Senbatsu Rain Tree",
      selectSenbatsuMembers: "Pilih Jumlah Anggota Senbatsu:",
      senbatsuResultTitle: "Formasi Senbatsu",
      downloadResults: "Unduh Formasi (Gambar)",
      resetButton: "Reset Formasi",
    },
    en: {
      pageTitle: "Rain Tree Idols",
      senbatsuTitle: "Rain Tree Senbatsu Formation",
      selectSenbatsuMembers: "Select Number of Senbatsu Members:",
      senbatsuResultTitle: "Senbatsu Formation",
      downloadResults: "Download Formation (Image)",
      resetButton: "Reset Formation",
    },
    jp: {
      pageTitle: "レインツリーアイドル",
      senbatsuTitle: "レインツリー選抜フォーメーション",
      selectSenbatsuMembers: "選抜メンバーの人数を選択：",
      senbatsuResultTitle: "選抜フォーメーション",
      downloadResults: "フォーメーションを画像で保存",
      resetButton: "フォーメーションをリセット",
    }
  };

  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Set button state
  document.querySelectorAll(".lang-button").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("senbatsu-size-select");
  const reset = document.getElementById("reset-formation");
  const download = document.getElementById("download-senbatsu");

  if (select) {
    for (let i = 1; i <= 17; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = `${i} anggota`;
      select.appendChild(option);
    }
    select.value = "7";

    generateFormationGrid(7);

    select.addEventListener("change", () => {
      generateFormationGrid(parseInt(select.value, 10));
    });
  }

  if (reset) {
    reset.addEventListener("click", resetFormation);
  }

  if (download) {
    download.addEventListener("click", downloadFormationAsImage);
  }

  // Bahasa
  document.querySelectorAll(".lang-button").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      applyTranslations(lang);
    });
  });

  // Inisialisasi bahasa default
  applyTranslations("id");
});
