
const languageLinks = document.querySelectorAll('.language-selector');
const userLang = navigator.language || navigator.userLanguage;

// if (userLang.includes("es")) {
//   changeLanguage('es');
// } else if (userLang.includes("en")) {
//     changeLanguage('en');
// } 

function changeLanguage(lang) {
  if (lang === "en") {
      window.location.href = "../en/";
  } else if (lang === "sp") {
      window.location.href = "../es/";
  }
}

function setLanguage(lang) {
  document.cookie = "language=" + lang + "; path=/; max-age=" + (60 * 60 * 24 * 365); // 1 год
  window.location.href = "/" + lang + "/";
}

function getLanguage() {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [name, value] = cookie.split("=");
        if (name === "language") {
            return value;
        }
    }
    return null;
}

const savedLang = getLanguage();
if (savedLang) {
    window.location.href = "/" + savedLang + "/";
}
