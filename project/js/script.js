// نظام الترجمة
const translations = {
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        payment: "الدفع الإلكتروني",
        contact: "اتصل بنا"
    },
    en: {
        home: "Home",
        about: "About",
        services: "Services",
        payment: "Payment",
        contact: "Contact"
    },
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımızda",
        services: "Hizmetler",
        payment: "Ödeme",
        contact: "İletişim"
    }
};

// تهيئة اللغة
function initLanguage() {
    const lang = localStorage.getItem('lang') || 'ar';
    document.getElementById('language').value = lang;
    applyLanguage(lang);
}

// تطبيق اللغة
function applyLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = translations[lang][key];
    });
}

// تغيير اللغة
document.getElementById('language').addEventListener('change', (e) => {
    const lang = e.target.value;
    localStorage.setItem('lang', lang);
    applyLanguage(lang);
});

// إدارة القائمة
function toggleMenu() {
    document.querySelector('.menu').classList.toggle('active');
}

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu') && !e.target.closest('.menu-icon')) {
        document.querySelector('.menu').classList.remove('active');
    }
});

// تبديل الأقسام
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        
        document.querySelector(targetId).classList.add('active');
        document.querySelector('.menu').classList.remove('active');
    });
});

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    document.querySelector('#home').classList.add('active');
});
