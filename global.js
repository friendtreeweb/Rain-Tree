// js/global.js

// ===============================
// MEMBER DATA
// ===============================
const memberList = [
  { name: "Asamiya Hinata", image: "RT_AsamiyaHinata.jpeg" },
  { name: "Ayase Kotori", image: "RT_AyaseKotori.jpeg" },
  { name: "Ichihara Tsumugi", image: "RT_IchiharaTsumugi.jpeg" },
  { name: "Endo Rino", image: "RT_EndoRino.jpeg" },
  { name: "Katase Manaka", image: "RT_KataseManaka.jpeg" },
  { name: "Kato Shu", image: "RT_KatoShu.jpeg" },
  { name: "Kurosawa Karen", image: "RT_KurosawaKaren.jpeg" },
  { name: "Sato Rica", image: "RT_SatoRica.jpeg" },
  { name: "Suzuno Mio", image: "RT_SuzunoMio.jpeg" },
  { name: "Nakamata Miki", image: "RT_NakamataMiki.jpeg" },
  { name: "Nagase Mari", image: "RT_NagaseMari.jpeg" },
  { name: "Niino Fuka", image: "RT_NiinoFuka.jpeg" },
  { name: "Hashimoto Maki", image: "RT_HashimotoMaki.jpeg" },
  { name: "Hayama Rico", image: "RT_HayamaRico.jpeg" },
  { name: "Mizuno Noa", image: "RT_MizunoNoa.jpeg" },
  { name: "Momose Suzuna", image: "RT_MomoseSuzuna.jpeg" },
  { name: "Yoshikawa Umi", image: "RT_YoshikawaUmi.jpeg" }
];

// ===============================
// TRANSLATIONS
// ===============================
const translations = {
  id: {
    mainTitle: "Rain Tree Fan Tools",
    chooseTool: "Pilih Alat:",
    mainMenuSorter: "Idol Sorter",
    mainMenuSenbatsu: "Senbatsu Formation",
    mainMenuMatchmaker: "Ramalan Cinta RT",
    selectSenbatsuMembers: "Pilih Jumlah Anggota Senbatsu:",
    downloadResults: "Unduh Formasi (Gambar)",
    selectMemberPrompt: "Pilih Member",
    noMemberSelected: "Kosongkan Slot",
    emptySlotText: "(kosong)"
  },
  en: {
    mainTitle: "Rain Tree Fan Tools",
    chooseTool: "Choose a Tool:",
    mainMenuSorter: "Idol Sorter",
    mainMenuSenbatsu: "Senbatsu Formation",
    mainMenuMatchmaker: "Love Fortune RT",
    selectSenbatsuMembers: "Select Number of Senbatsu Members:",
    downloadResults: "Download Formation (Image)",
    selectMemberPrompt: "Select Member",
    noMemberSelected: "Clear Slot",
    emptySlotText: "(empty)"
  },
  jp: {
    mainTitle: "レインツリーファンツール",
    chooseTool: "ツールを選択:",
    mainMenuSorter: "アイドルソーター",
    mainMenuSenbatsu: "選抜フォーメーション",
    mainMenuMatchmaker: "相性占いRT",
    selectSenbatsuMembers: "選抜メンバーの人数を選択:",
    downloadResults: "フォーメーションを画像で保存",
    selectMemberPrompt: "メンバーを選択",
    noMemberSelected: "スロットをクリア",
    emptySlotText: "(空)"
  }
};

// ===============================
// LANGUAGE SETUP
// ===============================
let currentLang = localStorage.getItem("lang") || "id";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    const translated = translations[lang][key];
    if (translated) el.textContent = translated;
  });

  document.querySelectorAll(".lang-button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

// ===============================
// LANGUAGE BUTTON EVENT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);

  document.querySelectorAll(".lang-button").forEach(button => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
    });
  });
});
