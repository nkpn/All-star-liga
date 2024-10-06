const userLang = navigator.language || navigator.userLanguage;


function handleLanguageSelection() {
    // Получаем текущий путь URL
    const currentPath = window.location.pathname;
    let currentLang;

    // Проверяем, есть ли в URL указание на язык
    if (currentPath.includes('/en/') || currentPath.includes('/es/')) {
        currentLang = currentPath.split('/')[1];
        setLanguage(currentLang);
    } else {
        // Проверяем наличие языка в куках
        currentLang = getLanguage();
        if (currentLang) {
            window.location.href = `/${currentLang}/`;
            return;
        }

        // Проверяем язык браузера
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.includes('es')) {
            currentLang = 'es';
            window.location.href = '/es/';
            return;
        } else if (browserLang.includes('en')) {
            currentLang = 'en';
            window.location.href = '/en/';
            return;
        }
        // Если язык браузера не совпадает с поддерживаемыми, устанавливаем английский по умолчанию
        currentLang = 'en';
    }

    // Устанавливаем обработчики событий для селекторов языка
    setupLanguageSelectors(currentLang);
}

function setupLanguageSelectors(currentLang) {
    const selectors = document.querySelectorAll('.language-selector');
    selectors.forEach(selector => {
        const lang = selector.getAttribute('href').split('/')[1];
        selector.classList.toggle('active', lang === currentLang);
        selector.addEventListener('click', (event) => {
            event.preventDefault();
            changeLanguage(lang);
        });
    });
}

function changeLanguage(lang) {
    if (window.location.pathname.includes(`/${lang}/`)) {
        console.log('Уже на странице выбранного языка');
        return;
    }

    saveLanguageToCookie(lang);
    window.location.href = `/${lang}/`;
}

function saveLanguageToCookie(lang) {
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
