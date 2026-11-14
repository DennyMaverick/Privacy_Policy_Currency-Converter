//* =========== Объект с переводом страницы ==============

const langs = {
  title: {
    ru: "Политика конфиденциальности, Currency Converter – Конвертер валют онлайн",
    en: "Privacy Policy, Currency Converter Online",
  },
  "privacy-policy-title": {
    ru: "Политика конфиденциальности",
    en: "Privacy Policy",
  },
  "privacy-policy-description": {
    ru: "Настоящая Политика конфиденциальности распространяется на веб-версию проекта «Currency Converter – Конвертер валют онлайн», размещённую на сайте <a target='_blank' href='https://currency-converter.dennymaverick.ru'>https://currency-converter.dennymaverick.ru</a>, и соответствующее мобильное приложение Android, распространяемое через RuStore.",
    en: "This Privacy Policy applies to the web version of the project «Currency Converter Online», hosted at <a target='_blank' href='https://currency-converter.dennymaverick.ru'>https://currency-converter.dennymaverick.ru</a>, and the corresponding Android mobile application distributed through RuStore.",
  },
  "privacy-policy-first-title": {
    ru: "1. Сбор и использование данных",
    en: "1. Data Collection and Use",
  },
  "privacy-policy-second-title": {
    ru: "2. Точность расчётов",
    en: "2. Calculation Accuracy",
  },
  "privacy-policy-third-title": {
    ru: "3. Локальное хранение настроек",
    en: "3. Local Storage of Settings",
  },
  "privacy-policy-fourth-title": {
    ru: "4. Файлы cookie и сторонние сервисы",
    en: "4. Cookies and Third-Party Services",
  },
  "privacy-policy-fifth-title": {
    ru: "5. Хостинг и техническая информация",
    en: "5. Hosting and Technical Information",
  },
  "privacy-policy-sixth-title": {
    ru: "6. Контактная информация",
    en: "6. Contact Information",
  },

  "privacy-policy-data-desc-first": {
    ru: "Приложение «Currency Converter – Конвертер валют онлайн» самостоятельно не запрашивает, не собирает, не хранит и не передаёт персональные данные пользователей. Локально сохраняются только настройки интерфейса, описанные в настоящей Политике.",
    en: "The «Currency Converter Online» application does not independently request, collect, store, or transmit users' personal data. Only the interface settings described in this Privacy Policy are stored locally.",
  },
  "privacy-policy-data-desc-second": {
    ru: "Приложение использует интернет-соединение для получения актуальных курсов валют из открытого источника — Центрального банка Российской Федерации (ЦБ РФ). Полученные курсы валют используются исключительно для выполнения расчётов и отображения результатов конвертации.",
    en: "The application uses an internet connection to retrieve up-to-date exchange rates from a publicly available source — the Central Bank of the Russian Federation (CBR). The retrieved exchange rates are used solely to perform calculations and display currency conversion results.",
  },
  "privacy-policy-data-desc-third": {
    ru: "Результаты конвертации имеют информационный характер и предназначены для ознакомительных целей. В отдельных случаях, особенно при расчёте больших сумм, возможны небольшие погрешности, связанные с особенностями вычислений с числами с плавающей точкой.",
    en: "Currency conversion results are provided for informational purposes only. In certain cases, particularly when calculating large amounts, minor inaccuracies may occur due to the specifics of floating-point arithmetic.",
  },
  "privacy-policy-data-desc-fourth": {
    ru: "Для обеспечения корректной работы и удобства использования веб-версии и мобильного приложения используется механизм локального хранения данных (localStorage). В localStorage сохраняются исключительно пользовательские настройки интерфейса:",
    en: "To ensure the proper functioning and ease of use of the web version and mobile application, local storage (localStorage) is used. Only the following user interface settings are stored in localStorage:",
  },
  "choosen-lang": {
    ru: "выбранный язык;",
    en: "selected language;",
  },
  "choosen-theme": {
    ru: "выбранная цветовая тема.",
    en: "selected color theme.",
  },
  "privacy-policy-data-desc-fifth": {
    ru: "Указанные настройки хранятся локально на устройстве пользователя и используются исключительно для сохранения выбранных параметров интерфейса. Эти сведения не передаются владельцу проекта и не используются для идентификации пользователей.",
    en: "These settings are stored locally on the user's device and are used exclusively to preserve the selected interface preferences. This information is not transmitted to the project owner and is not used to identify users.",
  },
  "privacy-policy-data-desc-sixth": {
    ru: "На момент публикации настоящей редакции Политики в проекте не используются сторонние сервисы веб-аналитики и рекламные сети.",
    en: "As of the publication date of this version of the Privacy Policy, the project does not use third-party web analytics services or advertising networks.",
  },
  "privacy-policy-data-desc-seventh": {
    ru: "В случае подключения таких сервисов, включая Яндекс.Метрику и Рекламную сеть Яндекса (РСЯ), настоящая Политика будет дополнена сведениями о целях использования соответствующих сервисов, категориях обрабатываемых данных и применяемых технологиях, включая файлы cookie.",
    en: "If such services are introduced in the future, including Yandex Metrica and the Yandex Advertising Network (YAN), this Privacy Policy will be updated to include information about the purposes of using these services, the categories of data processed, and the technologies used, including cookies.",
  },
  "privacy-policy-data-desc-eighth": {
    ru: "Веб-версия проекта размещена на платформе GitHub Pages, предоставляемой компанией GitHub, Inc. При посещении веб-версии хостинг может автоматически обрабатывать техническую информацию, включая IP-адрес, дату и время обращения, запрашиваемую страницу, тип браузера и операционную систему пользователя. Такая обработка осуществляется инфраструктурой GitHub в целях обеспечения работоспособности, безопасности и защиты сервиса.",
    en: "The web version of the project is hosted on GitHub Pages, a platform provided by GitHub, Inc. When users visit the web version, the hosting provider may automatically process technical information, including IP addresses, dates and times of access, requested pages, browser types, and operating systems. Such processing is carried out by GitHub's infrastructure to ensure the functionality, security, and protection of the service.",
  },
  "privacy-policy-data-git-first": {
    ru: "Владелец проекта не имеет прямого доступа к внутренним техническим журналам GitHub. Дополнительная информация об обработке данных доступна в ",
    en: "The project owner does not have direct access to GitHub's internal technical logs. Additional information about data processing is available in ",
  },
  "privacy-policy-data-git-second": {
    ru: "Политике конфиденциальности GitHub",
    en: "the GitHub Privacy Statement",
  },
  "date-of-update": {
    ru: "Дата последнего обновления: 14 ноября 2026 года.",
    en: "Last updated: November 14, 2026.",
  },
}

