document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DANE PROJEKTÓW ---
    const projectsData = [
        {
            id: 1,
            category: "E-COMMERCE",
            title: "Analiza Sprzedaży",
            tech: ["Python", "Pandas", "Matplotlib"],
            fullDesc: "Szczegółowa analiza danych sprzedażowych. Cel: Identyfikacja produktów o niskiej marży.",
            insight: "Wykryto spadek sprzedaży o 30% w lutym. Rekomendacja: Kampania walentynkowa.",
            images: [
                "https://via.placeholder.com/600x400?text=Wykres+1",
                "https://via.placeholder.com/600x400?text=Wykres+2"
            ],
            repoLink: "https://github.com/Dawid-switaj/project1",
            liveLink: "#"
        },
        {
            id: 2,
            category: "SQL",
            title: "Dashboard Kurierski",
            tech: ["SQL", "Tableau", "PostgreSQL"],
            fullDesc: "Projekt bazy danych i dashboardu do śledzenia KPI kurierów.",
            insight: "Region północny ma o 15% gorsze czasy dostaw przez złe planowanie tras.",
            images: [
                "https://via.placeholder.com/600x400?text=Dashboard+Tableau",
                "https://via.placeholder.com/600x400?text=ERD"
            ],
            repoLink: "https://github.com/Dawid-switaj/project2",
            liveLink: "#"
        },
        {
            id: 3,
            category: "FINANCE",
            title: "Model Ryzyka",
            tech: ["Python", "ML", "Excel"],
            fullDesc: "Model ML oceniający zdolność kredytową na podstawie historii.",
            insight: "Wskaźnik DTI jest ważniejszy niż dochód przy ocenie ryzyka.",
            images: [
                "https://via.placeholder.com/600x400?text=Macierz+Pomyłek",
                "https://via.placeholder.com/600x400?text=ROC"
            ],
            repoLink: "https://github.com/Dawid-switaj/project3",
            liveLink: "#"
        },
        {
            id: 4,
            category: "SCRAPING",
            title: "Monitor Cen",
            tech: ["Python", "Selenium"],
            fullDesc: "Automat sprawdzający ceny konkurencji co rano.",
            insight: "Pozwoliło to na szybszą reakcję na promocje konkurencji.",
            images: [
                "https://via.placeholder.com/600x400?text=Raport",
                "https://via.placeholder.com/600x400?text=Kod"
            ],
            repoLink: "https://github.com/Dawid-switaj/project4",
            liveLink: "#"
        }
    ];

    // --- 2. TŁUMACZENIA ---
    const translations = {
        pl: {
            nav_about: "01. O mnie", nav_edu: "02. Edukacja", nav_projects: "03. Projekty", nav_contact: "Kontakt",
            hero_status: "Status: Szukam Pracy", hero_t1: "ANALIZA", hero_t2: "DANYCH &", hero_t3: "WNIOSKI",
            hero_desc: "Junior Data Analyst specjalizujący się w Pythonie, SQL i wizualizacji danych.",
            btn_projects: "Zobacz Projekty", btn_cv: "Pobierz CV",
            section_about: "01 // O MNIE", about_text: "Jestem analitykiem, który nie boi się trudnych danych...",
            section_edu: "02 // EDUKACJA", edu_1_title: "Analityk Finansowy", edu_1_desc: "Studia podyplomowe.",
            edu_2_title: "Zarządzanie Informacją", edu_2_desc: "Magister.", edu_3_title: "Turystyka", edu_3_desc: "Licencjat.",
            section_projects: "03 // PROJEKTY", contact_header: "GOTOWY NA WSPÓŁPRACĘ?", footer_text: "Wszelkie prawa zastrzeżone."
        },
        en: {
            nav_about: "01. About", nav_edu: "02. Education", nav_projects: "03. Projects", nav_contact: "Contact",
            hero_status: "Status: Open for Work", hero_t1: "DATA", hero_t2: "ANALYSIS &", hero_t3: "INSIGHTS",
            hero_desc: "Junior Data Analyst specializing in Python, SQL, and Data Visualization.",
            btn_projects: "View Projects", btn_cv: "Download CV",
            section_about: "01 // ABOUT ME", about_text: "I am an analyst who isn't afraid of messy data...",
            section_edu: "02 // EDUCATION", edu_1_title: "Financial Analyst", edu_1_desc: "Postgraduate studies.",
            edu_2_title: "Information Management", edu_2_desc: "Master's.", edu_3_title: "Tourism", edu_3_desc: "Bachelor's.",
            section_projects: "03 // PROJECTS", contact_header: "READY TO COLLABORATE?", footer_text: "All rights reserved."
        }
    };

    // --- 3. OBSŁUGA JĘZYKA I MOTYWU ---
    let currentLang = 'pl';
    const langBtn = document.getElementById('lang-toggle');
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'pl' ? 'en' : 'pl';
        langBtn.textContent = currentLang === 'pl' ? 'EN' : 'PL';
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
        });
    });

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const icon = themeBtn.querySelector('i');
        if (body.classList.contains('dark-theme')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // --- 4. BURGER MENU ---
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    // --- 5. ROK W STOPCE ---
    document.getElementById('year').textContent = new Date().getFullYear();

    // --- 6. MODAL (POPRAWIONY) ---
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    // Funkcja globalna (żeby działała z HTML onclick)
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
        document.getElementById('m-gallery').innerHTML = proj.images.map(img => `<img src="${img}" class="modal-img">`).join('');

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

    // --- 7. KARUZELA ---
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const moveAmount = 352; // Karta + gap

    if(track && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            track.parentElement.scrollBy({ left: moveAmount, behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            track.parentElement.scrollBy({ left: -moveAmount, behavior: 'smooth' });
        });
    }
});
