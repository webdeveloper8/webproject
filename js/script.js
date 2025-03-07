// نظام الترجمة
const translations = {
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        projects: "مشاريعنا",
        contact: "اتصل بنا",
        hero_title: "شركة مطر للطاقة المتجددة",
        hero_sub: "خبرة 10 سنوات في حلول الطاقة الذكية",
        // جميع الترجمات العربية
    },
    en: {
        home: "Home",
        about: "About Us",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
        hero_title: "Mattar Renewable Energy",
        hero_sub: "10 Years Experience in Smart Energy",
        // جميع الترجمات الإنجليزية
    },
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımızda",
        services: "Hizmetler",
        projects: "Projeler",
        contact: "İletişim",
        hero_title: "Mattar Yenilenebilir Enerji",
        hero_sub: "Akıllı Enerjide 10 Yıllık Deneyim",
        // جميع الترجمات التركية
    }
};

// تغيير اللغة
document.getElementById('language').addEventListener('change', function(e) {
    const lang = e.target.value;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });
});

// إدارة القائمة
const menu = document.getElementById('menu');
let menuTimeout;

function toggleMenu() {
    clearTimeout(menuTimeout);
    menu.classList.toggle('active');
    
    if(menu.classList.contains('active')) {
        menuTimeout = setTimeout(() => {
            menu.classList.remove('active');
        }, 5000);
    }
}

// إغلاق القائمة
document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !e.target.classList.contains('menu-icon')) {
        menu.classList.remove('active');
    }
});

// تبديل الأقسام
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        // إخفاء جميع الأقسام
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
        
        // إظهار القسم المطلوب
        const targetSection = document.querySelector(targetId);
        targetSection.style.display = 'block';
        setTimeout(() => {
            targetSection.classList.add('active');
        }, 50);
        
        // إغلاق القائمة
        menu.classList.remove('active');
    });
});

// تهيئة أولية
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('home').style.display = 'block';
});
