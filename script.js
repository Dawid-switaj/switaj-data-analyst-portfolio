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
let currentLang = 'pl';
const langToggleBtn = document.getElementById('lang-toggle');
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// --- FUNKCJE ---

// 1. Zmiana Języka
const toggleLanguage = () => {
    currentLang = currentLang === 'pl' ? 'en' : 'pl';
    langToggleBtn.textContent = currentLang === 'pl' ? 'EN' : 'PL';
    
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

// --- DANE PROJEKTÓW DO MODALA ---
const projectsData = [
    {
        id: 1,
        category: "E-COMMERCE",
        title: "Analiza Sprzedaży",
        tech: ["Python", "Pandas", "Matplotlib"],
        fullDesc: "Szczegółowa analiza danych sprzedażowych z 12 miesięcy. Celem było zidentyfikowanie produktów o niskiej marży oraz sezonowych spadków przychodów.",
        insight: "Wykryto, że 20% asortymentu generuje stratę operacyjną w Q3. Rekomendacja: wyprzedaż magazynowa w sierpniu.",
        images: [
            "https://via.placeholder.com/600x400?text=Wykres+Sezonowości",
            "https://via.placeholder.com/600x400?text=Analiza+Koszyka"
        ],
        repoLink: "https://github.com/Dawid-switaj/project1",
        liveLink: "#"
    },
    {
        id: 2,
        category: "SQL / LOGISTICS",
        title: "Dashboard Kurierski",
        tech: ["SQL", "PostgreSQL", "Tableau"],
        fullDesc: "Projekt obejmował normalizację bazy danych (3NF) oraz stworzenie widoków SQL zasilających dashboard w Tableau.",
        insight: "Zidentyfikowano wąskie gardło w procesie sortowania, co opóźnia wyjazdy kurierów średnio o 45 minut.",
        images: [
            "https://via.placeholder.com/600x400?text=Dashboard+Tableau",
            "https://via.placeholder.com/600x400?text=Model+Danych+ERD"
        ],
        repoLink: "https://github.com/Dawid-switaj/project2",
        liveLink: "#"
    },
    {
        id: 3,
        category: "FINANCE",
        title: "Model Ryzyka",
        tech: ["Python", "ML", "Excel"],
        fullDesc: "Budowa modelu klasyfikacyjnego oceniającego zdolność kredytową klientów na podstawie historii transakcji.",
        insight: "Najważniejszym czynnikiem predykcyjnym okazał się wskaźnik DTI (Debt-to-Income), a nie wysokość zarobków.",
        images: [
            "https://via.placeholder.com/600x400?text=Macierz+Pomyłek",
            "https://via.placeholder.com/600x400?text=Wykres+ROC"
        ],
        repoLink: "https://github.com/Dawid-switaj/project3",
        liveLink: "#"
    },
    {
        id: 4,
        category: "WEB SCRAPING",
        title: "Monitor Cen",
        tech: ["Python", "Selenium", "BS4"],
        fullDesc: "Automat sprawdzający ceny konkurencji każdego ranka i wysyłający alerty mailowe w przypadku dużych różnic.",
        insight: "Narzędzie pozwoliło na szybszą reakcję na promocje konkurencji, zwiększając sprzedaż o 5%.",
        images: [
            "https://via.placeholder.com/600x400?text=Raport+Mailowy",
            "https://via.placeholder.com/600x400?text=Kod+Scrapera"
        ],
        repoLink: "https://github.com/Dawid-switaj/project4",
        liveLink: "#"
    }
];

// --- OBSŁUGA MODALA ---
const modal = document.getElementById('project-modal');
const closeModalBtn = document.querySelector('.close-modal');

// Funkcja otwierająca modal
window.openModal = (id) => {
    const proj = projectsData.find(p => p.id === id);
    if (!proj) return;

    document.getElementById('m-category').textContent = proj.category;
    document.getElementById('m-title').textContent = proj.title;
    document.getElementById('m-stack').innerHTML = proj.tech.map(t => `<span class="mono-tag">${t}</span>`).join('');
    document.getElementById('m-desc').textContent = proj.fullDesc;
    document.getElementById('m-insight').textContent = proj.insight;
    document.getElementById('m-link-code').href = proj.repoLink;
    document.getElementById('m-link-live').href = proj.liveLink;

    const gallery = document.getElementById('m-gallery');
    gallery.innerHTML = proj.images.map(img => `<img src="${img}" class="modal-img" alt="Wizualizacja">`).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// --- PRZEWIJANIE KARUZELI ---
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Karta 320px + gap 32px (2rem) = 352px przesunięcia
const moveAmount = 352; 

nextBtn.addEventListener('click', () => {
    track.parentElement.scrollBy({ left: moveAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    track.parentElement.scrollBy({ left: -moveAmount, behavior: 'smooth' });
});

let autoScroll = setInterval(() => {
    const container = track.parentElement;
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: moveAmount, behavior: 'smooth' });
    }
}, 5000);

const wrapper = document.querySelector('.carousel-wrapper');
wrapper.addEventListener('mouseenter', () => clearInterval(autoScroll));
wrapper.addEventListener('mouseleave', () => autoScroll = setInterval(() => {
    const container = track.parentElement;
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: moveAmount, behavior: 'smooth' });
    }
}, 5000));
