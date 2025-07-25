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
        { name: 'Nino Fuka', image: 'RT_NinoFuka.jpeg' }, // Name changed from Nino Fuka
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

        idol1Card.dataset.name = idol1.name;
        idol1Img.src = `images/${idol1.image}`;
        idol1Name.textContent = translations[currentLang][idol1.name] || idol1.name;

        idol2Card.dataset.name = idol2.name;
        idol2Img.src = `images/${idol2.image}`;
        idol2Name.textContent = translations[currentLang][idol2.name] || idol2.name;
        addDebugMessage(`Displaying battle: ${idol1.name} VS ${idol2.name}`);
    }

    function handleChoice(winnerName) {
        addDebugMessage(`Choice made: ${winnerName}`);

        // Increment winner's score
        if (memberScores.has(winnerName)) {
            memberScores.set(winnerName, memberScores.get(winnerName) + 1);
            addDebugMessage(`${winnerName} score: ${memberScores.get(winnerName)}`);
        } else {
            addDebugMessage(`ERROR: ${winnerName} not found in memberScores map.`);
        }

        currentComparison++;
        updateProgress();
        startNextComparison();
    }

    function handleDraw() { // Function for Draw button
        addDebugMessage("Draw selected. No score changes for this round.");
        currentComparison++;
        updateProgress();
        startNextComparison();
    }

    function showResults() {
        addDebugMessage("Sorting complete. Displaying results based on scores.");
        sorterSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');

        const resultsList = document.getElementById('results-list');
        resultsList.innerHTML = ''; // Clear previous results

        // Convert Map to array, sort by score (descending), then by translated name (alphabetical for ties)
        const finalRankedMembers = Array.from(memberScores.entries()) // [[name, score], ...]
            .map(([name, score]) => ({ // Convert to object {name, score, image}
                name: name,
                score: score,
                image: members.find(m => m.name === name)?.image // Find original image from the main 'members' array
            }))
            .sort((a, b) => {
                // Primary sort: by score (descending)
                if (b.score !== a.score) {
                    return b.score - a.score;
                }
                // Secondary sort: by translated name (ascending) for ties
                const nameA = translations[currentLang][a.name] || a.name;
                const nameB = translations[currentLang][b.name] || b.name;
                return nameA.localeCompare(nameB);
            });

        addDebugMessage("Generating results list.");
        finalRankedMembers.forEach((member, index) => {
            const listItem = document.createElement('div');
            listItem.classList.add('result-item');
            listItem.innerHTML = `
                <span class="rank">${index + 1}.</span>
                <img src="images/${member.image}" alt="${member.name}" class="result-img">
                <span class="result-name">${translations[currentLang][member.name] || member.name}</span>
                <span class="result-score"> (${member.score} wins)</span> `;
            resultsList.appendChild(listItem);
        });

        const resultsTitle = document.getElementById('results-title');
        if (resultsTitle) {
            resultsTitle.textContent = translations[currentLang].resultsTitle;
        }

        // Add event listeners for results actions
        document.getElementById('download-results').onclick = () => {
            captureResultsImage();
        };
        document.getElementById('share-results').onclick = () => {
            shareResults();
        };
    }

    function captureResultsImage() {
        const resultsSectionToCapture = document.getElementById('results-section');
        if (resultsSectionToCapture) {
            addDebugMessage("Capturing results image.");
            // Temporarily clone and make visible for accurate capture
            const clone = resultsSectionToCapture.cloneNode(true);
            clone.style.display = 'block';
            clone.style.position = 'absolute';
            clone.style.left = '-9999px'; // Move off-screen
            clone.style.width = resultsSectionToCapture.offsetWidth + 'px'; // Maintain width
            clone.style.backgroundColor = '#ffffff'; // Ensure white background

            document.body.appendChild(clone);

            html2canvas(clone, {
                useCORS: true,
                scale: 2,
                backgroundColor: '#ffffff'
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = `RainTreeIdolSorter_Results_${currentLang}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
                clone.remove();
                addDebugMessage("Results image captured and downloaded.");
            }).catch(error => {
                addDebugMessage(`ERROR: HTML2Canvas results capture failed: ${error.message}`);
                console.error("HTML2Canvas results capture failed:", error);
                clone.remove();
            });
        } else {
            addDebugMessage("ERROR: Results section not found for capture.");
        }
    }

    function shareResults() {
        addDebugMessage("Sharing results (functionality not fully implemented, typically relies on browser Share API or social media SDKs).");
        if (navigator.share) {
            // This is a placeholder. Actual sharing requires generating the image or text.
            navigator.share({
                title: translations[currentLang].pageTitle,
                text: translations[currentLang].resultsTitle,
                url: window.location.href
            }).then(() => addDebugMessage('Share successful')).catch((error) => addDebugMessage(`Share failed: ${error}`));
        } else {
            alert("Fitur share tidak didukung di browser ini.");
        }
    }

    // Event Listeners for Sorter
    if (window.location.pathname.includes('sorter.html')) {
        document.querySelectorAll('.category-buttons button').forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;
                addDebugMessage(`Category selected: ${category}`);
                initializeSorter(category);
            });
        });

        idol1Card?.addEventListener('click', () => {
            addDebugMessage(`Idol 1 card clicked (${idol1Card.dataset.name}).`);
            handleChoice(idol1Card.dataset.name);
        });
        idol2Card?.addEventListener('click', () => {
            addDebugMessage(`Idol 2 card clicked (${idol2Card.dataset.name}).`);
            handleChoice(idol2Card.dataset.name);
        });
        drawButton?.addEventListener('click', handleDraw); // Use the new handleDraw function

        restartButton?.addEventListener('click', () => {
            addDebugMessage("Restart button clicked.");
            location.reload(); // Simple reload to restart
        });

        // Initial language setup for sorter page
        setLanguage('id'); // Default language
        addDebugMessage("Sorter page script fully executed.");
    }

    // ----- Matchmaker Logic -----
    if (window.location.pathname.includes('matchmaker.html')) {
        const yourIdolSelect = document.getElementById('your-idol-select');
        const partnerIdolSelect = document.getElementById('partner-idol-select');
        const generateFortuneButton = document.getElementById('generate-fortune');
        const fortuneResultDiv = document.getElementById('fortune-result');
        const fortuneResultTitle = document.getElementById('fortune-result-title');
        const matchResultCard = document.getElementById('match-result-card');
        const yourIdolImage = document.getElementById('your-idol-image');
        const yourIdolName = document.getElementById('your-idol-name');
        const partnerIdolImage = document.getElementById('partner-idol-image');
        const partnerIdolName = document.getElementById('partner-idol-name');
        const fortuneText = document.getElementById('fortune-text');
        const downloadFortuneButton = document.getElementById('download-fortune');

        function populateMemberSelect() {
            yourIdolSelect.innerHTML = '<option value="">Pilih Idola Anda</option>';
            partnerIdolSelect.innerHTML = '<option value="">Pilih Idola Pasangan</option>';
            members.forEach(member => {
                const translatedName = translations[currentLang][member.name] || member.name;
                const option1 = document.createElement('option');
                option1.value = member.name;
                option1.textContent = translatedName;
                yourIdolSelect.appendChild(option1);

                const option2 = document.createElement('option');
                option2.value = member.name;
                option2.textContent = translatedName;
                partnerIdolSelect.appendChild(option2);
            });
        }

        // Dummy fortune logic for demonstration
        function generateFortune() {
            const yourIdolNameVal = yourIdolSelect.value;
            const partnerIdolNameVal = partnerIdolSelect.value;

            if (!yourIdolNameVal || !partnerIdolNameVal) {
                alert("Mohon pilih kedua idola untuk ramalan.");
                return;
            }

            const yourIdol = members.find(m => m.name === yourIdolNameVal);
            const partnerIdol = members.find(m => m.name === partnerIdolNameVal);

            if (!yourIdol || !partnerIdol) {
                alert("Idola tidak ditemukan.");
                return;
            }

            // Simple hash-based fortune for demo
            const fortuneScores = {
                'Ayase Kotori_Endo Rino': 'Perfect match! Cinta sejati!',
                'Endo Rino_Ayase Kotori': 'Perfect match! Cinta sejati!',
                'Yoshikawa Umi_Mizuno Noa': 'Koneksi kuat, masa depan cerah!',
                'Mizuno Noa_Yoshikawa Umi': 'Koneksi kuat, masa depan cerah!',
                // Add more specific pairings or a generic fallback
            };
            const fortuneKey = `${yourIdol.name}_${partnerIdol.name}`;
            const reverseFortuneKey = `${partnerIdol.name}_${yourIdol.name}`;

            let fortuneResultText = fortuneScores[fortuneKey] || fortuneScores[reverseFortuneKey];

            if (!fortuneResultText) {
                // Fallback generic fortune
                const seed = yourIdol.name.charCodeAt(0) + partnerIdol.name.charCodeAt(0);
                if (seed % 3 === 0) {
                    fortuneResultText = "Sangat cocok! Ada ikatan yang kuat di antara kalian.";
                } else if (seed % 3 === 1) {
                    fortuneResultText = "Cukup cocok. Ada potensi untuk hubungan yang lebih dalam.";
                } else {
                    fortuneResultText = "Membutuhkan usaha. Perbedaan bisa membuat hubungan menarik!";
                }
            }


            yourIdolImage.src = `images/${yourIdol.image}`;
            yourIdolName.textContent = translations[currentLang][yourIdol.name] || yourIdol.name;
            partnerIdolImage.src = `images/${partnerIdol.image}`;
            partnerIdolName.textContent = translations[currentLang][partnerIdol.name] || partnerIdol.name;
            fortuneText.textContent = fortuneResultText;

            fortuneResultDiv.classList.remove('hidden');
            matchResultCard.classList.remove('hidden'); // Ensure the card itself is visible
            fortuneResultTitle.textContent = translations[currentLang].fortuneResult;
        }

        generateFortuneButton?.addEventListener('click', generateFortune);

        downloadFortuneButton?.addEventListener('click', () => {
            const cardToCapture = matchResultCard; // Use the actual card element
            if (cardToCapture) {
                addDebugMessage("Attempting to capture match result card.");
                html2canvas(cardToCapture, {
                    useCORS: true,
                    scale: 2,
                    backgroundColor: '#ffffff'
                }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = `rain_tree_love_fortune_${currentLang}.png`;
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                    addDebugMessage("Match result card captured and downloaded.");
                }).catch(error => {
                    addDebugMessage(`ERROR: HTML2Canvas download failed: ${error.message}`);
                    console.error("HTML2Canvas download failed:", error);
                });
            } else {
                addDebugMessage("ERROR: Match result card not found for download.");
            }
        });

        // Initial setup for matchmaker page
        setLanguage('id'); // Default language for matchmaker page
        populateMemberSelect(); // Initial population of dropdown
        addDebugMessage("Matchmaker page script fully executed.");
    }

    // ----- Senbatsu Logic -----
    if (window.location.pathname.includes('senbatsu.html')) {
        const senbatsuSizeSelect = document.getElementById('senbatsu-size-select'); // Renamed from senbatsuSelect
        const generateSenbatsuButton = document.getElementById('generate-senbatsu'); // This button is less crucial now, but kept
        const senbatsuFormationDiv = document.getElementById('senbatsu-formation');
        const senbatsuSlotsContainer = document.getElementById('senbatsu-slots-container'); // New container for slots
        const senbatsuResultTitle = document.getElementById('senbatsu-result-title');
        const downloadSenbatsuButton = document.getElementById('download-senbatsu');
        const senbatsuResultCard = document.getElementById('senbatsu-result-card'); // Ensure this ID exists in HTML

        let assignedSenbatsuMembers = new Map(); // Map: slotIndex -> memberObject

        function populateSenbatsuSizeSelect() {
            senbatsuSizeSelect.innerHTML = '<option value="">Pilih Jumlah</option>';
            const maxMembers = members.length;
            const commonSizes = [1, 3, 5, 7, 10, 12, 16, 17]; // Example common senbatsu sizes

            commonSizes.forEach(size => {
                if (size <= maxMembers) {
                    const option = document.createElement('option');
                    option.value = size;
                    option.textContent = `${size} Anggota`;
                    senbatsuSizeSelect.appendChild(option);
                }
            });
            // Also add max members if not already in commonSizes
            if (!commonSizes.includes(maxMembers)) {
                const option = document.createElement('option');
                option.value = maxMembers;
                option.textContent = `${maxMembers} Anggota`;
                senbatsuSizeSelect.appendChild(option);
            }
        }

        function getSenbatsuLayout(num) {
            // Define specific layouts for common senbatsu sizes to ensure "inverted pyramid" look
            // Each array element represents a row size
            switch (num) {
                case 1: return [1];
                case 2: return [2];
                case 3: return [2, 1];
                case 4: return [2, 2];
                case 5: return [3, 2];
                case 6: return [3, 3];
                case 7: return [4, 3]; // Common inverted pyramid
                case 8: return [4, 4];
                case 9: return [5, 4];
                case 10: return [5, 5];
                case 11: return [6, 5];
                case 12: return [6, 6];
                case 13: return [7, 6];
                case 14: return [7, 7];
                case 15: return [8, 7];
                case 16: return [7, 6, 3]; // Classic 16-member senbatsu with front/middle/back
                case 17: return [9, 8];
                default:
                    // Fallback for other numbers: try to create roughly equal rows
                    let layout = [];
                    let remaining = num;
                    let numRows = Math.ceil(Math.sqrt(num)); // Estimate number of rows
                    if (numRows === 0) numRows = 1;

                    for (let i = 0; i < numRows && remaining > 0; i++) {
                        let rowSize = Math.ceil(remaining / (numRows - i));
                        layout.push(currentRowSize);
                        remaining -= currentRowSize;
                        if (baseRowSize > 1) baseRowSize--; // Decrease row size for next row
                    }
                    return layout;
            }
        }

        function generateSenbatsuSlots(numSlots) {
            senbatsuSlotsContainer.innerHTML = ''; // Clear existing slots
            assignedSenbatsuMembers.clear(); // Reset assigned members

            const layout = getSenbatsuLayout(numSlots);
            let slotIndex = 0;

            layout.forEach((rowSize, rowIndex) => {
                const rowDiv = document.createElement('div');
                rowDiv.classList.add('senbatsu-row');
                rowDiv.classList.add(`senbatsu-row-${rowIndex + 1}`); // For specific row styling

                for (let i = 0; i < rowSize; i++) {
                    const slotDiv = document.createElement('div');
                    slotDiv.classList.add('senbatsu-slot');
                    slotDiv.dataset.slotIndex = slotIndex;
                    slotDiv.innerHTML = `<p data-key="selectMemberHint">Pilih Anggota</p>`; // Initial hint
                    slotDiv.querySelector('p').textContent = translations[currentLang].selectMemberHint;

                    slotDiv.addEventListener('click', () => handleSlotClick(slotDiv, slotIndex));
                    rowDiv.appendChild(slotDiv);
                    slotIndex++;
                }
                senbatsuSlotsContainer.appendChild(rowDiv);
            });
            addDebugMessage(`Generated ${numSlots} senbatsu slots with layout: ${JSON.stringify(layout)}`);
        }

        function handleSlotClick(slotDiv, slotIndex) {
            addDebugMessage(`Slot ${slotIndex} clicked.`);
            // If there's already a member selection dropdown open for this slot, close it
            const existingSelect = slotDiv.querySelector('select');
            if (existingSelect) {
                existingSelect.remove();
                // If a member was previously assigned, redisplay them
                const currentAssigned = assignedSenbatsuMembers.get(slotIndex);
                if (currentAssigned) {
                    displayMemberInSlot(slotDiv, currentAssigned);
                } else {
                    slotDiv.innerHTML = `<p data-key="selectMemberHint">Pilih Anggota</p>`;
                    slotDiv.querySelector('p').textContent = translations[currentLang].selectMemberHint;
                }
                return; // Clicked on an open dropdown, just close it or revert to member display.
            }

            // Create a new select element for member selection
            const memberSelect = document.createElement('select');
            memberSelect.classList.add('member-select-dropdown');
            memberSelect.innerHTML = '<option value="">Pilih...</option>'; // Default option

            // Add all available members to the dropdown
            members.forEach(member => { // Iterate through all members
                // Check if member is already assigned to *any other* slot
                const isAssignedToOtherSlot = Array.from(assignedSenbatsuMembers.entries()).some(([idx, assignedMember]) => 
                    idx !== slotIndex && assignedMember.name === member.name
                );

                if (!isAssignedToOtherSlot) {
                    const option = document.createElement('option');
                    option.value = member.name;
                    option.textContent = translations[currentLang][member.name] || member.name;
                    memberSelect.appendChild(option);
                }
            });

            // Set current selected member if already assigned to this slot
            const currentAssignedMember = assignedSenbatsuMembers.get(slotIndex);
            if (currentAssignedMember) {
                memberSelect.value = currentAssignedMember.name;
            }

            // Append dropdown to slot
            slotDiv.innerHTML = ''; // Clear current content
            slotDiv.appendChild(memberSelect);
            memberSelect.focus(); // Auto-focus the dropdown

            // Handle member selection
            memberSelect.addEventListener('change', (event) => {
                const selectedMemberName = event.target.value;
                if (selectedMemberName) {
                    const selectedMember = members.find(m => m.name === selectedMemberName);
                    if (selectedMember) {
                        assignedSenbatsuMembers.set(slotIndex, selectedMember); // Assign member to slot
                        displayMemberInSlot(slotDiv, selectedMember); // Update slot UI
                        addDebugMessage(`Assigned ${selectedMember.name} to slot ${slotIndex}`);
                    }
                } else {
                    // Option "Pilih..." selected, unassign member from this slot
                    const previouslyAssigned = assignedSenbatsuMembers.get(slotIndex);
                    if (previouslyAssigned) {
                        assignedSenbatsuMembers.delete(slotIndex); // Remove assignment
                        slotDiv.innerHTML = `<p data-key="selectMemberHint">Pilih Anggota</p>`; // Reset slot UI
                        slotDiv.querySelector('p').textContent = translations[currentLang].selectMemberHint;
                        addDebugMessage(`Unassigned member from slot ${slotIndex}`);
                    }
                }
            });

            // If dropdown loses focus without selection, revert
            memberSelect.addEventListener('blur', () => {
                setTimeout(() => { // Small delay to allow change event to fire first
                    if (!slotDiv.querySelector('select')) { // Only if dropdown hasn't been replaced by member
                        const currentAssigned = assignedSenbatsuMembers.get(slotIndex);
                        if (currentAssigned) {
                            displayMemberInSlot(slotDiv, currentAssigned);
                        } else {
                            slotDiv.innerHTML = `<p data-key="selectMemberHint">Pilih Anggota</p>`;
                            slotDiv.querySelector('p').textContent = translations[currentLang].selectMemberHint;
                        }
                    }
                }, 100);
            });
        }

        function displayMemberInSlot(slotDiv, member) {
            slotDiv.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <p>${translations[currentLang][member.name] || member.name}</p>
            `;
            // Add a remove button to unassign the member
            const removeButton = document.createElement('button');
            removeButton.classList.add('remove-slot-member-btn');
            removeButton.textContent = 'X';
            removeButton.onclick = (e) => {
                e.stopPropagation(); // Prevent handleSlotClick from firing on slot itself
                const slotIndex = parseInt(slotDiv.dataset.slotIndex);
                assignedSenbatsuMembers.delete(slotIndex);
                slotDiv.innerHTML = `<p data-key="selectMemberHint">Pilih Anggota</p>`;
                slotDiv.querySelector('p').textContent = translations[currentLang].selectMemberHint;
                // When a member is removed, the dropdowns in other slots need to be updated
                // to reflect the newly available member.
                // This is implicitly handled by `handleSlotClick` regenerating options,
                // but for already open dropdowns or future clicks, it will be correct.
            };
            slotDiv.appendChild(removeButton);
        }

        senbatsuSizeSelect?.addEventListener('change', () => {
            const numSlots = parseInt(senbatsuSizeSelect.value);
            if (numSlots > 0) {
                generateSenbatsuSlots(numSlots);
                senbatsuFormationDiv.classList.remove('hidden');
                senbatsuResultTitle.textContent = translations[currentLang].senbatsuResult;
            } else {
                senbatsuFormationDiv.classList.add('hidden');
                senbatsuSlotsContainer.innerHTML = '';
            }
        });

        generateSenbatsuButton?.addEventListener('click', () => {
            const numSlots = parseInt(senbatsuSizeSelect.value);
            if (numSlots > 0) {
                if (assignedSenbatsuMembers.size !== numSlots) {
                    alert("Mohon isi semua slot senbatsu terlebih dahulu!");
                    return;
                }
                // This button now primarily functions as a confirmation/trigger for download/share
                // if all slots are filled.
                senbatsuFormationDiv.classList.remove('hidden'); // Ensure it's visible for capture
                // No further generation needed here as it's done on dropdown change
            } else {
                alert("Mohon pilih jumlah anggota senbatsu terlebih dahulu!");
            }
        });

        downloadSenbatsuButton?.addEventListener('click', () => {
            if (senbatsuResultCard) {
                const numSlots = parseInt(senbatsuSizeSelect.value);
                if (assignedSenbatsuMembers.size !== numSlots) {
                    alert("Mohon isi semua slot senbatsu terlebih dahulu sebelum mengunduh!");
                    return;
                }

                addDebugMessage("Attempting to capture senbatsu result card.");
                html2canvas(senbatsuResultCard, {
                    useCORS: true,
                    scale: 2,
                    backgroundColor: '#ffffff'
                }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = `rain_tree_senbatsu_${currentLang}.png`;
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                    addDebugMessage("Senbatsu result card captured and downloaded.");
                }).catch(error => {
                    addDebugMessage(`ERROR: HTML2Canvas senbatsu download failed: ${error.message}`);
                    console.error("HTML2Canvas senbatsu download failed:", error);
                });
            } else {
                addDebugMessage("ERROR: Senbatsu result card not found for download.");
            }
        });

        // Initial setup for senbatsu page
        populateSenbatsuSizeSelect(); // Populate the new size select dropdown
        setLanguage('id'); // Default language for senbatsu page
        addDebugMessage("Senbatsu page script fully executed.");
    } // Closing bracket for if (window.location.pathname.includes('senbatsu.html'))

    // Set initial language for any common elements (like language buttons themselves)
    document.querySelectorAll('.language-selector .lang-button').forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });
    });

    // Handle initial language setting based on current page
    if (window.location.pathname.includes('sorter.html')) {
        setLanguage('id'); // Default language for sorter page
    } else if (window.location.pathname.includes('matchmaker.html')) {
        setLanguage('id'); // Default language for matchmaker page
    } else if (window.location.pathname.includes('senbatsu.html')) {
        setLanguage('id'); // Default language for senbatsu page
    } else {
        setLanguage('id'); // Default for other pages like index.html
    }
}); // Closing bracket for DOMContentLoaded
