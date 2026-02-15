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

// --- DANE PROJEKTÓW (TWOJA BAZA) ---
const projectsData = [
    {
        id: 1,
        category: "E-COMMERCE",
        title: "Analiza Sprzedaży",
        shortDesc: "Analiza sezonowości i trendów sprzedażowych w Pythonie.",
        tech: ["Python", "Pandas", "Matplotlib"],
        fullDesc: "Celem projektu było zbadanie rocznych danych sprzedażowych sklepu online, aby zidentyfikować okresy o najniższym przychodzie i zaproponować działania marketingowe.",
        insight: "Wykryto 30% spadek sprzedaży w lutym i listopadzie. Rekomendacja: Wprowadzenie kampanii 'Early Bird' w tych miesiącach zwiększyłoby retencję klientów.",
        images: [
            "https://via.placeholder.com/600x400?text=Wykres+Sprzedazy",
            "https://via.placeholder.com/600x400?text=Analiza+Koszyka"
        ],
        repoLink: "https://github.com/TwojLogin/projekt1",
        liveLink: "#"
    },
    {
        id: 2,
        category: "SQL / LOGISTICS",
        title: "Dashboard Kurierski",
        shortDesc: "Optymalizacja tras i KPI kurierów w Tableau.",
        tech: ["SQL", "PostgreSQL", "Tableau"],
        fullDesc: "Stworzenie relacyjnej bazy danych dla firmy kurierskiej oraz dashboardu menedżerskiego do śledzenia wydajności kurierów w czasie rzeczywistym.",
        insight: "Kurierzy w regionie 'Północ' mają średnio o 15% dłuższy czas dostawy z powodu złego planowania tras. Dashboard pozwolił zidentyfikować wąskie gardła.",
        images: [
            "https://via.placeholder.com/600x400?text=Dashboard+Tableau",
            "https://via.placeholder.com/600x400?text=Schemat+Bazy+SQL"
        ],
        repoLink: "https://github.com/TwojLogin/projekt2",
        liveLink: "#"
    },
    {
        id: 3,
        category: "FINANCE",
        title: "Model Ryzyka Kredytowego",
        shortDesc: "Przewidywanie zdolności kredytowej z użyciem ML.",
        tech: ["Python", "Scikit-Learn", "Excel"],
        fullDesc: "Budowa modelu uczenia maszynowego (Logistic Regression), który ocenia ryzyko niespłacenia kredytu na podstawie historii finansowej klienta.",
        insight: "Model osiągnął skuteczność 85%. Najważniejszym czynnikiem ryzyka okazał się nie dochód, a stosunek zadłużenia do dochodu (DTI).",
        images: [
            "https://via.placeholder.com/600x400?text=Macierz+Pomyłek",
            "https://via.placeholder.com/600x400?text=Wykres+ROC"
        ],
        repoLink: "https://github.com/TwojLogin/projekt3",
        liveLink: "#"
    },
    {
        id: 4,
        category: "WEB SCRAPING",
        title: "Monitor Cen Konkurencji",
        shortDesc: "Automat pobierający ceny z 5 sklepów codziennie.",
        tech: ["Python", "Selenium", "BeautifulSoup"],
        fullDesc: "Skrypt automatyzujący proces zbierania danych o cenach produktów konkurencji. Raport jest wysyłany automatycznie na maila w formacie Excel.",
        insight: "Zautomatyzowanie tego procesu oszczędza 10 godzin pracy manualnej tygodniowo dla działu zakupów.",
        images: [
            "https://via.placeholder.com/600x400?text=Skrypt+w+akcji",
            "https://via.placeholder.com/600x400?text=Raport+Excel"
        ],
        repoLink: "https://github.com/TwojLogin/projekt4",
        liveLink: "#"
    }
];

// --- LOGIKA KARUZELI I MODALA ---
const track = document.querySelector('.carousel-track');
const modal = document.getElementById('project-modal');
const closeModalBtn = document.querySelector('.close-modal');

// 1. Generowanie Kart Projektów
function renderProjects() {
    track.innerHTML = '';
    projectsData.forEach(proj => {
        const li = document.createElement('li');
        li.classList.add('carousel-slide');
        li.innerHTML = `
            <article class="project-card" onclick="openModal(${proj.id})">
                <div class="card-header">
                    <span class="mono-tag">${proj.category}</span>
                </div>
                <div class="card-body">
                    <h3>${proj.title}</h3>
                    <p>${proj.shortDesc}</p>
                    <ul class="tech-stack">
                        ${proj.tech.map(t => `<li>${t}</li>`).join('')}
                    </ul>
                </div>
                <div class="card-footer">
                    <span class="btn-link">Zobacz Raport <i class="fas fa-plus"></i></span>
                </div>
            </article>
        `;
        track.appendChild(li);
    });
}

// 2. Otwieranie Modala z danymi
window.openModal = (id) => {
    const proj = projectsData.find(p => p.id === id);
    if (!proj) return;

    // Wypełnij dane
    document.getElementById('m-category').textContent = proj.category;
    document.getElementById('m-title').textContent = proj.title;
    document.getElementById('m-stack').innerHTML = proj.tech.map(t => `<span class="mono-tag">${t}</span>`).join('');
    document.getElementById('m-desc').textContent = proj.fullDesc;
    document.getElementById('m-insight').textContent = proj.insight;
    document.getElementById('m-link-code').href = proj.repoLink;
    document.getElementById('m-link-live').href = proj.liveLink;

    // Galeria zdjęć
    const gallery = document.getElementById('m-gallery');
    gallery.innerHTML = proj.images.map(img => `<img src="${img}" class="modal-img" alt="Wizualizacja">`).join('');

    // Pokaż modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Zablokuj scrollowanie strony pod spodem
};

// 3. Zamykanie Modala
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Zamknij po kliknięciu w tło
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// 4. Obsługa Przewijania Karuzeli
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let scrollAmount = 0;
const cardWidth = 320; // szerokość karty + gap (w przybliżeniu)

nextBtn.addEventListener('click', () => {
    track.parentElement.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    track.parentElement.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

// Automatyczne przewijanie (Autoplay)
function autoScroll() {
    const container = track.parentElement;
    // Jeśli dojechaliśmy do końca, wróć na początek
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
}

// Uruchomienie
renderProjects();
let autoScrollInterval = setInterval(autoScroll, 4000); // Przewijaj co 4 sekundy

// Zatrzymaj autoscroll jak użytkownik najedzie myszką
const carouselWrapper = document.querySelector('.carousel-wrapper');
carouselWrapper.addEventListener('mouseenter', () => clearInterval(autoScrollInterval));
carouselWrapper.addEventListener('mouseleave', () => autoScrollInterval = setInterval(autoScroll, 4000));
