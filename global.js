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
  { name: "Niino Fuka", image: "RT_NinoFuka.jpeg" },
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
    pageTitle: "Rain Tree Idola Sorter",
    mainTitle: "Rain Tree Fan Tools",
    chooseTool: "Pilih Alat:",
    mainMenuSorter: "Idol Sorter",
    mainMenuSenbatsu: "Senbatsu Formation",
    mainMenuMatchmaker: "Ramalan Cinta RT",
    selectSenbatsuMembers: "Pilih Jumlah Anggota Senbatsu:",
    downloadResults: "Unduh Hasil (Gambar)",
    selectMemberPrompt: "Pilih Member",
    noMemberSelected: "Kosongkan Slot",
    emptySlotText: "(kosong)",
    chooseCategory: "Pilih Kategori Sorter:",
    categoryGeneral: "Umum",
    categoryVisual: "Visual",
    categoryTalent: "Bakat",
    categoryComedian: "Pelawak",
    progressText: "Memuat...",
    vsText: "VS",
    drawButton: "Seri (Draw)",
    resultsTitle: "Hasil Sorter",
    shareResults: "Bagikan",
    restartButton: "Mulai Ulang"
  },
  en: {
    pageTitle: "Rain Tree Idol Sorter",
    mainTitle: "Rain Tree Fan Tools",
    chooseTool: "Choose a Tool:",
    mainMenuSorter: "Idol Sorter",
    mainMenuSenbatsu: "Senbatsu Formation",
    mainMenuMatchmaker: "Love Fortune RT",
    selectSenbatsuMembers: "Select Number of Senbatsu Members:",
    downloadResults: "Download Results (Image)",
    selectMemberPrompt: "Select Member",
    noMemberSelected: "Clear Slot",
    emptySlotText: "(empty)",
    chooseCategory: "Choose Sorter Category:",
    categoryGeneral: "General",
    categoryVisual: "Visual",
    categoryTalent: "Talent",
    categoryComedian: "Comedian",
    progressText: "Loading...",
    vsText: "VS",
    drawButton: "Draw",
    resultsTitle: "Sorter Results",
    shareResults: "Share",
    restartButton: "Restart"
  },
  jp: {
    pageTitle: "レインツリーアイドルソート",
    mainTitle: "レインツリーファンツール",
    chooseTool: "ツールを選択:",
    mainMenuSorter: "アイドルソート",
    mainMenuSenbatsu: "選抜フォーメーション",
    mainMenuMatchmaker: "相性占いRT",
    selectSenbatsuMembers: "選抜メンバーの人数を選択:",
    downloadResults: "結果を画像で保存",
    selectMemberPrompt: "メンバーを選択",
    noMemberSelected: "スロットをクリア",
    emptySlotText: "(空)",
    chooseCategory: "ソートカテゴリーを選択:",
    categoryGeneral: "一般",
    categoryVisual: "ビジュアル",
    categoryTalent: "才能",
    categoryComedian: "お笑い",
    progressText: "読み込み中...",
    vsText: "VS",
    drawButton: "引き分け",
    resultsTitle: "ソート結果",
    shareResults: "共有",
    restartButton: "やり直す"
  }
};

// ===============================
// LOVE FORTUNE PHRASES
// ===============================
const loveFortune = {
  id: [
    { max: 20, text: "Seperti minyak dan air... mungkin lebih baik tetap berteman." },
    { max: 40, text: "Ada benih-benih rasa, tapi belum tumbuh jadi bunga." },
    { max: 60, text: "Bisa jadi pasangan yang seru—kalau saling mengerti." },
    { max: 80, text: "Chemistry-nya kuat! Kalian cocok jadi pasangan duet romantis." },
    { max: 100, text: "Takdir sudah menulis nama kalian berdua di bintang." }
  ],
  en: [
    { max: 20, text: "Like oil and water… better stay friends." },
    { max: 40, text: "A spark is there, but the flame is shy." },
    { max: 60, text: "Could be a fun match—if you open your hearts." },
    { max: 80, text: "Your energies align—this could be something beautiful." },
    { max: 100, text: "Destiny approves. This love is meant to be." }
  ],
  jp: [
    { max: 20, text: "油と水のように…友達のままで。" },
    { max: 40, text: "少しだけドキドキ。でもまだ早いかも。" },
    { max: 60, text: "いい相性かも。距離を縮めてみて。" },
    { max: 80, text: "心のリズムが合ってる！いい感じ。" },
    { max: 100, text: "運命が味方してる。真実の恋かも！" }
  ]
};

// ===============================
// LANGUAGE HANDLER
// ===============================
let currentLang = localStorage.getItem("lang") || "id";
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  currentLang = lang;
  document.querySelectorAll("[data-key]").forEach((el) => {
    const key = el.getAttribute("data-key");
    const trans = translations?.[lang]?.[key];
    if (trans) el.textContent = trans;
  });
  document.querySelectorAll("[data-text][data-raw]").forEach(el => {
    const score = parseInt(el.getAttribute("data-raw"), 10);
    const msg = loveFortune?.[lang]?.find(f => score <= f.max)?.text || "";
    el.textContent = msg;
  });
}

// ===============================
// INITIALIZATION
// ===============================
window.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);
  document.querySelectorAll(".lang-button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".lang-button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      setLanguage(btn.dataset.lang);
    });
  });
});
