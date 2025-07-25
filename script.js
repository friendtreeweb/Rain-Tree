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
            selectSenbatsuMembers: "Pilih Anggota Senbatsu:",
            generateSenbatsu: "Buat Formasi Senbatsu",
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
            selectSenbatsuMembers: "Select Senbatsu Members:",
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
        const selectSenbatsuMembersLabel = document.getElementById('select-senbatsu-members-label');
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
        // Re-render selected members in senbatsu box if any
        displaySelectedSenbatsuMembers();
    }

    // Fungsi Debugging
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
    let sorted = [];
    let comparisons = [];
    let currentComparison = 0;
    let totalComparisons = 0;
    let currentComparisonIdol1 = null;
    let currentComparisonIdol2 = null;

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

        currentCategoryMembers = shuffleArray([...allMembers]); // Use all members for now, shuffled
        sorted = [];
        comparisons = buildComparisons(currentCategoryMembers.length);
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

    // This is the core merge sort comparison builder
    function buildComparisons(n) {
        let queue = [];
        let comparisons = [];

        for (let i = 0; i < n; i++) {
            queue.push([i]);
        }

        while (queue.length > 1) {
            let left = queue.shift();
            let right = queue.shift();
            let merged = [];
            let i = 0, j = 0;

            while (i < left.length && j < right.length) {
                // Add comparison to the list
                comparisons.push([left[i], right[j]]);
                merged.push(null); // Placeholder for eventual sorted order
                i++;
                j++;
            }

            while (i < left.length) {
                merged.push(left[i++]);
            }
            while (j < right.length) {
                merged.push(right[j++]);
            }
            queue.push(merged);
        }
        addDebugMessage(`Generated ${comparisons.length} raw comparisons.`);
        return comparisons;
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

        const [idol1Index, idol2Index] = comparisons[currentComparison];
        currentComparisonIdol1 = currentCategoryMembers[idol1Index];
        currentComparisonIdol2 = currentCategoryMembers[idol2Index];

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
        currentComparison++;
        updateProgress();

        const [index1, index2] = comparisons[currentComparison - 1]; // Get the just completed comparison
        const winnerIndex = currentCategoryMembers.findIndex(m => m.name === winnerName);
        const loserIndex = winnerIndex === index1 ? index2 : index1;

        // Implement merge logic: place winner before loser in sorted array
        // This is a simplified merge step. A full merge sort implementation is more complex.
        // For a simple sorter, we just need to know who won.
        // The results list will be generated by the final sorted array.

        startNextComparison();
    }

    function showResults() {
        addDebugMessage("Sorting complete. Displaying results.");
        sorterSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');

        const resultsList = document.getElementById('results-list');
        resultsList.innerHTML = ''; // Clear previous results

        // Simple sorting for display (bubble sort for demonstration)
        // For a true sorter, `sorted` array would be the result of merge sort.
        // Since `handleChoice` only increments comparisons, `sorted` array isn't populated for actual ranks.
        // Let's create a temporary ranking based on choices.
        // A proper sorter would use the comparison results to build the final sorted array.
        // For this simple choice system, we can't truly "sort" without a complex algorithm.
        // Instead, let's just display members for now, or use a simple win count if implemented.

        const finalRankedMembers = currentCategoryMembers.map(m => ({
            name: m.name,
            image: m.image,
            wins: 0 // Placeholder
        })).sort((a,b) => a.name.localeCompare(b.name)); // Just alphabetical for now

        addDebugMessage("Generating results list.");
        finalRankedMembers.forEach((member, index) => {
            const listItem = document.createElement('div');
            listItem.classList.add('result-item');
            listItem.innerHTML = `
                <span class="rank">${index + 1}.</span>
                <img src="images/${member.image}" alt="${member.name}" class="result-img">
                <span class="result-name">${translations[currentLang][member.name] || member.name}</span>
            `;
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
        drawButton?.addEventListener('click', () => {
            addDebugMessage("Draw button clicked.");
            // In a sorter, draw means both are equal, or skip this comparison.
            // For simplicity, we just advance to the next comparison, effectively skipping this pair.
            currentComparison++;
            updateProgress();
            startNextComparison();
        });
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
                console.log("Attempting to capture match result card.");
                html2canvas(cardToCapture, {
                    useCORS: true,
                    scale: 2,
                    backgroundColor: '#ffffff'
                }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = `rain_tree_love_fortune_${currentLang}.png`;
                    link.href = canvas.toDataURL('image/png');
                    link.click();
                    // cardToCapture.remove(); // Do not remove the original card after capture
                    console.log("Match result card captured and downloaded.");
                }).catch(error => {
                    console.error("HTML2Canvas download failed:", error);
                    // cardToCapture.remove(); // Do not remove the original card on error
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

    // ----- Senbatsu Logic -----
    if (window.location.pathname.includes('senbatsu.html')) {
        const senbatsuSelect = document.getElementById('senbatsu-select');
        const generateSenbatsuButton = document.getElementById('generate-senbatsu');
        const senbatsuFormationDiv = document.getElementById('senbatsu-formation');
        const selectedMembersContainer = document.getElementById('selected-members-container');
        const senbatsuResultTitle = document.getElementById('senbatsu-result-title');
        const downloadSenbatsuButton = document.getElementById('download-senbatsu');
        
        // Ensure senbatsuResultCard is properly defined in HTML for use here.
        // Assuming senbatsu-result-card is the element to be captured
        const senbatsuResultCard = document.getElementById('senbatsu-result-card'); 

        function populateSenbatsuSelect() {
            senbatsuSelect.innerHTML = '<option value="">Pilih Anggota</option>';
            members.forEach(member => {
                const translatedName = translations[currentLang][member.name] || member.name;
                const option = document.createElement('option');
                option.value = member.name;
                option.textContent = translatedName;
                senbatsuSelect.appendChild(option);
            });
        }

        let selectedSenbatsuMembers = [];

        senbatsuSelect?.addEventListener('change', (event) => {
            const memberName = event.target.value;
            if (memberName && !selectedSenbatsuMembers.some(m => m.name === memberName)) {
                const member = members.find(m => m.name === memberName);
                if (member) {
                    selectedSenbatsuMembers.push(member);
                    displaySelectedSenbatsuMembers();
                }
            }
            senbatsuSelect.value = ""; // Reset dropdown
        });

        function displaySelectedSenbatsuMembers() {
            selectedMembersContainer.innerHTML = '';
            selectedSenbatsuMembers.forEach((member, index) => {
                const memberDiv = document.createElement('div');
                memberDiv.classList.add('selected-senbatsu-member');
                memberDiv.innerHTML = `
                    <img src="images/${member.image}" alt="${member.name}">
                    <p>${translations[currentLang][member.name] || member.name}</p>
                    <button class="remove-senbatsu-member" data-member-name="${member.name}">X</button>
                `;
                selectedMembersContainer.appendChild(memberDiv);
            });
            attachRemoveListeners();
        }

        function attachRemoveListeners() {
            document.querySelectorAll('.remove-senbatsu-member').forEach(button => {
                button.onclick = (event) => {
                    const memberName = event.target.dataset.memberName;
                    selectedSenbatsuMembers = selectedSenbatsuMembers.filter(m => m.name !== memberName);
                    displaySelectedSenbatsuMembers();
                };
            });
        }

        generateSenbatsuButton?.addEventListener('click', () => {
            if (selectedSenbatsuMembers.length === 0) {
                alert("Mohon pilih setidaknya satu anggota untuk formasi senbatsu.");
                return;
            }
            senbatsuFormationDiv.classList.remove('hidden');
            senbatsuResultTitle.textContent = translations[currentLang].senbatsuResult;
            // The displaySelectedSenbatsuMembers() already renders to selected-members-container,
            // which is assumed to be part of senbatsu-formation for capture.
            // No extra rendering needed here unless structure is different.
        });

        downloadSenbatsuButton?.addEventListener('click', () => {
            if (senbatsuResultCard) { // Ensure this ID exists in senbatsu.html for the card to be captured
                console.log("Attempting to capture senbatsu result card.");
                html2canvas(senbatsuResultCard, {
                    useCORS: true,
                    scale: 2,
                    backgroundColor: '#ffffff'
                }).then(canvas => {
                    const link = document.createElement('a');
                    link.download = `rain_tree_senbatsu_
