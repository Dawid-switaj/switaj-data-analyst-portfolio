// --- SŁOWNIK TŁUMACZEŃ ---
const translations = {
    pl: {
        nav_about: "01. O mnie",
        nav_edu: "02. Edukacja",
        nav_projects: "03. Projekty",
        nav_contact: "Kontakt",
        hero_status: "Status: Szukam Pracy",
        hero_t1: "ANALIZA",
        hero_t2: "DANYCH &",
        hero_t3: "WNIOSKI",
        hero_desc: "Junior Data Analyst specjalizujący się w Pythonie, SQL i wizualizacji danych. Zamieniam surowe liczby w strategie biznesowe.",
        btn_projects: "Zobacz Projekty",
        btn_cv: "Pobierz CV",
        section_about: "01 // O MNIE",
        about_text: "Jestem analitykiem, który nie boi się trudnych danych. Po latach pracy w turystyce i zarządzaniu informacją, przeniosłem swoją pasję do rozwiązywania problemów do świata kodu i analizy finansowej.",
        section_edu: "02 // EDUKACJA",
        edu_1_title: "Analityk Finansowy",
        edu_1_desc: "Studia podyplomowe. Analiza sprawozdań finansowych, ocena ryzyka, modelowanie finansowe.",
        edu_2_title: "Zarządzanie Informacją",
        edu_2_desc: "Studia magisterskie. Architektura informacji, bazy danych, zarządzanie wiedzą w organizacji.",
        edu_3_title: "Turystyka i Rekreacja",
        edu_3_desc: "Licencjat. Zarządzanie projektami, obsługa klienta, geografia ekonomiczna.",
        section_projects: "03 // PROJEKTY",
        proj_1_title: "Analiza Sprzedaży",
        proj_1_desc: "Analiza danych sprzedażowych sklepu internetowego. Wykrycie sezonowości.",
        proj_2_title: "Dashboard Kurierski",
        proj_2_desc: "Projekt bazy danych i dashboard w Tableau dla firmy logistycznej.",
        contact_header: "GOTOWY NA WSPÓŁPRACĘ?",
        footer_text: "Wszelkie prawa zastrzeżone."
    },
    en: {
        nav_about: "01. About",
        nav_edu: "02. Education",
        nav_projects: "03. Projects",
        nav_contact: "Contact",
        hero_status: "Status: Open for Work",
        hero_t1: "DATA",
        hero_t2: "ANALYSIS &",
        hero_t3: "INSIGHTS",
        hero_desc: "Junior Data Analyst specializing in Python, SQL, and Data Visualization. Turning raw numbers into business strategies.",
        btn_projects: "View Projects",
        btn_cv: "Download CV",
        section_about: "01 // ABOUT ME",
        about_text: "I am an analyst who isn't afraid of messy data. After years in tourism and information management, I pivoted my problem-solving passion into the world of code and financial analysis.",
        section_edu: "02 // EDUCATION",
        edu_1_title: "Financial Analyst",
        edu_1_desc: "Postgraduate studies. Financial statement analysis, risk assessment, financial modeling.",
        edu_2_title: "Information Management",
        edu_2_desc: "Master's degree. Information architecture, databases, knowledge management.",
        edu_3_title: "Tourism & Recreation",
        edu_3_desc: "Bachelor's degree. Project management, customer service, economic geography.",
        section_projects: "03 // PROJECTS",
        proj_1_title: "Sales Analysis",
        proj_1_desc: "E-commerce sales data analysis. Seasonality detection and inventory optimization.",
        proj_2_title: "Logistics Dashboard",
        proj_2_desc: "Database design and Tableau dashboard for a logistics company.",
        contact_header: "READY TO COLLABORATE?",
        footer_text: "All rights reserved."
    }
};

// --- ZMIENNE GLOBALNE ---
let currentLang = 'pl'; // Domyślny język
const langToggleBtn = document.getElementById('lang-toggle');
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// --- FUNKCJE ---

// 1. Zmiana Języka
const toggleLanguage = () => {
    currentLang = currentLang === 'pl' ? 'en' : 'pl';
    langToggleBtn.textContent = currentLang === 'pl' ? 'EN' : 'PL'; // Zmień tekst przycisku na przeciwny
    
    // Pobierz wszystkie elementy z atrybutem data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
};

// 2. Zmiana Motywu (Dark/Light)
const toggleTheme = () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    
    // Zmiana ikony
    const icon = themeToggleBtn.querySelector('i');
    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
};

// 3. Menu Mobilne
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
};

const yearUpdate = () => {
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
};

// --- LISTENERS ---
langToggleBtn.addEventListener('click', toggleLanguage);
themeToggleBtn.addEventListener('click', toggleTheme);
navSlide();
yearUpdate();