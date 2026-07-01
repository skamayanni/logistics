function toggleLanguages() {
    document.getElementById("languageMenu").classList.toggle("show");
}

window.addEventListener("click", function (e) {
    if (!e.target.closest(".language-dropdown")) {
        document.getElementById("languageMenu").classList.remove("show");
    }
});

function googleTranslateElementInit() {

    new google.translate.TranslateElement({
        pageLanguage: "en",
        autoDisplay: false
    }, "google_translate_element");

    restoreLanguage();
}

function translateLanguage(lang, name) {

    localStorage.setItem("selectedLanguage", lang);
    localStorage.setItem("selectedLanguageName", name);

    document.getElementById("currentLanguage").textContent = name;

    const combo = document.querySelector(".goog-te-combo");

    if (combo) {
        combo.value = lang;
        combo.dispatchEvent(new Event("change"));
    }

    document.getElementById("languageMenu").classList.remove("show");
}

function restoreLanguage() {

    const lang = localStorage.getItem("selectedLanguage");
    const name = localStorage.getItem("selectedLanguageName");

    if (!lang) return;

    if (document.getElementById("currentLanguage")) {
        document.getElementById("currentLanguage").textContent = name;
    }

    const interval = setInterval(() => {

        const combo = document.querySelector(".goog-te-combo");

        if (combo) {
            combo.value = lang;
            combo.dispatchEvent(new Event("change"));
            clearInterval(interval);
        }

    }, 300);
}