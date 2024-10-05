const userLang = navigator.language || navigator.userLanguage;


if (userLang.includes("es")) {
  changeLanguage('es');
} else if (userLang.includes("en")) {
  changeLanguage('en');
}

function changeLanguage(lang, event) {
    // Проверяем, не находимся ли мы уже на странице выбранного языка
    if (window.location.pathname.includes('/' + lang + '/')) {
        console.log('Уже на странице выбранного языка');
        return; // Выходим из функции, если уже на нужной странице
    }

    const selectors = document.querySelectorAll('.language-selector');
    console.log('selectors', selectors);
    selectors.forEach(selector => selector.classList.remove('active'));
    
    // Получаем нажатый элемент из события
    const clickedElement = event.currentTarget;
    console.log('clickedElement', clickedElement);
    
    // Добавляем класс 'active' к выбранному селектору
    if (clickedElement) {
        clickedElement.classList.add('active');
    }
    
    // Устанавливаем новый язык
    setLanguage(lang);
    
    // Перенаправляем на соответствующую страницу
    window.location.href = '/' + lang + '/index.html';
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
if (savedLang && !window.location.pathname.includes(savedLang)) {
    window.location.href = "/" + savedLang + "/";
}

console.log(savedLang)
