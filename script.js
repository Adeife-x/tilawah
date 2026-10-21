const surahs = [
      ["Al-Fatihah", "الفاتحة", 7], ["Al-Baqarah", "البقرة", 286], ["Ali 'Imran", "آل عمران", 200],
      ["An-Nisa", "النساء", 176], ["Al-Ma'idah", "المائدة", 120], ["Al-An'am", "الأنعام", 165],
      ["Al-A'raf", "الأعراف", 206], ["Al-Anfal", "الأنفال", 75], ["At-Tawbah", "التوبة", 129],
      ["Yunus", "يونس", 109], ["Hud", "هود", 123], ["Yusuf", "يوسف", 111],
      ["Ar-Ra'd", "الرعد", 43], ["Ibrahim", "إبراهيم", 52], ["Al-Hijr", "الحجر", 99],
      ["An-Nahl", "النحل", 128], ["Al-Isra", "الإسراء", 111], ["Al-Kahf", "الكهف", 110],
      ["Maryam", "مريم", 98], ["Ta-Ha", "طه", 135], ["Al-Anbiya", "الأنبياء", 112],
      ["Al-Hajj", "الحج", 78], ["Al-Mu'minun", "المؤمنون", 118], ["An-Nur", "النور", 64],
      ["Al-Furqan", "الفرقان", 77], ["Ash-Shu'ara", "الشعراء", 227], ["An-Naml", "النمل", 93],
      ["Al-Qasas", "القصص", 88], ["Al-'Ankabut", "العنكبوت", 69], ["Ar-Rum", "الروم", 60],
      ["Luqman", "لقمان", 34], ["As-Sajdah", "السجدة", 30], ["Al-Ahzab", "الأحزاب", 73],
      ["Saba", "سبأ", 54], ["Fatir", "فاطر", 45], ["Ya-Sin", "يس", 83],
      ["As-Saffat", "الصافات", 182], ["Sad", "ص", 88], ["Az-Zumar", "الزمر", 75],
      ["Ghafir", "غافر", 85], ["Fussilat", "فصلت", 54], ["Ash-Shuraa", "الشورى", 53],
      ["Az-Zukhruf", "الزخرف", 89], ["Ad-Dukhan", "الدخان", 59], ["Al-Jathiyah", "الجاثية", 37],
      ["Al-Ahqaf", "الأحقاف", 35], ["Muhammad", "محمد", 38], ["Al-Fath", "الفتح", 29],
      ["Al-Hujurat", "الحجرات", 18], ["Qaf", "ق", 45], ["Adh-Dhariyat", "الذاريات", 60],
      ["At-Tur", "الطور", 49], ["An-Najm", "النجم", 62], ["Al-Qamar", "القمر", 55],
      ["Ar-Rahman", "الرحمن", 78], ["Al-Waqi'ah", "الواقعة", 96], ["Al-Hadid", "الحديد", 29],
      ["Al-Mujadilah", "المجادلة", 22], ["Al-Hashr", "الحشر", 24], ["Al-Mumtahanah", "الممتحنة", 13],
      ["As-Saff", "الصف", 14], ["Al-Jumu'ah", "الجمعة", 11], ["Al-Munafiqun", "المنافقون", 11],
      ["At-Taghabun", "التغابن", 18], ["At-Talaq", "الطلاق", 12], ["At-Tahrim", "التحريم", 12],
      ["Al-Mulk", "الملك", 30], ["Al-Qalam", "القلم", 52], ["Al-Haqqah", "الحاقة", 52],
      ["Al-Ma'arij", "المعارج", 44], ["Nuh", "نوح", 28], ["Al-Jinn", "الجن", 28],
      ["Al-Muzzammil", "المزمل", 20], ["Al-Muddaththir", "المدثر", 56], ["Al-Qiyamah", "القيامة", 40],
      ["Al-Insan", "الإنسان", 31], ["Al-Mursalat", "المرسلات", 50], ["An-Naba", "النبأ", 40],
      ["An-Nazi'at", "النازعات", 46], ["'Abasa", "عبس", 42], ["At-Takwir", "التكوير", 29],
      ["Al-Infitar", "الانفطار", 19], ["Al-Mutaffifin", "المطففين", 36], ["Al-Inshiqaq", "الانشقاق", 25],
      ["Al-Buruj", "البروج", 22], ["At-Tariq", "الطارق", 17], ["Al-A'la", "الأعلى", 19],
      ["Al-Ghashiyah", "الغاشية", 26], ["Al-Fajr", "الفجر", 30], ["Al-Balad", "البلد", 20],
      ["Ash-Shams", "الشمس", 15], ["Al-Layl", "الليل", 21], ["Ad-Duhaa", "الضحى", 11],
      ["Ash-Sharh", "الشرح", 8], ["At-Tin", "التين", 8], ["Al-'Alaq", "العلق", 19],
      ["Al-Qadr", "القدر", 5], ["Al-Bayyinah", "البينة", 8], ["Az-Zalzalah", "الزلزلة", 8],
      ["Al-'Adiyat", "العاديات", 11], ["Al-Qari'ah", "القارعة", 11], ["At-Takathur", "التكاثر", 8],
      ["Al-'Asr", "العصر", 3], ["Al-Humazah", "الهمزة", 9], ["Al-Fil", "الفيل", 5],
      ["Quraysh", "قريش", 4], ["Al-Ma'un", "الماعون", 7], ["Al-Kawthar", "الكوثر", 3],
      ["Al-Kafirun", "الكافرون", 6], ["An-Nasr", "النصر", 3], ["Al-Masad", "المسد", 5],
      ["Al-Ikhlas", "الإخلاص", 4], ["Al-Falaq", "الفلق", 5], ["An-Nas", "الناس", 6]
    ].map(([name, arabic, verses], index) => ({ number: index + 1, name, arabic, verses }));

    const reciters = {
      Alafasy_128kbps: { name: "Mishary Rashid Alafasy", path: "mishary-alafasy/r1" },
      Abdul_Basit_Murattal_192kbps: { name: "Abdul Basit", path: "abdulbasit-abdulsamad/r3" },
      Husary_128kbps: { name: "Mahmoud Khalil Al-Husary", path: "mahmoud-husary/r1" }
    };
    const audio = document.getElementById("audio");
    const list = document.getElementById("surahList");
    const search = document.getElementById("search");
    const filter = document.getElementById("filter"); 
    const reciterSelect = document.getElementById("reciter");
    const progress = document.getElementById("progress");
    const playIcon = document.getElementById("playIcon");
    const status = document.getElementById("status");
    let currentSurah = surahs[0];
    let favorites = loadFavorites();

    function loadFavorites() {
      try {
        const saved = JSON.parse(localStorage.getItem("noor-favorites") || "[]");
        return new Set(Array.isArray(saved) ? saved.filter(Number.isInteger) : []);
      } catch (error) {
        console.error("Unable to read saved favorites.", error);
        return new Set();
      }
    }

    function saveFavorites() {
      try {
        localStorage.setItem("noor-favorites", JSON.stringify([...favorites]));
      } catch (error) {
        console.error("Unable to save favorites.", error);
        setStatus("Your favorites could not be saved on this device.", true);
      }
    }

    function icon(name) {
      if (name === "pause") {
        return '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5.5 4.5c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-11Zm6 0c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1h-1c-.55 0-1-.45-1-1v-11Z"/></svg>';
      }
      return '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6 4.5c0-.7.76-1.12 1.35-.74l8.1 5.15a1.28 1.28 0 0 1 0 2.18l-8.1 5.15A.87.87 0 0 1 6 15.5v-11Z"/></svg>';
    }

    function renderList() {
      const query = search.value.trim().toLocaleLowerCase();
      const visible = surahs.filter((surah) => {
        const matchesQuery = `${surah.name} ${surah.arabic} ${surah.number}`.toLocaleLowerCase().includes(query);
        return matchesQuery && (filter.value !== "favorites" || favorites.has(surah.number));
      });
      document.getElementById("result-count").textContent =
        `${visible.length} ${visible.length === 1 ? "surah" : "surahs"}${filter.value === "favorites" ? " saved" : " to explore"}`;
      list.replaceChildren();

      if (visible.length === 0) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.textContent = filter.value === "favorites" && !query
          ? "No saved surahs yet. Tap the heart on any surah to add it here."
          : "No surahs found. Try another search.";
        list.append(empty);
        return;
      }

      for (const surah of visible) {
        const card = document.createElement("article");
        card.className = `surah-card${currentSurah.number === surah.number ? " is-current" : ""}`;
        const number = document.createElement("span");
        number.className = "surah-number";
        number.textContent = String(surah.number).padStart(2, "0");

        const detail = document.createElement("div");
        detail.innerHTML = `<div class="surah-title"></div><div class="surah-detail"></div>`;
        detail.querySelector(".surah-title").textContent = surah.name;
        detail.querySelector(".surah-detail").textContent = `${surah.verses} verses`;

        const arabic = document.createElement("span");
        arabic.className = "surah-arabic";
        arabic.lang = "ar";
        arabic.dir = "rtl";
        arabic.textContent = surah.arabic;

        const play = document.createElement("button");
        play.className = "card-play";
        play.type = "button";
        play.setAttribute("aria-label", `Play Surah ${surah.name}`);
        play.setAttribute("aria-pressed", String(currentSurah.number === surah.number && !audio.paused));
        play.innerHTML = icon(currentSurah.number === surah.number && !audio.paused ? "pause" : "play");
        play.addEventListener("click", () => {
          if (currentSurah.number === surah.number) togglePlayback();
          else selectSurah(surah, true);
        });

        const favorite = document.createElement("button");
        favorite.className = "icon-button";
        favorite.type = "button";
        favorite.setAttribute("aria-label", `${favorites.has(surah.number) ? "Remove" : "Save"} ${surah.name} ${favorites.has(surah.number) ? "from" : "to"} favorites`);
        favorite.setAttribute("aria-pressed", String(favorites.has(surah.number)));
        favorite.innerHTML = `<svg width="16" height="16" viewBox="0 0 20 20" fill="${favorites.has(surah.number) ? "currentColor" : "none"}" aria-hidden="true"><path d="M10 17s-7-4.35-7-9.25A3.75 3.75 0 0 1 10 5.66a3.75 3.75 0 0 1 7 2.09C17 12.65 10 17 10 17Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`;
        favorite.addEventListener("click", () => {
          if (favorites.has(surah.number)) favorites.delete(surah.number);
          else favorites.add(surah.number);
          saveFavorites();
          renderList();
        });

        card.append(number, detail, arabic, play, favorite);
        list.append(card);
      }
    }

    function setStatus(message, isError = false) {
      status.textContent = message;
      status.classList.toggle("error", isError);
    }

    function handlePlaybackError(error) {
      if (error.name === "AbortError") return;
      console.error("Quran audio playback could not start.", error);
      setStatus("Could not start playback. Check your connection and try again.", true);
    }

    function fileNumber(value) {
      return String(value).padStart(3, "0");
    }

    function loadSurah(autoplay) {
      const reciter = reciterSelect.value;
      const file = `${fileNumber(currentSurah.number)}.mp3`;
      audio.src = `https://cdn.mp3quran.net/audio/${reciters[reciter].path}/${file}`;
      audio.load();
      updateNowPlaying();
      renderList();
      progress.value = "0";
      document.getElementById("elapsed").textContent = "0:00";
      document.getElementById("duration").textContent = "0:00";
      if (autoplay) {
        audio.play().catch(handlePlaybackError);
      }
    }

    function updateNowPlaying() {
      document.getElementById("nowTitle").textContent = `Surah ${currentSurah.name}`;
      document.getElementById("nowReciter").textContent =
        `${reciters[reciterSelect.value].name} · Full surah`;
    }

    function selectSurah(surah, autoplay) {
      currentSurah = surah;
      loadSurah(autoplay);
      setStatus(autoplay ? "Loading recitation…" : "Ready when you are");
    }

    function togglePlayback() {
      if (audio.paused) {
        audio.play().catch(handlePlaybackError);
      } else {
        audio.pause();
      }
    }

    function stepSurah(direction) {
      const nextIndex = currentSurah.number - 1 + direction;
      if (nextIndex < 0 || nextIndex >= surahs.length) {
        setStatus(direction > 0 ? "You have reached the end of the Quran." : "You are at the first surah.");
        return;
      }
      selectSurah(surahs[nextIndex], true);
    }

    function formatTime(seconds) {
      if (!Number.isFinite(seconds)) return "0:00";
      const minutes = Math.floor(seconds / 60);
      return `${minutes}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
    }

    document.getElementById("featuredPlay").addEventListener("click", () => selectSurah(surahs[0], true));
    document.getElementById("playPause").addEventListener("click", togglePlayback);
    document.getElementById("previous").addEventListener("click", () => stepSurah(-1));
    document.getElementById("next").addEventListener("click", () => stepSurah(1));
    search.addEventListener("input", renderList);
    filter.addEventListener("change", renderList);
    reciterSelect.addEventListener("change", () => {
      const wasPlaying = !audio.paused;
      loadSurah(wasPlaying);
      setStatus(wasPlaying ? "Loading recitation…" : "Reciter changed");
    });
    document.getElementById("volume").addEventListener("input", (event) => {
      audio.volume = Number(event.target.value);
    });
    progress.addEventListener("input", () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        audio.currentTime = (Number(progress.value) / 100) * audio.duration;
      }
    });
    audio.volume = 0.8;
    audio.addEventListener("play", () => {
      playIcon.innerHTML = icon("pause").replace(/^<svg[^>]*>|<\/svg>$/g, "");
      document.getElementById("playPause").setAttribute("aria-label", "Pause");
      setStatus("Now playing");
      renderList();
    });
    audio.addEventListener("pause", () => {
      playIcon.innerHTML = icon("play").replace(/^<svg[^>]*>|<\/svg>$/g, "");
      document.getElementById("playPause").setAttribute("aria-label", "Play");
      renderList();
    });
    audio.addEventListener("timeupdate", () => {
      if (Number.isFinite(audio.duration) && audio.duration > 0) {
        progress.value = String((audio.currentTime / audio.duration) * 100);
      }
      document.getElementById("elapsed").textContent = formatTime(audio.currentTime);
    });
    audio.addEventListener("loadedmetadata", () => {
      document.getElementById("duration").textContent = formatTime(audio.duration);
    });
    audio.addEventListener("ended", () => stepSurah(1));
    audio.addEventListener("error", () => {
      if (audio.src) setStatus("This recitation could not be loaded. Check your connection or choose another reciter.", true);
    });
    renderList();
    loadSurah(false);
