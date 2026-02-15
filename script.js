document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. DANE PROJEKTÓW (10 SZTUK) ---
    const projectsData = [
        {
            id: 1,
            category: "E-COMMERCE",
            tech: ["Python", "Pandas", "Matplotlib"],
            images: ["https://via.placeholder.com/600x400?text=Wykres+Sprzedazy", "https://via.placeholder.com/600x400?text=Analiza+Sezonow"],
            repoLink: "https://github.com/Dawid-switaj/project1",
            liveLink: "#",
            content: {
                pl: { title: "Analiza Sprzedaży", desc: "Analiza sezonowości i trendów sprzedażowych.", fullDesc: "Analiza danych rocznych w celu wykrycia słabych okresów sprzedażowych.", insight: "Spadek sprzedaży o 30% w lutym." },
                en: { title: "Sales Analysis", desc: "Sales trend and seasonality analysis.", fullDesc: "Annual data analysis to detect weak sales periods.", insight: "30% sales drop in February." }
            }
        },
        {
            id: 2,
            category: "SQL",
            tech: ["SQL", "Tableau", "PostgreSQL"],
            images: ["https://via.placeholder.com/600x400?text=Dashboard+Tableau", "https://via.placeholder.com/600x400?text=ERD+Diagram"],
            repoLink: "https://github.com/Dawid-switaj/project2",
            liveLink: "#",
            content: {
                pl: { title: "Dashboard Kurierski", desc: "Optymalizacja tras i KPI kurierów.", fullDesc: "Projekt bazy danych i dashboardu do śledzenia wydajności.", insight: "Region północny ma problemy z planowaniem tras." },
                en: { title: "Logistics Dashboard", desc: "Route optimization and courier KPIs.", fullDesc: "Database design and dashboard for performance tracking.", insight: "Northern region struggles with route planning." }
            }
        },
        {
            id: 3,
            category: "FINANCE",
            tech: ["Python", "ML", "Excel"],
            images: ["https://via.placeholder.com/600x400?text=Macierz+Pomylek", "https://via.placeholder.com/600x400?text=ROC+Curve"],
            repoLink: "https://github.com/Dawid-switaj/project3",
            liveLink: "#",
            content: {
                pl: { title: "Model Ryzyka", desc: "Ocena zdolności kredytowej (ML).", fullDesc: "Model klasyfikacyjny oceniający ryzyko kredytowe.", insight: "Wskaźnik DTI jest kluczowy dla oceny." },
                en: { title: "Risk Model", desc: "Creditworthiness assessment (ML).", fullDesc: "Classification model assessing credit risk.", insight: "DTI ratio is crucial for assessment." }
            }
        },
        {
            id: 4,
            category: "SCRAPING",
            tech: ["Python", "Selenium"],
            images: ["https://via.placeholder.com/600x400?text=Kod+Python", "https://via.placeholder.com/600x400?text=Excel+Raport"],
            repoLink: "https://github.com/Dawid-switaj/project4",
            liveLink: "#",
            content: {
                pl: { title: "Monitor Cen", desc: "Automat pobierający ceny z 5 sklepów.", fullDesc: "Skrypt monitorujący konkurencję każdego ranka.", insight: "Szybsza reakcja na promocje konkurencji." },
                en: { title: "Price Monitor", desc: "Automated price scraping from 5 stores.", fullDesc: "Script monitoring competitors every morning.", insight: "Faster reaction to competitor promotions." }
            }
        },
        {
            id: 5,
            category: "MARKETING",
            tech: ["Python", "K-Means", "Seaborn"],
            images: ["https://via.placeholder.com/600x400?text=Klastry+Klientow", "https://via.placeholder.com/600x400?text=Wykres+3D"],
            repoLink: "#", liveLink: "#",
            content: {
                pl: { title: "Segmentacja Klientów", desc: "Grupowanie klientów algorytmem K-Means.", fullDesc: "Podział bazy klientów na segmenty w celu personalizacji marketingu.", insight: "Wyróżniono grupę 'VIP', która generuje 60% przychodu." },
                en: { title: "Customer Segmentation", desc: "Grouping customers via K-Means.", fullDesc: "Segmenting customer base for personalized marketing.", insight: "Identified 'VIP' group generating 60% revenue." }
            }
        },
        {
            id: 6,
            category: "HR ANALYTICS",
            tech: ["Power BI", "Excel", "DAX"],
            images: ["https://via.placeholder.com/600x400?text=HR+Dashboard", "https://via.placeholder.com/600x400?text=Rotacja+Pracownikow"],
            repoLink: "#", liveLink: "#",
            content: {
                pl: { title: "Rotacja Pracowników", desc: "Analiza przyczyn odejść z firmy.", fullDesc: "Dashboard HR pokazujący wskaźniki retencji i powody rezygnacji.", insight: "Największa rotacja występuje w dziale IT po 2 roku pracy." },
                en: { title: "Employee Attrition", desc: "Analysis of employee turnover causes.", fullDesc: "HR Dashboard showing retention rates and exit reasons.", insight: "Highest turnover in IT department after 2 years." }
            }
        },
        {
            id: 7,
            category: "REAL ESTATE",
            tech: ["Python", "Regression", "Folium"],
            images: ["https://via.placeholder.com/600x400?text=Mapa+Cen", "https://via.placeholder.com/600x400?text=Wykres+Regresji"],
            repoLink: "#", liveLink: "#",
            content: {
                pl: { title: "Wycena Nieruchomości", desc: "Model przewidujący ceny mieszkań.", fullDesc: "Model regresji liniowej przewidujący ceny na podstawie lokalizacji i metrażu.", insight: "Odległość od metra podnosi cenę o średnio 15%." },
                en: { title: "Real Estate Valuation", desc: "House price prediction model.", fullDesc: "Linear regression model predicting prices based on location/size.", insight: "Subway proximity increases price by 15%." }
            }
        },
        {
            id: 8,
            category: "STOCK MARKET",
            tech: ["Python", "Time Series", "ARIMA"],
            images: ["https://via.placeholder.com/600x400?text=Wykres+Gieldowy", "https://via.placeholder.com/600x400?text=Prognoza"],
            repoLink: "#", liveLink: "#",
            content: {
                pl: { title: "Prognoza Giełdowa", desc: "Analiza szeregów czasowych.", fullDesc: "Wykorzystanie modelu ARIMA do prognozowania trendów giełdowych.", insight: "Model skutecznie przewiduje krótkoterminowe trendy." },
                en: { title: "Stock Prediction", desc: "Time series analysis.", fullDesc: "Using ARIMA model to predict stock market trends.", insight: "Model effectively predicts short-term trends." }
            }
        },
        {
            id: 9,
            category: "NLP",
            tech: ["Python", "NLTK", "WordCloud"],
            images: ["https://via.placeholder.com/600x400?text=Word+Cloud", "https://via.placeholder.com/600x400?text=Sentyment"],
            repoLink: "#", liveLink: "#",
            content: {
                pl: { title: "Analiza Opinii", desc: "Analiza sentymentu recenzji produktów.", fullDesc: "Przetwarzanie języka naturalnego do oceny opinii klientów.", insight: "Klienci negatywnie oceniają czas dostawy, ale chwalą jakość." },
                en: { title: "Sentiment Analysis", desc: "Product review sentiment analysis.", fullDesc: "NLP processing to evaluate customer feedback.", insight: "Customers criticize delivery time but praise quality." }
            }
        },
        {
            id: 10,
            category: "HEALTHCARE",
            tech: ["Tableau", "Excel"],
            images: ["https://via.placeholder.com/600x400?text=Covid+Dashboard", "https://via.placeholder.com/600x400?text=Mapa+Zakazen"],
            repoLink: "#", liveLink: "#",
            content: {
                pl: { title: "Dashboard COVID-19", desc: "Wizualizacja danych pandemicznych.", fullDesc: "Interaktywna mapa i wykresy pokazujące rozprzestrzenianie się wirusa.", insight: "Wizualizacja korelacji między szczepieniami a hospitalizacją." },
                en: { title: "COVID-19 Dashboard", desc: "Pandemic data visualization.", fullDesc: "Interactive map and charts showing virus spread.", insight: "Visualizing correlation between vaccination and hospitalization." }
            }
        }
    ];

    // --- 2. TŁUMACZENIA UI ---
    const translations = {
        pl: {
            nav_about: "01. O mnie", nav_edu: "02. Edukacja", nav_projects: "03. Projekty", nav_contact: "Kontakt",
            hero_status: "Status: Szukam Pracy", hero_t1: "ANALIZA", hero_t2: "DANYCH &", hero_t3: "WNIOSKI",
            hero_desc: "Junior Data Analyst specjalizujący się w Pythonie, SQL i wizualizacji danych.",
            btn_projects: "Zobacz Projekty", btn_cv: "Pobierz CV",
            section_about: "01 // O MNIE", about_text: "Jestem analitykiem, który nie boi się trudnych danych...",
            section_edu: "02 // EDUKACJA", edu_1_title: "Analityk Finansowy", edu_1_desc: "Studia podyplomowe.",
            edu_2_title: "Zarządzanie Informacją", edu_2_desc: "Magister.", edu_3_title: "Turystyka", edu_3_desc: "Licencjat.",
            section_projects: "03 // PROJEKTY", projects_hint: "Kliknij w projekt, aby zobaczyć szczegóły.",
            contact_header: "GOTOWY NA WSPÓŁPRACĘ?", footer_text: "Wszelkie prawa zastrzeżone.",
            btn_card_action: "Zobacz Raport",
            modal_goal: "Cel biznesowy", modal_viz: "Wizualizacje & Wnioski", modal_key: "Kluczowy wniosek:", modal_sol: "Rozwiązanie"
        },
        en: {
            nav_about: "01. About", nav_edu: "02. Education", nav_projects: "03. Projects", nav_contact: "Contact",
            hero_status: "Status: Open for Work", hero_t1: "DATA", hero_t2: "ANALYSIS &", hero_t3: "INSIGHTS",
            hero_desc: "Junior Data Analyst specializing in Python, SQL, and Data Visualization.",
            btn_projects: "View Projects", btn_cv: "Download CV",
            section_about: "01 // ABOUT ME", about_text: "I am an analyst who isn't afraid of messy data...",
            section_edu: "02 // EDUCATION", edu_1_title: "Financial Analyst", edu_1_desc: "Postgraduate studies.",
            edu_2_title: "Information Management", edu_2_desc: "Master's.", edu_3_title: "Tourism", edu_3_desc: "Bachelor's.",
            section_projects: "03 // PROJECTS", projects_hint: "Click on a project to view details.",
            contact_header: "READY TO COLLABORATE?", footer_text: "All rights reserved.",
            btn_card_action: "View Report",
            modal_goal: "Business Goal", modal_viz: "Visuals & Insights", modal_key: "Key Insight:", modal_sol: "Solution"
        }
    };

    // --- 3. ZMIENNE STANU ---
    let currentLang = 'pl';
    let currentModalId = null;
    const track = document.querySelector('.carousel-track');

    // --- 4. FUNKCJA GENERUJĄCA KAFELKI ---
    function renderCarousel() {
        if (!track) return;
        track.innerHTML = ''; // Wyczyść stare
        
        projectsData.forEach(proj => {
            const content = proj.content[currentLang]; // Wybierz język
            const btnText = translations[currentLang].btn_card_action;

            const li = document.createElement('li');
            li.classList.add('carousel-slide');
            li.innerHTML = `
                <article class="project-card" onclick="openModal(${proj.id})">
                    <div class="card-header"><span class="mono-tag">${proj.category}</span></div>
                    <div class="card-body">
                        <h3>${content.title}</h3>
                        <p>${content.desc}</p>
                        <ul class="tech-stack">
                            ${proj.tech.map(t => `<li>${t}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="card-footer">
                        <span class="btn-link">${btnText} <i class="fas fa-plus"></i></span>
                    </div>
                </article>
            `;
            track.appendChild(li);
        });
    }

    // --- 5. ZMIANA JĘZYKA ---
    const langBtn = document.getElementById('lang-toggle');
    
    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'pl' ? 'en' : 'pl';
        langBtn.textContent = currentLang === 'pl' ? 'EN' : 'PL';
        
        // 1. Tłumacz statyczne teksty
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
        });

        // 2. Przegeneruj karuzelę (żeby kafelki też się przetłumaczyły)
        renderCarousel();

        // 3. Jeśli modal otwarty, odśwież go
        if (currentModalId !== null) window.openModal(currentModalId);
    });

    // --- 6. DARK MODE ---
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = themeBtn.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });

    // --- 7. MODAL LOGIC ---
    const modal = document.getElementById('project-modal');
    const closeModalBtn = document.querySelector('.close-modal');

    window.openModal = (id) => {
        const proj = projectsData.find(p => p.id === id);
        if (!proj) return;
        currentModalId = id;

        const content = proj.content[currentLang]; // Pobierz tekst w dobrym języku

        document.getElementById('m-category').textContent = proj.category;
        document.getElementById('m-title').textContent = content.title;
        document.getElementById('m-stack').innerHTML = proj.tech.map(t => `<span class="mono-tag">${t}</span>`).join('');
        document.getElementById('m-desc').textContent = content.fullDesc;
        document.getElementById('m-insight').textContent = content.insight;
        document.getElementById('m-link-code').href = proj.repoLink;
        document.getElementById('m-link-live').href = proj.liveLink;
        document.getElementById('m-gallery').innerHTML = proj.images.map(img => `<img src="${img}" class="modal-img">`).join('');

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentModalId = null;
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            currentModalId = null;
        }
    });

    // --- 8. KARUZELA LOGIKA ---
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const moveAmount = 352;
    let autoScrollInterval;

    const moveRight = () => {
        const container = track.parentElement;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: moveAmount, behavior: 'smooth' });
        }
    };

    if(track && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => track.parentElement.scrollBy({ left: moveAmount, behavior: 'smooth' }));
        prevBtn.addEventListener('click', () => track.parentElement.scrollBy({ left: -moveAmount, behavior: 'smooth' }));

        const startAutoScroll = () => { autoScrollInterval = setInterval(moveRight, 3500); };
        const stopAutoScroll = () => { clearInterval(autoScrollInterval); };

        startAutoScroll(); // Start
        const wrapper = document.querySelector('.carousel-wrapper');
        wrapper.addEventListener('mouseenter', stopAutoScroll);
        wrapper.addEventListener('mouseleave', startAutoScroll);
    }

    // --- 9. INICJALIZACJA ---
    renderCarousel(); // Wygeneruj kafelki na start
    document.querySelector('.burger').addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('nav-active'));
    document.getElementById('year').textContent = new Date().getFullYear();
});
