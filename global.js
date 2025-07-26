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
// ===============================
// LOVE FORTUNE TRANSLATIONS
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

