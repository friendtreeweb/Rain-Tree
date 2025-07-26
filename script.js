document.addEventListener('DOMContentLoaded', () => {
    // Definisi anggota (nama asli/Romaji - ini adalah kunci untuk terjemahan)
    const members = [
        { name: 'Ayase Kotori', image: 'RT_AyaseKotori.jpeg' },
        { name: 'Endo Rino', image: 'RT_EndoRino.jpeg' },
        { name: 'Yoshikawa Umi', image: 'RT_YoshikawaUmi.jpeg' },
        { name: 'Mizuno Noa', image: 'RT_MizunoNoa.jpeg' },
        { name: 'Ichihara Tsumugi', image: 'RT_IchiharaTsumugi.jpeg' },
        { name: 'Sato Rica', image: 'RT_SatoRica.jpeg' },
        { name: 'Katase Manaka', image: 'RT_KataseManaka.jpeg' },
        { name: 'Hayama Rico', image: 'RT_HayamaRico.jpeg' },
        { name: 'Nino Fuka', image: 'RT_NinoFuka.jpeg' },
        { name: 'Momose Suzuna', image: 'RT_MomoseSuzuna.jpeg' },
        { name: 'Suzuno Mio', image: 'RT_SuzunoMio.jpeg' },
        { name: 'Nakamata Miki', image: 'RT_NakamataMiki.jpeg' },
        { name: 'Hashimoto Maki', image: 'RT_HashimotoMaki.jpeg' },
        { name: 'Kurosawa Karen', image: 'RT_KurosawaKaren.jpeg' },
        { name: 'Kato Shu', image: 'RT_KatoShu.jpeg' },
        { name: 'Nagase Mari', image: 'RT_NagaseMari.jpeg' },
        { name: 'Asamiya Hinata', image: 'RT_AsamiyaHinata.jpeg' },
    ];

    // --- Objek Terjemahan (Translations) ---
    const translations = {
        id: {
            pageTitle: 'Rain Tree Idola Sorter',
            mainTitle: 'Rain Tree Fan Tools', // Updated for index.html
            chooseCategory: 'Pilih Kategori Sorter:',
            categoryGeneral: 'Umum',
            categoryVisual: 'Visual',
            categoryTalent: 'Bakat',
            categoryComedian: 'Pelawak',
            progressText: 'Proses:',
            vsText: 'VS',
            drawButton: 'Seri (Draw)',
            downloadResults: 'Unduh Hasil (Gambar)',
            shareResults: 'Bagikan',
            restartButton: 'Mulai Ulang',
            resultsGeneral: 'Member favoritmu adalah:',
            resultsTalent: 'Member paling berbakat versi kamu:',
            resultsVisual: 'Visual terbaik versi kamu:',
            resultsComedian: 'Member terlucu versi kamu:',
            senbatsuTitle: 'Buat Formasi Senbatsu',
            senbatsuSizeLabel: 'Jumlah Member dalam Formasi:',
            resetSenbatsuButton: 'Reset Formasi',
            alertMaxMembers: 'Jumlah member formasi sudah penuh ({maxMembers} member).',
            alertMinMembers: 'Pilih setidaknya satu member.',
            selectMemberPrompt: 'Pilih Member',
            noMemberSelected: 'Kosongkan Slot',
            emptySlotText: 'Slot Kosong',
            mainMenuSorter: 'Idol Sorter', // For index.html
            mainMenuSenbatsu: 'Formasi Senbatsu', // For index.html
            chooseTool: 'Pilih Alat:', // For index.html

            // --- Terjemahan untuk Matchmaker ---
            pageTitleMatchmaker: 'Ramalan Cinta RT',
            mainTitleMatchmaker: 'Ramalan Cinta RT',
            matchmakerTitle: 'Temukan Takdir Cintamu!',
            yourNameLabel: 'Nama Kamu:',
            memberSelectLabel: 'Pilih Member Rain Tree:',
            calculateMatchButton: 'Hitung Kecocokan Takdir!',
            resultCardTitle: 'Hasil Ramalan Cintamu',
            tryAgainButton: 'Coba Lagi',
            yourImageAltText: 'Gambar Anda',
            mainMenuMatchmaker: 'Ramalan Cinta RT', // For index.html
            // Kalimat dramatis
            phraseLowLow: 'Jalan kalian masih terjal, butuh perjuangan ekstra!',
            phraseLow: 'Mungkin perlu sedikit bumbu takdir lagi...',
            phraseMedium: 'Bisa jadi! Vibes kalian lumayan nyambung nih!',
            phraseHigh: 'Pintu takdir terbuka lebar untuk kalian!',
            phraseVeryHigh: 'Cinta sejati versi Rain Tree!',

            // Terjemahan nama anggota (Romaji untuk ID)
            'Ayase Kotori': 'Ayase Kotori',
            'Endo Rino': 'Endo Rino',
            'Yoshikawa Umi': 'Yoshikawa Umi',
            'Mizuno Noa': 'Mizuno Noa',
            'Ichihara Tsumugi': 'Ichihara Tsumugi',
            'Sato Rica': 'Sato Rica',
            'Katase Manaka': 'Katase Manaka',
            'Hayama Rico': 'Hayama Rico',
            'Nino Fuka': 'Nino Fuka',
            'Momose Suzuna': 'Momose Suzuna',
            'Suzuno Mio': 'Suzuno Mio',
            'Nakamata Miki': 'Nakamata Miki',
            'Hashimoto Maki': 'Hashimoto Maki',
            'Kurosawa Karen': 'Kurosawa Karen',
            'Kato Shu': 'Kato Shu',
            'Nagase Mari': 'Nagase Mari',
            'Asamiya Hinata': 'Asamiya Hinata',
        },
        en: {
            pageTitle: 'Rain Tree Idol Sorter',
            mainTitle: 'Rain Tree Fan Tools', // Updated for index.html
            chooseCategory: 'Choose Sorter Category:',
            categoryGeneral: 'General',
            categoryVisual: 'Visual',
            categoryTalent: 'Talent',
            categoryComedian: 'Comedian',
            progressText: 'Progress:',
            vsText: 'VS',
            drawButton: 'Draw',
            downloadResults: 'Download Results (Image)',
            shareResults: 'Share',
            restartButton: 'Restart',
            resultsGeneral: 'Your favorite member is:',
            resultsTalent: 'Your most talented member:',
            resultsVisual: 'Your best visual member:',
            resultsComedian: 'Your funniest member:',
            senbatsuTitle: 'Create Senbatsu Formation',
            senbatsuSizeLabel: 'Number of Members in Formation:',
            resetSenbatsuButton: 'Reset Formation',
            alertMaxMembers: 'Maximum formation members reached ({maxMembers} members).',
            alertMinMembers: 'Please select at least one member.',
            selectMemberPrompt: 'Select Member',
            noMemberSelected: 'Clear Slot',
            emptySlotText: 'Empty Slot',
            mainMenuSorter: 'Idol Sorter', // For index.html
            mainMenuSenbatsu: 'Senbatsu Formation', // For index.html
            chooseTool: 'Choose Tool:', // For index.html

            // --- Terjemahan untuk Matchmaker ---
            pageTitleMatchmaker: 'Rain Tree Love Fortune',
            mainTitleMatchmaker: 'Rain Tree Love Fortune',
            matchmakerTitle: 'Find Your Love Destiny!',
            yourNameLabel: 'Your Name:',
            memberSelectLabel: 'Select Rain Tree Member:',
            calculateMatchButton: 'Calculate Destiny Match!',
            resultCardTitle: 'Your Love Fortune Result',
            tryAgainButton: 'Try Again',
            yourImageAltText: 'Your Image',
            mainMenuMatchmaker: 'Rain Tree Love Fortune', // For index.html
            // Kalimat dramatis
            phraseLowLow: 'Your path is still rough, extra effort needed!',
            phraseLow: 'Maybe a little more destiny spice is needed...',
            phraseMedium: 'It could be! Your vibes are quite in sync!',
            phraseHigh: 'The gates of destiny are wide open for you!',
            phraseVeryHigh: 'True love, Rain Tree version!',

            // Terjemahan nama anggota (Romaji untuk EN)
            'Ayase Kotori': 'Ayase Kotori',
            'Endo Rino': 'Endo Rino',
            'Yoshikawa Umi': 'Yoshikawa Umi',
            'Mizuno Noa': 'Mizuno Noa',
            'Ichihara Tsumugi': 'Ichihara Tsumugi',
            'Sato Rica': 'Sato Rica',
            'Katase Manaka': 'Katase Manaka',
            'Hayama Rico': 'Hayama Rico',
            'Nino Fuka': 'Nino Fuka',
            'Momose Suzuna': 'Momose Suzuna',
            'Suzuno Mio': 'Suzuno Mio',
            'Nakamata Miki': 'Nakamata Miki',
            'Hashimoto Maki': 'Hashimoto Maki',
            'Kurosawa Karen': 'Kurosawa Karen',
            'Kato Shu': 'Kato Shu',
            'Nagase Mari': 'Nagase Mari',
            'Asamiya Hinata': 'Asamiya Hinata',
        },
        jp: {
            pageTitle: 'Rain Tree アイドルソート',
            mainTitle: 'Rain Tree ファンツール', // Updated for index.html
            chooseCategory: 'ソーターカテゴリを選択してください:',
            categoryGeneral: 'ソート',
            categoryVisual: 'ビジュアル',
            categoryTalent: '才能',
            categoryComedian: 'おもしろい',
            progressText: '進行状況:',
            vsText: 'VS',
            drawButton: '引き分け',
            downloadResults: '結果をダウンロード (画像)',
            shareResults: '共有',
            restartButton: 'やり直す',
            resultsGeneral: 'あなたのお気に入りのメンバーは:',
            resultsTalent: 'あなたの最も才能のあるメンバー:',
            resultsVisual: 'あなたの最高のビジュアルメンバー:',
            resultsComedian: 'あなたの最も面白いメンバー:',
            senbatsuTitle: '選抜フォーメーションを作成',
            senbatsuSizeLabel: 'フォーメーション人数:',
            resetSenbatsuButton: 'フォーメーションをリセット',
            alertMaxMembers: 'フォーメーションの最大人数に達しました（{maxMembers}人）。',
            alertMinMembers: '少なくとも一人メンバーを選択してください。',
            selectMemberPrompt: 'メンバーを選択',
            noMemberSelected: 'スロットをクリア',
            emptySlotText: '空スロット',
            mainMenuSorter: 'アイドルソート', // For index.html
            mainMenuSenbatsu: '選抜フォーメーション', // For index.html
            chooseTool: 'ツールを選択:', // For index.html

            // --- Terjemahan untuk Matchmaker ---
            pageTitleMatchmaker: 'Rain Tree 恋愛占い',
            mainTitleMatchmaker: 'Rain Tree 恋愛占い',
            matchmakerTitle: 'あなたの運命の愛を見つけよう！',
            yourNameLabel: 'あなたの名前:',
            memberSelectLabel: 'Rain Treeメンバーを選択:',
            calculateMatchButton: '運命の相性を計算！',
            resultCardTitle: 'あなたの恋愛占い結果',
            tryAgainButton: 'もう一度試す',
            yourImageAltText: 'あなたの画像',
            mainMenuMatchmaker: 'Rain Tree 恋愛占い', // For index.html
            // Kalimat dramatis
            phraseLowLow: '二人の道はまだ険しい、さらなる努力が必要！',
            phraseLow: 'もう少し運命のスパイスが必要かも…',
            phraseMedium: '可能性あり！あなたたちの雰囲気はかなり合うね！',
            phraseHigh: '運命の扉は君たちに大きく開かれている！',
            phraseVeryHigh: 'これぞまさにRain Tree版の真実の愛！',

            // Terjemahan nama anggota dalam Kanji/Kana yang benar
            'Asamiya Hinata': '朝宮日向',
            'Ayase Kotori': '綾瀬ことり',
            'Endo Rino': '遠藤莉乃',
            'Sato Rica': '佐藤莉華',
            'Suzuno Mio': '鈴野みお',
            'Nino Fuka': '新野楓果',
            'Yoshikawa Umi': '吉川海未',
            'Ichihara Tsumugi': '市原紬希',
            'Katase Manaka': '片瀬真花',
            'Kato Shu': '加藤柊',
            'Kurosawa Karen': '黒澤禾恋',
            'Nagase Mari': '永瀬真梨',
            'Nakamata Miki': '仲俣美希',
            'Hashimoto Maki': '橋本真希',
            'Hayama Rico': '葉山莉瑚',
            'Mizuno Noa': '水野乃愛',
            'Momose Suzuna': '百瀬紗菜',
        }
    };

    let currentLang = 'id'; // Bahasa default saat ini

    // --- Helper function for visible debug messages ---
    function addDebugMessage(msg) {
        const debugList = document.getElementById('debug-list');
        const debugDiv = document.getElementById('debug-messages');
        if (debugList && debugDiv) {
            debugDiv.style.display = 'block'; // Ensure it's visible
            const listItem = document.createElement('li');
            listItem.textContent = msg;
            debugList.appendChild(listItem);
            // Keep only the last few messages to prevent overflow
            if (debugList.children.length > 10) {
                debugList.removeChild(debugList.children[0]);
            }
            debugList.scrollTop = debugList.scrollHeight; // Auto-scroll to bottom
        }
    }


    // --- DOM Elements Umum (yang ada di kedua halaman) ---
    const pageTitleElement = document.querySelector('title');
    const langButtons = document.querySelectorAll('.language-selector .lang-button');

    // Tambahkan event listener untuk tombol bahasa di sini, karena tombol ini ada di kedua halaman
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });
    });


    // --- General Functions ---
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function calculateTotalComparisons(n) {
        if (n <= 1) return 0;
        return (n * (n - 1)) / 2;
    }

    // --- Translation Function ---
    function setLanguage(lang) {
        addDebugMessage(`Setting language to: ${lang}`);
        currentLang = lang;
        langButtons.forEach(button => button.classList.remove('active'));
        document.querySelector(`.lang-button[data-lang="${lang}"]`)?.classList.add('active'); // Gunakan optional chaining

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[currentLang] && translations[currentLang][key]) {
                if (element.tagName === 'TITLE') {
                    if (window.location.pathname.includes('sorter.html')) {
                        element.textContent = translations[currentLang]['pageTitle'];
                    } else if (window.location.pathname.includes('senbatsu.html')) {
                        element.textContent = translations[currentLang]['pageTitleSenbatsu']; // Using specific key for senbatsu title
                    } else if (window.location.pathname.includes('matchmaker.html')) {
                        element.textContent = translations[currentLang]['pageTitleMatchmaker'];
                    } else {
                        element.textContent = translations[currentLang]['mainTitle']; // For index.html
                    }
                } else {
                    element.textContent = translations[currentLang][key];
                }
            }
        });

        // Logika spesifik untuk halaman sorter (jika elemen-elemennya ada di DOM)
        if (window.location.pathname.includes('sorter.html')) {
            addDebugMessage("Language set for sorter.");
            const sorterSection = document.getElementById('sorter-section');
            const idol1Card = document.getElementById('idol-1');
            const idol2Card = document.getElementById('idol-2');
            if (sorterSection && idol1Card && idol2Card) { // Pastikan elemen ada sebelum mencoba mengakses
                const idol1Name = idol1Card.querySelector('.idol-name');
                const idol2Name = idol2Card.querySelector('.idol-name');
                const resultsSection = document.getElementById('results-section');

                if (!sorterSection.classList.contains('hidden') && idol1Card.dataset.name && idol2Card.dataset.name) {
                    // Update names in battle if visible
                    if(idol1Name) idol1Name.textContent = translations[currentLang][idol1Card.dataset.name] || idol1Card.dataset.name;
                    if(idol2Name) idol2Name.textContent = translations[currentLang][idol2Card.dataset.name] || idol2Card.dataset.name;
                }
                if (resultsSection && !resultsSection.classList.contains('hidden')) {
                    updateResultsDisplay(); // Re-render results to update names
                }
                updateProgressBar();
            }
        }
        // Logika spesifik untuk halaman senbatsu (jika elemen-elemennya ada di DOM)
        else if (window.location.pathname.includes('senbatsu.html')) {
            const senbatsuFormationGrid = document.getElementById('senbatsu-formation-grid');
            const senbatsuSizeInput = document.getElementById('senbatsu-size'); // Added this line
            if (senbatsuFormationGrid && senbatsuSizeInput) { // Pastikan elemen ada sebelum mencoba mengakses
                generateFormationGrid(parseInt(senbatsuSizeInput.value));
            }

            const popupTitle = document.querySelector('.member-selector-popup h3');
            if (popupTitle) {
                popupTitle.textContent = translations[currentLang]['selectMemberPrompt'];
            }
            const clearOptionInPopup = document.querySelector('.member-selector-popup .member-item.clear-slot-option span');
            if (clearOptionInPopup) {
                clearOptionInPopup.textContent = translations[currentLang]['noMemberSelected'];
            }
        }
        // Logika spesifik untuk halaman matchmaker (jika elemen-elemennya ada di DOM)
        else if (window.location.pathname.includes('matchmaker.html')) {
            const memberSelect = document.getElementById('member-select');
            if (memberSelect) {
                populateMemberSelect(); // Re-populate dropdown with translated names
            }
            // If result card is active, update its content as well
            const matchResultCard = document.getElementById('match-result-card');
            const displayYourImage = document.getElementById('display-your-image'); // Get the user image element
            if (matchResultCard && matchResultCard.classList.contains('active')) {
                // Re-calculate and display result with new language
                const lastYourName = document.getElementById('display-your-name')?.textContent;
                const lastMemberNameRomaji = document.getElementById('display-member-name')?.dataset.romajiName; // Get original Romaji name
                const lastMatchPercentage = parseInt(document.getElementById('display-match-hearts')?.dataset.percentage); // Get stored percentage

                if (lastYourName && lastMemberNameRomaji !== undefined && !isNaN(lastMatchPercentage)) {
                    const selectedMember = members.find(m => m.name === lastMemberNameRomaji);
                    if (selectedMember) {
                         displayMatchResult(lastYourName, selectedMember, lastMatchPercentage);
                    }
                }
            }
            // Also update the alt text for the user's image if it's there
            if (displayYourImage) {
                displayYourImage.alt = translations[currentLang]['yourImageAltText'];
            }
        }
    }

    // --- Logic for Sorter Page (`sorter.html`) ---
    if (window.location.pathname.includes('sorter.html')) {
        addDebugMessage("Sorter script loaded.");
        let currentList = [];
        let comparisonsMade = 0;
        let totalComparisons = 0;
        const comparedPairs = new Set();
        let currentCategory = '';

        const categorySelectionSection = document.getElementById('category-selection');
        const sorterSection = document.getElementById('sorter-section');
        const resultsSection = document.getElementById('results-section');
        const categoryButtons = document.querySelectorAll('.category-buttons button');
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        const idol1Card = document.getElementById('idol-1');
        const idol2Card = document.getElementById('idol-2');
        const idol1Img = idol1Card?.querySelector('img');
        const idol1Name = idol1Card?.querySelector('.idol-name');
        const idol2Img = idol2Card?.querySelector('img');
        const idol2Name = idol2Card?.querySelector('.idol-name');
        const drawButton = document.getElementById('draw-button');
        const resultsTitle = document.getElementById('results-title');
        const resultsList = document.getElementById('results-list');
        const downloadResultsButton = document.getElementById('download-results');
        const shareResultsButton = document.getElementById('share-results');
        const restartSorterButton = document.getElementById('restart-sorter');

        // Added more robust checks for initial elements
        if (!categorySelectionSection || !sorterSection || !resultsSection || categoryButtons.length === 0 || !idol1Card || !idol2Card || !idol1Img || !idol1Name || !idol2Img || !idol2Name || !drawButton || !resultsTitle || !resultsList || !downloadResultsButton || !shareResultsButton || !restartSorterButton) {
            addDebugMessage("ERROR: One or more critical Sorter DOM elements NOT FOUND.");
            // Optionally, disable buttons or show a message to the user if elements are missing
            // return; // Don't return, let's try to proceed with what's available for debugging
        } else {
            addDebugMessage("All Sorter DOM elements found.");
        }


        function initializeSorter(category) {
            addDebugMessage(`Initializing Sorter for category: ${category}`);
            currentCategory = category;
            currentList = members.map(member => ({ ...member, wins: 0, losses: 0, draws: 0 }));
            shuffleArray(currentList);
            comparisonsMade = 0;
            totalComparisons = calculateTotalComparisons(currentList.length);
            updateProgressBar();

            if(categorySelectionSection) categorySelectionSection.classList.add('hidden');
            if(sorterSection) sorterSection.classList.remove('hidden');
            addDebugMessage("Category selection hidden, sorter section shown.");
            addDebugMessage(`Current list size: ${currentList.length}, Total comparisons: ${totalComparisons}`);

            startNextComparison();
        }

        function updateProgressBar() {
            if (totalComparisons === 0) {
                if (progressBar) progressBar.style.width = '100%';
                if (progressText) progressText.textContent = `${translations[currentLang]['progressText']} Selesai!`;
                return;
            }
            const progressPercentage = (comparisonsMade / totalComparisons) * 100;
            if (progressBar) progressBar.style.width = `${progressPercentage}%`;
            if (progressText) progressText.textContent = `${translations[currentLang]['progressText']} ${comparisonsMade} / ${totalComparisons}`;
        }

        function getRandomUniquePair() {
            addDebugMessage("Attempting to get a unique pair.");
            const availablePairs = [];
            for (let i = 0; i < currentList.length; i++) {
                for (let j = i + 1; j < currentList.length; j++) {
                    const pairKey1 = `${currentList[i].name}-${currentList[j].name}`;
                    const pairKey2 = `${currentList[j].name}-${currentList[i].name}`;
                    if (!comparedPairs.has(pairKey1) && !comparedPairs.has(pairKey2)) {
                        availablePairs.push([currentList[i], currentList[j]]);
                    }
                }
            }
            if (availablePairs.length > 0) {
                const randomIndex = Math.floor(Math.random() * availablePairs.length);
                const pair = availablePairs[randomIndex];
                comparedPairs.add(`${pair[0].name}-${pair[1].name}`);
                addDebugMessage(`Found pair: ${pair[0].name} vs ${pair[1].name}.`);
                return pair;
            }
            addDebugMessage("No unique pair found. All pairs compared or list too small.");
            return [null, null];
        }

        function displayBattle(idol1, idol2) {
            // Defensive checks to ensure elements exist before manipulating them
            if (!idol1Card || !idol2Card || !idol1Img || !idol1Name || !idol2Img || !idol2Name) {
                addDebugMessage("ERROR: displayBattle: One or more idol elements are NULL, cannot display battle.");
                return;
            }
            idol1Card.dataset.name = idol1.name;
            idol1Img.src = `images/${idol1.image}`;
            idol1Name.textContent = translations[currentLang][idol1.name] || idol1.name;

            idol2Card.dataset.name = idol2.name;
            idol2Img.src = `images/${idol2.image}`;
            idol2Name.textContent = translations[currentLang][idol2.name] || idol2.name;
            addDebugMessage(`Displaying battle: ${idol1.name} VS ${idol2.name}`);
        }

        function startNextComparison() {
            addDebugMessage("Starting next comparison.");
            if (comparisonsMade >= totalComparisons) {
                finishSorting();
                return;
            }
            const [idol1, idol2] = getRandomUniquePair();
            if (idol1 && idol2) {
                displayBattle(idol1, idol2);
            } else {
                addDebugMessage("No valid pair from getRandomUniquePair. Finishing sorting.");
                finishSorting(); // This means no unique pair could be found (e.g., list is too small or all compared)
            }
        }

        function handleChoice(winnerName) {
            addDebugMessage(`Choice made: ${winnerName}`);
            const idol1 = currentList.find(m => m.name === idol1Card?.dataset.name);
            const idol2 = currentList.find(m => m.name === idol2Card?.dataset.name);
            if (!idol1 || !idol2) {
                addDebugMessage('ERROR: Idol not found for comparison in handleChoice. Skipping...');
                return;
            }
            comparisonsMade++;
            if (winnerName === 'draw') {
                idol1.draws++;
                idol2.draws++;
            } else if (winnerName === idol1.name) {
                idol1.wins++;
                idol2.losses++;
            } else if (winnerName === idol2.name) {
                idol2.wins++;
                idol1.losses++;
            }
            updateProgressBar();
            startNextComparison();
        }

        function finishSorting() {
            if (sorterSection) sorterSection.classList.add('hidden');
            if (resultsSection) resultsSection.classList.remove('hidden');
            addDebugMessage("Sorting finished, showing results.");

            currentList.sort((a, b) => {
                if (b.wins !== a.wins) return b.wins - a.wins;
                if (b.draws !== a.draws) return b.draws - a.draws;
                return a.name.localeCompare(b.name);
            });
            updateResultsDisplay();
        }

        function updateResultsDisplay() {
            if (!resultsTitle || !resultsList) {
                addDebugMessage("ERROR: Results display elements not found, cannot update results.");
                return;
            }
            let titleKey = '';
            switch (currentCategory) {
                case 'general': titleKey = 'resultsGeneral'; break;
                case 'talent': titleKey = 'resultsTalent'; break;
                case 'visual': titleKey = 'resultsVisual'; break;
                case 'comedian': titleKey = 'resultsComedian'; break;
                default: titleKey = 'resultsGeneral'; break;
            }
            resultsTitle.textContent = translations[currentLang][titleKey];

            resultsList.innerHTML = '';
            currentList.forEach((member, index) => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.innerHTML = `
                    <span>${index + 1}.</span>
                    <img src="images/${member.image}" alt="${member.name}">
                    <p>${translations[currentLang][member.name] || member.name} (W:${member.wins} D:${member.draws} L:${member.losses})</p>
                `;
                resultsList.appendChild(resultItem);
            });
            addDebugMessage("Sorter results display updated.");
        }

        // --- Sorter Event Listeners ---
        categoryButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                addDebugMessage(`Category button clicked: ${e.target.dataset.category}`);
                initializeSorter(e.target.dataset.category);
            });
        });
        idol1Card?.addEventListener('click', () => {
            addDebugMessage(`Idol 1 card clicked (${idol1Card.dataset.name}).`);
            handleChoice(idol1Card.dataset.name)
        });
        idol2Card?.addEventListener('click', () => {
            addDebugMessage(`Idol 2 card clicked (${idol2Card.dataset.name}).`);
            handleChoice(idol2Card.dataset.name)
        });
        drawButton?.addEventListener('click', () => {
            addDebugMessage("Draw button clicked.");
            handleChoice('draw')
        });
        downloadResultsButton?.addEventListener('click', () => {
            addDebugMessage("Download results button clicked.");
            if (resultsSection) {
                html2canvas(resultsSection, {
                    useCORS: true,
                    scale: 2,
                    backgroundColor: '#ffffff'
                }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = `rain_tree_sorter_results_${currentLang}.png`;
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                    addDebugMessage("Results image downloaded.");
                }).catch(error => {
                    addDebugMessage(`ERROR: HTML2Canvas download failed: ${error.message}`);
                });
            } else {
                addDebugMessage("ERROR: Results section not found for download.");
            }
        });
        shareResultsButton?.addEventListener('click', () => {
            addDebugMessage("Share results button clicked.");
            if (navigator.share && resultsSection) {
                html2canvas(resultsSection, {
                    useCORS: true,
                    scale: 2,
                    backgroundColor: '#ffffff'
                }).then(canvas => {
                    canvas.toBlob(function(blob) {
                        const filesArray = [
                            new File([blob], `rain_tree_sorter_results_${currentLang}.png`, {
                                type: 'image/png',
                                lastModified: new Date().getTime()
                            })
                        ];
                        const shareText = `Lihat hasil sorting Rain Tree saya untuk kategori ${translations[currentLang][`category${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}`]}!`;
                        navigator.share({
                            files: filesArray,
                            title: translations[currentLang]['pageTitle'],
                            text: shareText,
                            url: window.location.href,
                        }).then(() => addDebugMessage('Share successful'))
                        .catch((error) => addDebugMessage(`ERROR: Sharing failed: ${error.message}`));
                    }, 'image/png');
                }).catch(error => {
                    addDebugMessage(`ERROR: HTML2Canvas share failed: ${error.message}`);
                });
            } else {
                alert('Fitur berbagi tidak didukung di browser ini. Anda bisa mengunduh gambar dan membagikannya secara manual.');
                addDebugMessage("Share feature not supported or results section not found.");
            }
        });
        restartSorterButton?.addEventListener('click', () => {
            addDebugMessage("Restart sorter button clicked.");
            if (categorySelectionSection) categorySelectionSection.classList.remove('hidden');
            if (sorterSection) sorterSection.classList.add('hidden');
            if (resultsSection) resultsSection.classList.add('hidden');
            if (resultsList) resultsList.innerHTML = '';
            comparedPairs.clear();
            updateProgressBar();
            addDebugMessage("Sorter restarted.");
        });

        // Initial setup for the sorter page
        setLanguage('id'); // Ensures language is set even if not changed by user
        addDebugMessage("Sorter page script fully executed.");
    }

    // --- Logic for Senbatsu Page (`senbatsu.html`) ---
    else if (window.location.pathname.includes('senbatsu.html')) {
        console.log("Loading Senbatsu Page script...");
        let senbatsuFormation = [];
        let maxSenbatsuMembers;
        let currentEditingSlotIndex = null;

        const senbatsuSizeInput = document.getElementById('senbatsu-size');
        const senbatsuFormationGrid = document.getElementById('senbatsu-formation-grid');
        const resetSenbatsuButton = document.getElementById('reset-senbatsu');
        const downloadSenbatsuButton = document.getElementById('download-senbatsu');
        const senbatsuContainer = document.querySelector('.senbatsu-container'); // Pastikan ini ada di senbatsu.html


        const memberSelectorPopupOverlay = document.getElementById('member-selector-popup-overlay');
        const popupCloseButton = memberSelectorPopupOverlay?.querySelector('.popup-close-button');
        const memberListInPopup = memberSelectorPopupOverlay?.querySelector('.member-list');
        const popupTitle = memberSelectorPopupOverlay?.querySelector('h3');


        if (!senbatsuSizeInput || !senbatsuFormationGrid || !resetSenbatsuButton || !downloadSenbatsuButton || !memberSelectorPopupOverlay || !popupCloseButton || !memberListInPopup || !popupTitle || !senbatsuContainer) {
            console.error("ERROR: One or more critical Senbatsu DOM elements not found. Senbatsu script might not function correctly.");
            // return; // Don't return, let's try to proceed for debugging
        } else {
            maxSenbatsuMembers = parseInt(senbatsuSizeInput.value);
            senbatsuFormation = Array(maxSenbatsuMembers).fill(null);
        }

        // KUNCI PERUBAHAN: Fungsi generateFormationGrid untuk tapering
        function generateFormationGrid(size) {
    const senbatsuFormationGrid = document.getElementById('senbatsu-formation-grid');
    senbatsuFormationGrid.innerHTML = '';

    const rows = splitIntoTriangleRows(size);

    rows.forEach((numMembersInRow, rowIndex) => {
        const row = document.createElement('div');
        row.classList.add('formation-row');

        for (let i = 0; i < numMembersInRow; i++) {
            const slot = createSenbatsuSlot();
            row.appendChild(slot);
        }

        senbatsuFormationGrid.appendChild(row);
    });
}

            // Sesuaikan ukuran formasi yang sudah ada dengan ukuran baru
            const newFormation = Array(size).fill(null);
            for (let i = 0; i < Math.min(senbatsuFormation.length, size); i++) {
                newFormation[i] = senbatsuFormation[i];
            }
            senbatsuFormation = newFormation;

            // Logika tapering: hitung jumlah baris dan anggota per baris
            const rows = [];
            let remainingMembers = size;
            
            // Atur ulang pola tapering untuk jumlah umum seperti 7, 16
            // Untuk 7: 1 (center) - 2 - 4 (baris belakang)
            // Untuk 16: 4 - 4 - 4 - 4 (contoh) atau 1 - 2 - 4 - 9 (jika tapering sangat curam)
            // Mari kita coba pola yang lebih umum: mulai dari 1 atau 2, lalu tambah 1 atau 2 per baris.
            let currentRowSize = 0;
            let memberIndex = 0;

            if (size === 1) {
                rows.push(1);
            } else if (size === 2) {
                rows.push(2);
            } else if (size === 3) {
                rows.push(2, 1); // 2 di depan, 1 di belakang
            } else if (size === 4) {
                rows.push(2, 2);
            } else if (size === 5) {
                rows.push(3, 2);
            } else if (size === 6) {
                rows.push(4, 2);
            } else if (size === 7) { // 7 (populer)
                rows.push(4, 2, 1); // Belakang, Tengah, Center
            } else if (size === 8) {
                rows.push(4, 2, 2);
            } else if (size === 9) {
                rows.push(3, 3, 3);
            } else if (size === 10) {
                rows.push(5, 3, 2);
            } else if (size === 11) {
                rows.push(5, 3, 3);
            } else if (size === 12) {
                rows.push(5, 4, 3);
            } else if (size === 13) {
                rows.push(5, 5, 3);
            } else if (size === 14) {
                rows.push(5, 5, 4);
            } else if (size === 15) {
                rows.push(4, 4, 4, 3); // Contoh 4 baris
            } else if (size === 16) {
                rows.push(4, 4, 4, 4); // Contoh 4 baris rata
            }
            else { // Untuk ukuran lain, sebarkan secara merata atau buat tapering kustom
                let numRows;
                if (size <= 7) numRows = 3;
                else if (size <= 10) numRows = 3;
                else if (size <= 16) numRows = 4;
                else numRows = Math.ceil(size / 5); // Default: sekitar 5 member per baris

                let basePerRowCount = Math.floor(size / numRows);
                let remainder = size % numRows;
                for (let i = 0; i < numRows; i++) {
                    let count = basePerRowCount;
                    if (i < remainder) {
                        count++;
                    }
                    if (count > 0) { // Hanya tambahkan baris jika ada anggota
                         rows.push(count);
                    }
                }
                // Jika masih ada sisa, coba distribusikan ke baris yang ada, atau tambahkan baris baru
                while (rows.reduce((sum, val) => sum + val, 0) < size) {
                    // Coba tambahkan ke baris terakhir
                    rows[rows.length - 1]++;
                }
            }
            
            // Sesuaikan urutan rows agar tapering dari besar ke kecil (segitiga terbalik)
            rows.sort((a,b) => b - a); // Perubahan di sini!
            
            let globalMemberIndex = 0;
            rows.forEach((numMembersInRow, rowIndex) => {
                const rowDiv = document.createElement('div');
                rowDiv.classList.add('formation-row');
                rowDiv.dataset.row = rowIndex;
                rowDiv.style.gridTemplateColumns = `repeat(${numMembersInRow}, 1fr)`; // Untuk flexbox atau grid

                for (let i = 0; i < numMembersInRow; i++) {
                    const slotDiv = document.createElement('div');
                    slotDiv.classList.add('formation-slot');
                    // Data index sekarang menjadi indeks global di senbatsuFormation
                    slotDiv.dataset.index = globalMemberIndex;

                    const memberInSlot = senbatsuFormation[globalMemberIndex];

                    if (memberInSlot) {
                        slotDiv.classList.add('filled');
                        slotDiv.innerHTML = `
                            <img src="images/${memberInSlot.image}" alt="${memberInSlot.name}">
                            <p class="member-name">${translations[currentLang][memberInSlot.name] || memberInSlot.name}</p>
                        `;
                    } else {
                        slotDiv.innerHTML = `<p class="member-name">${translations[currentLang]['emptySlotText']}</p>`;
                    }

                    slotDiv.addEventListener('click', () => {
                        currentEditingSlotIndex = parseInt(slotDiv.dataset.index);
                        showMemberSelectorPopup();
                    });
                    rowDiv.appendChild(slotDiv);
                    globalMemberIndex++;
                }
                senbatsuFormationGrid.appendChild(rowDiv);
            });
            console.log("Formation grid generated with size:", size, " and rows:", rows);
        }

        function showMemberSelectorPopup() {
            if (!memberSelectorPopupOverlay || !memberListInPopup || !popupTitle) return;

            popupTitle.textContent = translations[currentLang]['selectMemberPrompt'];

            memberListInPopup.innerHTML = '';

            const clearOption = document.createElement('div');
            clearOption.classList.add('member-item', 'clear-slot-option');
            // Pastikan Anda memiliki images/placeholder_clear.png atau hapus img tag ini jika tidak ada
            clearOption.innerHTML = `<img src="images/placeholder_clear.png" alt="Clear Slot"> <span>${translations[currentLang]['noMemberSelected']}</span>`;
            clearOption.addEventListener('click', () => {
                if (currentEditingSlotIndex !== null) {
                    senbatsuFormation[currentEditingSlotIndex] = null;
                    generateFormationGrid(maxSenbatsuMembers);
                    hideMemberSelectorPopup();
                }
            });
            memberListInPopup.appendChild(clearOption);


            members.forEach(member => {
                const item = document.createElement('div');
                item.classList.add('member-item');
                item.dataset.name = member.name;

                const isSelected = senbatsuFormation.some((selectedMember, index) =>
                    selectedMember && selectedMember.name === member.name && index !== currentEditingSlotIndex
                );
                if (isSelected) {
                    item.classList.add('selected');
                    item.style.pointerEvents = 'none';
                    item.style.opacity = '0.6';
                }

                item.innerHTML = `<img src="images/${member.image}" alt="${member.name}"> <span>${translations[currentLang][member.name] || member.name}</span>`;

                item.addEventListener('click', () => {
                    if (!isSelected && currentEditingSlotIndex !== null) {
                        senbatsuFormation[currentEditingSlotIndex] = member;
                        generateFormationGrid(maxSenbatsuMembers);
                        hideMemberSelectorPopup();
                    }
                });
                memberListInPopup.appendChild(item);
            });

            memberSelectorPopupOverlay.classList.add('active');
            console.log("Member selector popup shown.");
        }

        function hideMemberSelectorPopup() {
            if (memberSelectorPopupOverlay) {
                memberSelectorPopupOverlay.classList.remove('active');
                currentEditingSlotIndex = null;
                console.log("Member selector popup hidden.");
            }
        }

        function resetSenbatsuFormation() {
            senbatsuFormation = Array(maxSenbatsuMembers).fill(null);
            generateFormationGrid(maxSenbatsuMembers);
            console.log("Senbatsu formation reset.");
        }

        senbatsuSizeInput?.addEventListener('change', (e) => {
            const newSize = parseInt(e.target.value);
            if (!isNaN(newSize) && newSize >= 1 && newSize <= members.length) {
                maxSenbatsuMembers = newSize;
                generateFormationGrid(maxSenbatsuMembers);
            } else {
                e.target.value = maxSenbatsuMembers;
                alert(`Jumlah member harus antara 1 dan ${members.length}.`);
            }
            console.log("Senbatsu size changed to:", maxSenbatsuMembers);
        });
        resetSenbatsuButton?.addEventListener('click', resetSenbatsuFormation);

        // KUNCI PERUBAHAN: Fungsi downloadSenbatsuButton yang lebih baik
        downloadSenbatsuButton?.addEventListener('click', () => {
            if (senbatsuContainer) { // Tangkap div terluar senbatsu-container
                html2canvas(senbatsuContainer, {
                    useCORS: true,
                    scale: 2,
                    backgroundColor: '#ffffff' // Pastikan background putih
                }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = `rain_tree_senbatsu_formation_${currentLang}.png`;
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                    console.log("Senbatsu image downloaded.");
                }).catch(error => {
                    console.error("ERROR: HTML2Canvas download failed:", error);
                });
            } else {
                console.error("Senbatsu container not found for download.");
            }
        });


        popupCloseButton?.addEventListener('click', hideMemberSelectorPopup);
        memberSelectorPopupOverlay?.addEventListener('click', (event) => {
            if (event.target === memberSelectorPopupOverlay) {
                hideMemberSelectorPopup();
            }
        });

        // Pengaturan awal untuk halaman senbatsu
        setLanguage('id'); // Atur bahasa default
        if (senbatsuSizeInput) {
            // Panggil generateFormationGrid setelah bahasa diatur dan elemen sudah siap
            generateFormationGrid(parseInt(senbatsuSizeInput.value));
        }
        console.log("Script halaman Senbatsu sepenuhnya dieksekusi.");
    }
    // --- Logic for Matchmaker Page (`matchmaker.html`) ---
    else if (window.location.pathname.includes('matchmaker.html')) {
        console.log("Loading Matchmaker Page script...");

        // DOM elements for Matchmaker
        const yourNameInput = document.getElementById('your-name-input');
        const memberSelect = document.getElementById('member-select');
        const calculateMatchButton = document.getElementById('calculate-match-button');
        const matchResultCard = document.getElementById('match-result-card');
        const displayYourImage = document.getElementById('display-your-image'); // Baru: Element gambar pengguna
        const displayYourName = document.getElementById('display-your-name');
        const displayMemberImage = document.getElementById('display-member-image');
        const displayMemberName = document.getElementById('display-member-name');
        const displayMatchHearts = document.getElementById('display-match-hearts');
        const displayMatchPhrase = document.getElementById('display-match-phrase');
        const downloadMatchResultButton = document.getElementById('download-match-result');
        const tryAgainButton = document.getElementById('try-again-button');

        if (!yourNameInput || !memberSelect || !calculateMatchButton || !matchResultCard || !displayYourImage || !displayYourName || !displayMemberImage || !displayMemberName || !displayMatchHearts || !displayMatchPhrase || !downloadMatchResultButton || !tryAgainButton) {
            console.error("ERROR: One or more critical Matchmaker DOM elements not found. Matchmaker script might not function correctly.");
            // return; // Don't return, let's try to proceed for debugging
        }

        function populateMemberSelect() {
            if (!memberSelect) return; // Defensive check
            memberSelect.innerHTML = ''; // Clear existing options

            // Add a default "Select a member" option
            const defaultOption = document.createElement('option');
            defaultOption.value = "";
            defaultOption.textContent = translations[currentLang]['memberSelectLabel']; // Use the label as default text
            defaultOption.disabled = true;
            defaultOption.selected = true;
            memberSelect.appendChild(defaultOption);

            members.forEach(member => {
                const option = document.createElement('option');
                option.value = member.name; // Use Romaji name as value
                option.textContent = translations[currentLang][member.name] || member.name; // Display translated name
                memberSelect.appendChild(option);
            });
            console.log("Member select dropdown populated.");
        }

        function generateMatchResult() {
            const yourName = yourNameInput.value.trim();
            const selectedMemberRomaji = memberSelect.value; // This is the Romaji name
            const selectedMember = members.find(m => m.name === selectedMemberRomaji);

            if (!yourName) {
                alert("Mohon masukkan nama Anda!");
                return;
            }
            if (!selectedMember || selectedMemberRomaji === "") { // Check if default option is still selected
                alert("Mohon pilih seorang member Rain Tree!");
                return;
            }

            // Generate random percentage
            const matchPercentage = Math.floor(Math.random() * 101); // 0-100

            displayMatchResult(yourName, selectedMember, matchPercentage);
            console.log(`Match result generated for ${yourName} and ${selectedMember.name}: ${matchPercentage}%`);
        }

        function displayMatchResult(yourName, member, percentage) {
            if (!displayYourName || !displayMemberImage || !displayMemberName || !displayMatchHearts || !displayMatchPhrase || !matchResultCard) {
                 console.error("displayMatchResult: Missing one or more display elements.");
                 return;
            }

            displayYourName.textContent = yourName;

            // Set user's image (always placeholder_clear.png)
            if (displayYourImage) {
                displayYourImage.src = 'images/placeholder_clear.png';
                displayYourImage.alt = translations[currentLang]['yourImageAltText'];
            }

            displayMemberImage.src = `images/${member.image}`;
            displayMemberImage.alt = member.name; // Set alt text for accessibility
            displayMemberName.textContent = translations[currentLang][member.name] || member.name;
            displayMemberName.dataset.romajiName = member.name; // Store original name for translation updates

            // Render hearts
            let heartsHtml = '';
            const filledHearts = Math.round(percentage / 10); // Each heart is 10%
            for (let i = 0; i < 10; i++) {
                if (i < filledHearts) {
                    heartsHtml += '❤️'; // Filled heart (Unicode)
                } else {
                    heartsHtml += '<span class="empty-heart">♡</span>'; // Empty heart (Unicode)
                }
            }
            displayMatchHearts.innerHTML = heartsHtml;
            displayMatchHearts.dataset.percentage = percentage; // Store percentage for translation updates

            // Determine phrase based on percentage
            let phraseKey;
            if (percentage <= 15) {
                phraseKey = 'phraseLowLow';
            } else if (percentage <= 35) {
                phraseKey = 'phraseLow';
            } else if (percentage <= 65) {
                phraseKey = 'phraseMedium';
            } else if (percentage <= 85) {
                phraseKey = 'phraseHigh';
            } else { // 86-100
                phraseKey = 'phraseVeryHigh';
            }
            displayMatchPhrase.textContent = translations[currentLang][phraseKey];

            matchResultCard.classList.add('active'); // Show the card
            console.log("Match result displayed.");
        }

        function resetMatchmaker() {
            if (yourNameInput) yourNameInput.value = '';
            if (memberSelect) memberSelect.value = ''; // Reset dropdown to default
            if (matchResultCard) matchResultCard.classList.remove('active'); // Hide the card
            console.log("Matchmaker reset.");
        }

        // --- Matchmaker Event Listeners ---
        calculateMatchButton?.addEventListener('click', generateMatchResult);
        tryAgainButton?.addEventListener('click', resetMatchmaker);

        downloadMatchResultButton?.addEventListener('click', () => {
            if (matchResultCard) {
                // Clone the card to remove the action buttons for the screenshot
                const cardToCapture = matchResultCard.cloneNode(true);
                cardToCapture.style.position = 'absolute'; // Prevent it from affecting layout
                cardToCapture.style.top = '-9999px'; // Move it off-screen
                cardToCapture.style.left = '-9999px';
                cardToCapture.style.display = 'flex'; // Ensure it's rendered for html2canvas

                // Hapus tombol aksi dari klon sebelum mengambil screenshot
                const actions = cardToCapture.querySelector('.match-result-actions');
                if (actions) {
                    actions.remove();
                }

                document.body.appendChild(cardToCapture);

                html2canvas(cardToCapture, {
                    useCORS: true,
                    scale: 2,
                    backgroundColor: '#ffffff'
                }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = `rain_tree_love_fortune_${currentLang}.png`;
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                    cardToCapture.remove(); // Remove the clone after capture
                }).catch(error => {
                    console.error("HTML2Canvas download failed:", error);
                });
            } else {
                console.error("Match result card not found for download.");
            }
        });

        // Initial setup for matchmaker page
        setLanguage('id'); // Default language for matchmaker page
        populateMemberSelect(); // Initial population of dropdown
        console.log("Matchmaker page script fully executed.");
    }

    // Set initial language for any common elements (like language buttons themselves)
    // This will also trigger the page-specific setLanguage logic due to the if/else if blocks
    if (!window.location.pathname.includes('sorter.html') && !window.location.pathname.includes('senbatsu.html') && !window.location.pathname.includes('matchmaker.html')) {
        setLanguage('id'); // This will only be called if it's not a sorter/senbatsu/matchmaker page (e.g., index.html)
    }
});