const repeatElems = {
  "logo-title": {
    ru: "Currency Converter – Конвертер валют онлайн",
    en: "Currency Converter Online",
  },
}

const langListItems = document.querySelectorAll(".lang-tool__item")
// Массив всех доступных языков
const allLangs = ["ru", "en"]

langListItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // получение hash из строки браузера - #ru или #en

    // получение значения атрибута data-lang (ru или en)
    let lang = this.dataset.lang

    // Сохраняем выбранный язык
    localStorage.setItem("lang", lang)

    // добавление в строку браузера #ru или #en
    location.href = window.location.pathname + "#" + lang

    // перезагрузка страницы
    location.reload()
  })
})

function changeLang() {
  // Получаем язык из URL
  let hash = window.location.hash.substring(1)

  // Получаем язык из localStorage
  const savedLang = localStorage.getItem("lang")

  // Если сохранённого языка нет — устанавливаем английский.
  if (allLangs.includes(hash)) {
    // Используем язык из URL
  } else if (allLangs.includes(savedLang)) {
    hash = savedLang
  } else {
    hash = "ru"
  }

  // Сохраняем актуальный язык
  localStorage.setItem("lang", hash)

  // Синхронизируем URL
  if (window.location.hash !== "#" + hash) {
    history.replaceState(null, "", window.location.pathname + "#" + hash)
  }

  const langToolRuEl = document.querySelector('[data-lang="ru"]')
  const langToolEnEl = document.querySelector('[data-lang="en"]')
  // получение hash из строки браузера - #ru или #en

  if (hash === "ru") {
    langToolRuEl.classList.add("lang-tool--active")
    langToolEnEl.classList.remove("lang-tool--active")
  } else {
    langToolEnEl.classList.add("lang-tool--active")
    langToolRuEl.classList.remove("lang-tool--active")
  }

  // перебор массива langs
  for (let key in langs) {
    // получение элементов в html, которые нужно перевести
    let elem = document.querySelector(".lang-" + key)
    // если элемент существует и язык для элемента прописан в объекте с переводом языков, то заменить содержание контента в элементе на тот контент, который взят из массива langs
    if (elem && langs[key][hash]) {
      elem.innerHTML = langs[key][hash]
    }
  }

  for (let key in repeatElems) {
    let elems = document.querySelectorAll(".lang-" + key)
    elems.forEach(function (elem) {
      if (elem && repeatElems[key][hash]) {
        elem.innerHTML = repeatElems[key][hash]
      }
    })
  }
}
// запуск функции changeLang()
changeLang()
