document.addEventListener('DOMContentLoaded', () => {
    // Definisi anggota (nama asli/Romaji - ini adalah kunci untuk terjemahan)
    const members = [
        { name: 'Asamiya Hinata', image: 'RT_AsamiyaHinata.jpeg' }, // New member
        { name: 'Ayase Kotori', image: 'RT_AyaseKotori.jpeg' },
        { name: 'Ichihara Tsumugi', image: 'RT_IchiharaTsumugi.jpeg' },
        { name: 'Endo Rino', image: 'RT_EndoRino.jpeg' },
        { name: 'Katase Manaka', image: 'RT_KataseManaka.jpeg' },
        { name: 'Kato Shu', image: 'RT_KatoShu.jpeg' }, // Name changed from Kato Coco
        { name: 'Kurosawa Karen', image: 'RT_KurosawaKaren.jpeg' },
        { name: 'Sato Rica', image: 'RT_SatoRica.jpeg' },
        { name: 'Suzuno Mio', image: 'RT_SuzunoMio.jpeg' },
        { name: 'Nakamata Miki', image: 'RT_NakamataMiki.jpeg' },
        { name: 'Nagase Mari', image: 'RT_NagaseMari.jpeg' }, // New member
        { name: 'Niino Fuka', image: 'RT_NiinoFuka.jpeg' }, // Name changed from Nino Fuka
        { name: 'Hashimoto Maki', image: 'RT_HashimotoMaki.jpeg' },
        { name: 'Hayama Rico', image: 'RT_HayamaRico.jpeg' },
        { name: 'Mizuno Noa', image: 'RT_MizunoNoa.jpeg' },
        { name: 'Momose Suzuna', image: 'RT_MomoseSuzuna.jpeg' },
        { name: 'Yoshikawa Umi', image: 'RT_YoshikawaUmi.jpeg' }
        // Hoshimiya Rei, Amane Kaho, Sakurai Rena removed as per new list
    ];

    // Objek terjemahan
    const translations = {
        id: {
            pageTitle: "Rain Tree Idola Sorter",
            mainTitle: "Rain Tree Idola Sorter",
            chooseCategory: "Pilih Kategori Sorter:",
            categoryGeneral: "Umum",
            categoryVisual: "Visual",
            categoryTalent: "Bakat",
            comedian: "Pelawak",
            progressText: "Proses: {current}/{total}",
            vsText: "VS",
            drawButton: "Seri (Draw)",
            resultsTitle: "Hasil Sorter Anda",
            downloadResults: "Unduh Hasil (Gambar)",
            shareResults: "Bagikan",
            restartButton: "Mulai Ulang",
            selectMemberHint: "Pilih Anggota", // New translation key for senbatsu slot
            // Member names (Indonesian) - Jika tidak ada terjemahan khusus, biarkan sama dengan nama Romaji
            'Asamiya Hinata': 'Asamiya Hinata',
            'Ayase Kotori': 'Ayase Kotori',
            'Ichihara Tsumugi': 'Ichihara Tsumugi',
            'Endo Rino': 'Endo Rino',
            'Katase Manaka': 'Katase Manaka',
            'Kato Shu': 'Kato Shu',
            'Kurosawa Karen': 'Kurosawa Karen',
            'Sato Rica': 'Sato Rica',
            'Suzuno Mio': 'Suzuno Mio',
            'Nakamata Miki': 'Nakamata Miki',
            'Nagase Mari': 'Nagase Mari',
            'Niino Fuka': 'Niino Fuka',
            'Hashimoto Maki': 'Hashimoto Maki',
            'Hayama Rico': 'Hayama Rico',
            'Mizuno Noa': 'Mizuno Noa',
            'Momose Suzuna': 'Momose Suzuna',
            'Yoshikawa Umi': 'Yoshikawa Umi',
            // Matchmaker page translations
            matchmakerTitle: "Pencari Jodoh Rain Tree",
            selectYourIdol: "Pilih Idola Anda:",
            selectPartnerIdol: "Pilih Idola Pasangan:",
            generateFortune: "Buat Ramalan Cinta",
            fortuneResult: "Hasil Ramalan Cinta",
            // Senbatsu page translations
            senbatsuTitle: "Formasi Senbatsu Rain Tree",
            selectSenbatsuMembers: "Pilih Jumlah Anggota Senbatsu:", // Updated key
            generateSenbatsu: "Buat Formasi Senbatsu", // This button is less crucial now, but kept
            senbatsuResult: "Formasi Senbatsu"
        },
        en: {
            pageTitle: "Rain Tree Idol Sorter",
            mainTitle: "Rain Tree Idol Sorter",
            chooseCategory: "Choose Sorter Category:",
            categoryGeneral: "General",
            categoryVisual: "Visual",
            categoryTalent: "Talent",
            comedian: "Comedian",
            progressText: "Progress: {current}/{total}",
            vsText: "VS",
            drawButton: "Draw",
            resultsTitle: "Your Sorter Results",
            downloadResults: "Download Results (Image)",
            shareResults: "Share",
            restartButton: "Restart",
            selectMemberHint: "Select Member",
            // Member names (English)
            'Asamiya Hinata': 'Asamiya Hinata',
            'Ayase Kotori': 'Ayase Kotori',
            'Ichihara Tsumugi': 'Ichihara Tsumugi',
            'Endo Rino': 'Endo Rino',
            'Katase Manaka': 'Katase Manaka',
            'Kato Shu': 'Kato Shu',
            'Kurosawa Karen': 'Kurosawa Karen',
            'Sato Rica': 'Sato Rica',
            'Suzuno Mio': 'Suzuno Mio',
            'Nakamata Miki': 'Nakamata Miki',
            'Nagase Mari': 'Nagase Mari',
            'Niino Fuka': 'Niino Fuka',
            'Hashimoto Maki': 'Hashimoto Maki',
            'Hayama Rico': 'Hayama Rico',
            'Mizuno Noa': 'Mizuno Noa',
            'Momose Suzuna': 'Momose Suzuna',
            'Yoshikawa Umi': 'Yoshikawa Umi',
            // Matchmaker page translations
            matchmakerTitle: "Rain Tree Matchmaker",
            selectYourIdol: "Select Your Idol:",
            selectPartnerIdol: "Select Partner Idol:",
            generateFortune: "Generate Fortune",
            fortuneResult: "Fortune Result",
            // Senbatsu page translations
            senbatsuTitle: "Rain Tree Senbatsu Formation",
            selectSenbatsuMembers: "Select Number of Senbatsu Members:", // Updated key
            generateSenbatsu: "Generate Senbatsu Formation",
            senbatsuResult: "Senbatsu Formation"
        },
        jp: {
            pageTitle: "レインツリーアイドルソーター",
            mainTitle: "レインツリーアイドルソーター",
            chooseCategory: "ソーターのカテゴリを選択:",
            categoryGeneral: "総合",
            categoryVisual: "ビジュアル",
            categoryTalent: "才能",
            comedian: "コメディアン",
            progressText: "進行状況: {current}/{total}",
            vsText: "VS",
            drawButton: "引き分け",
            resultsTitle: "ソーター結果",
            downloadResults: "結果をダウンロード (画像)",
            shareResults: "シェア",
            restartButton: "再開",
            selectMemberHint: "メンバーを選択",
            // Member names (Japanese) - Updated with provided Kanji
            'Asamiya Hinata': '朝宮日向',
            'Ayase Kotori': '綾瀬ことり',
            'Ichihara Tsumugi': '市原紬希',
            'Endo Rino': '遠藤莉乃',
            'Katase Manaka': '片瀬真花',
            'Kato Shu': '加藤柊',
            'Kurosawa Karen': '黒澤禾恋',
            'Sato Rica': '佐藤莉華',
            'Suzuno Mio': '鈴野みお',
            'Nakamata Miki': '仲俣美希',
            'Nagase Mari': '永瀬真梨',
            'Niino Fuka': '新野楓果',
            'Hashimoto Maki': '橋本真希',
            'Hayama Rico': '葉山莉瑚',
            'Mizuno Noa': '水野乃愛',
            'Momose Suzuna': '百瀬紗菜',
            'Yoshikawa Umi': '吉川海未',
        }
    };

    let currentLang = 'id'; // Default language

    function setLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[currentLang] && translations[currentLang][key]) {
                let text = translations[currentLang][key];
                // Handle progress text dynamic replacement
                if (key === 'progressText' && currentComparison && totalComparisons) {
                    text = text.replace('{current}', currentComparison).replace('{total}', totalComparisons);
                }
                element.textContent = text;
            }
        });

        // Update active language button
        document.querySelectorAll('.language-selector .lang-button').forEach(button => {
            if (button.dataset.lang === currentLang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Update page-specific elements that might not use data-key
        if (window.location.pathname.includes('sorter.html')) {
            updateSorterUIForLanguage();
        } else if (window.location.pathname.includes('matchmaker.html')) {
            updateMatchmakerUIForLanguage();
        } else if (window.location.pathname.includes('senbatsu.html')) {
            updateSenbatsuUIForLanguage();
        }
    }

    function updateSorterUIForLanguage() {
        // Update idol names in battle if visible
        if (currentComparisonIdol1 && idol1Name) {
            idol1Name.textContent = translations[currentLang][currentComparisonIdol1.name] || currentComparisonIdol1.name;
        }
        if (currentComparisonIdol2 && idol2Name) {
            idol2Name.textContent = translations[currentLang][currentComparisonIdol2.name] || currentComparisonIdol2.name;
        }
        // Update results title if visible
        const resultsTitle = document.getElementById('results-title');
        if (resultsTitle && translations[currentLang].resultsTitle) {
            resultsTitle.textContent = translations[currentLang].resultsTitle;
        }
    }

    function updateMatchmakerUIForLanguage() {
        const matchmakerTitle = document.getElementById('matchmaker-title');
        if (matchmakerTitle && translations[currentLang].matchmakerTitle) {
            matchmakerTitle.textContent = translations[currentLang].matchmakerTitle;
        }
        const selectYourIdolLabel = document.getElementById('select-your-idol-label');
        if (selectYourIdolLabel && translations[currentLang].selectYourIdol) {
            selectYourIdolLabel.textContent = translations[currentLang].selectYourIdol;
        }
        const selectPartnerIdolLabel = document.getElementById('select-partner-idol-label');
        if (selectPartnerIdolLabel && translations[currentLang].selectPartnerIdol) {
            selectPartnerIdolLabel.textContent = translations[currentLang].selectPartnerIdol;
        }
        const generateFortuneButton = document.getElementById('generate-fortune');
        if (generateFortuneButton && translations[currentLang].generateFortune) {
            generateFortuneButton.textContent = translations[currentLang].generateFortune;
        }
        const fortuneResultTitle = document.getElementById('fortune-result-title');
        if (fortuneResultTitle && translations[currentLang].fortuneResult) {
            fortuneResultTitle.textContent = translations[currentLang].fortuneResult;
        }
        // Repopulate select dropdowns with translated names
        populateMemberSelect();
    }

    function updateSenbatsuUIForLanguage() {
        const senbatsuTitle = document.getElementById('senbatsu-title');
        if (senbatsuTitle && translations[currentLang].senbatsuTitle) {
            senbatsuTitle.textContent = translations[currentLang].senbatsuTitle;
        }
        const selectSenbatsuMembersLabel = document.querySelector('label[for="senbatsu-size-select"]'); // Correct selector for label
        if (selectSenbatsuMembersLabel && translations[currentLang].selectSenbatsuMembers) {
            selectSenbatsuMembersLabel.textContent = translations[currentLang].selectSenbatsuMembers;
        }
        const generateSenbatsuButton = document.getElementById('generate-senbatsu');
        if (generateSenbatsuButton && translations[currentLang].generateSenbatsu) {
            generateSenbatsuButton.textContent = translations[currentLang].generateSenbatsu;
        }
        const senbatsuResultTitle = document.getElementById('senbatsu-result-title');
        if (senbatsuResultTitle && translations[currentLang].senbatsuResult) {
            senbatsuResultTitle.textContent = translations[currentLang].senbatsuResult;
        }
        // Update hint text in slots if they exist
        document.querySelectorAll('.senbatsu-slot p[data-key="selectMemberHint"]').forEach(p => {
            p.textContent = translations[currentLang].selectMemberHint;
        });
        // Repopulate senbatsu size dropdown
        populateSenbatsuSizeSelect(); // To update 'Anggota' text if lang changes
    }

    // Fungsi Debugging (dapat dinonaktifkan dengan menghapus div #debug-messages dari HTML)
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
        console.log("DEBUG: ", msg); // Keep for console visibility
    }

    // ----- Sorter Logic -----
    let allMembers = []; // Will hold members with their category-specific data
    let currentCategoryMembers = []; // Members for the current sorting category
    let comparisons = [];
    let currentComparison = 0;
    let totalComparisons = 0;
    let currentComparisonIdol1 = null;
    let currentComparisonIdol2 = null;
    let memberScores = new Map(); // Map to store memberName -> score for sorting results

    const categorySelection = document.getElementById('category-selection');
    const sorterSection = document.getElementById('sorter-section');
    const resultsSection = document.getElementById('results-section');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    const idol1Card = document.getElementById('idol-1');
    const idol2Card = document.getElementById('idol-2');
    const idol1Img = idol1Card?.querySelector('img');
    const idol1Name = idol1Card?.querySelector('.idol-name');
    const idol2Img = idol2Card?.querySelector('img');
    const idol2Name = idol2Card?.querySelector('.idol-name');
    const drawButton = document.getElementById('draw-button');
    const restartButton = document.getElementById('restart-sorter');

    // Load category data (if applicable for future expansions)
    // For now, assume all members are in 'general'
    function loadCategoryData(category) {
        addDebugMessage(`Loading category data for: ${category}`);
        // In a real scenario, you might load different member sets or stats here
        // For now, allMembers is just the base 'members' array
        allMembers = [...members]; // Create a copy
        addDebugMessage(`Total members loaded: ${allMembers.length}`);
    }

    function initializeSorter(category) {
        addDebugMessage(`Initializing sorter for category: ${category}`);
        loadCategoryData(category);

        currentCategoryMembers = shuffleArray([...allMembers]); // Shuffled for initial battle presentation

        // Initialize scores for all members
        memberScores.clear();
        currentCategoryMembers.forEach(member => {
            memberScores.set(member.name, 0); // Start with 0 wins
        });

        // Build all pairwise comparisons
        comparisons = buildComparisons(currentCategoryMembers);
        currentComparison = 0;
        totalComparisons = comparisons.length;

        addDebugMessage(`Total comparisons: ${totalComparisons}`);

        categorySelection.classList.add('hidden');
        sorterSection.classList.remove('hidden');
        resultsSection.classList.add('hidden'); // Ensure results section is hidden

        updateProgress();
        startNextComparison();
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Updated: Builds all unique pairwise comparisons and shuffles them
    function buildComparisons(membersArray) { // Now accepts the members array directly
        let comparisons = [];
        for (let i = 0; i < membersArray.length; i++) {
            for (let j = i + 1; j < membersArray.length; j++) {
                // Store actual member objects for comparison
                comparisons.push([membersArray[i], membersArray[j]]);
            }
        }
        // Shuffle the order of comparisons to make battles random
        return shuffleArray(comparisons);
    }

    function updateProgress() {
        const percentage = totalComparisons > 0 ? (currentComparison / totalComparisons) * 100 : 0;
        if (progressBar) {
            progressBar.style.width = `${percentage}%`;
        }
        if (progressText) {
            progressText.textContent = translations[currentLang].progressText
                .replace('{current}', currentComparison)
                .replace('{total}', totalComparisons);
        }
        addDebugMessage(`Progress: ${currentComparison}/${totalComparisons} (${percentage.toFixed(2)}%)`);
    }

    function startNextComparison() {
        addDebugMessage("Starting next comparison.");
        if (currentComparison >= totalComparisons) {
            showResults();
            return;
        }

        // Get actual member objects from the pre-built comparisons array
        currentComparisonIdol1 = comparisons[currentComparison][0];
        currentComparisonIdol2 = comparisons[currentComparison][1];

        if (!currentComparisonIdol1 || !currentComparisonIdol2) {
            addDebugMessage("ERROR: One or both idols for comparison are undefined. Aborting comparison.");
            showResults(); // Try to show results or handle error gracefully
            return;
        }

        displayBattle(currentComparisonIdol1, currentComparisonIdol2);
    }

    function displayBattle(idol1, idol2) {
        addDebugMessage(`displayBattle called for ${idol1.name} VS ${idol2.name}`);

        // Defensive checks to ensure elements exist before manipulating them
        if (!idol1Card || !idol2Card || !idol1Img || !idol1Name || !idol2Img || !idol2Name) {
            addDebugMessage("ERROR: displayBattle: One or more idol elements are NULL, cannot display battle. Check sorter.html IDs.");
            return;
        }

        idol1Card.dataset
