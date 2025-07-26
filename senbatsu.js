document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("senbatsu-size-select");
  const container = document.getElementById("senbatsu-slots-container");
  const formationSection = document.getElementById("senbatsu-formation");

  // Populate dropdown
  for (let i = 1; i <= 17; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = `${i} anggota`;
    select.appendChild(opt);
  }

  // Split logic
  function splitIntoRows(n) {
    const map = {
      1: [1], 2: [2], 3: [2,1], 4: [2,2], 5: [3,2], 6: [3,3],
      7: [4,3], 8: [5,3], 9: [6,3], 10: [6,4], 11: [6,5],
      12: [5,4,3], 13: [6,4,3], 14: [6,5,3], 15: [7,5,3],
      16: [7,6,3], 17: [8,6,3]
    };
    return map[n] || [n];
  }

  // Generate formation
  function generateFormation(size) {
    container.innerHTML = '';
    const rows = splitIntoRows(size);
    rows.forEach(count => {
      const row = document.createElement('div');
      row.classList.add('formation-row');
      for (let i = 0; i < count; i++) {
        const slot = document.createElement('div');
        slot.classList.add('formation-slot');
        slot.textContent = "Slot Kosong";
        row.appendChild(slot);
      }
      container.appendChild(row);
    });
    formationSection.classList.remove('hidden');
  }

  select.addEventListener("change", () => {
    generateFormation(Number(select.value));
  });

  // Reset button
  document.getElementById("reset-formation").addEventListener("click", () => {
    generateFormation(Number(select.value));
  });

  // Download
  document.getElementById("download-senbatsu").addEventListener("click", () => {
    html2canvas(formationSection).then(canvas => {
      const link = document.createElement("a");
      link.download = "formasi-senbatsu.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  });

  // Inisialisasi awal
  select.value = "7";
  generateFormation(7);

  // Language switching
  const translations = {
    id: {
      pageTitle: "Rain Tree Idola",
      senbatsuTitle: "Formasi Senbatsu Rain Tree",
      selectSenbatsuMembers: "Pilih Jumlah Anggota Senbatsu:",
      senbatsuResultTitle: "Formasi Senbatsu",
      downloadResults: "Unduh Gambar",
      resetButton: "Reset"
    },
    en: {
      pageTitle: "Rain Tree Idols",
      senbatsuTitle: "Rain Tree Senbatsu Formation",
      selectSenbatsuMembers: "Select Number of Senbatsu Members:",
      senbatsuResultTitle: "Senbatsu Formation",
      downloadResults: "Download Image",
      resetButton: "Reset"
    },
    jp: {
      pageTitle: "レインツリーアイドル",
      senbatsuTitle: "選抜フォーメーション",
      selectSenbatsuMembers: "選抜人数を選んでください：",
      senbatsuResultTitle: "フォーメーション",
      downloadResults: "画像として保存",
      resetButton: "リセット"
    }
  };

  document.querySelectorAll(".lang-button").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      const t = translations[lang];
      document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.dataset.key;
        if (t[key]) el.textContent = t[key];
      });

      document.querySelectorAll(".lang-button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
});
