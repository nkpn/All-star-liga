document.addEventListener("DOMContentLoaded", function() {
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
});