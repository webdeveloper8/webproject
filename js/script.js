// نظام الترجمة المتكامل
const translations = {
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        payment: "الدفع الإلكتروني",
        contact: "اتصل بنا",
        payment_title: "الدفع الآمن",
        payment_btn: "ادفع الآن عبر البطاقة",
        whatsapp: "محادثة واتساب"
    },
    en: {
        home: "Home",
        about: "About",
        services: "Services",
        payment: "Payment",
        contact: "Contact",
        payment_title: "Secure Payment",
        payment_btn: "Pay with Card",
        whatsapp: "WhatsApp Chat"
    },
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımızda",
        services: "Hizmetler",
        payment: "Ödeme",
        contact: "İletişim",
        payment_title: "Güvenli Ödeme",
        payment_btn: "Kartla Öde",
        whatsapp: "WhatsApp Sohbet"
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
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        el.textContent = translations[lang][key] || translations['ar'][key];
    });
    
    // تحديث زر الواتساب
    const whatsappBtn = document.querySelector('.whatsapp-link');
    if(whatsappBtn) {
        whatsappBtn.textContent = translations[lang].whatsapp;
    }
}

// تغيير اللغة
document.getElementById('language').addEventListener('change', (e) => {
    const lang = e.target.value;
    localStorage.setItem('lang', lang);
    applyLanguage(lang);
});

// إدارة القائمة
const menu = document.getElementById('menu');
let menuTimer;

function toggleMenu() {
    menu.classList.toggle('active');
    clearTimeout(menuTimer);
    if(menu.classList.contains('active')) {
        menuTimer = setTimeout(() => menu.classList.remove('active'), 5000);
    }
}

// إغلاق القائمة
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !e.target.classList.contains('menu-icon')) {
        menu.classList.remove('active');
    }
});

// تبديل الأقسام
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
        
        const targetSection = document.querySelector(targetId);
        targetSection.style.display = 'block';
        setTimeout(() => targetSection.classList.add('active'), 50);
        
        menu.classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    document.getElementById('home').style.display = 'block';
    
    // إضافة رابط الواتساب ديناميكيًا
    const phoneElement = document.querySelector('#contact p:nth-child(1)');
    if(phoneElement) {
        phoneElement.innerHTML = `
            ${translations[document.documentElement.lang].phone}:
            <a class="whatsapp-link" 
               href="https://wa.me/963958944604" 
               target="_blank" 
               rel="noopener noreferrer">
                ${translations[document.documentElement.lang].whatsapp}
            </a>
        `;
    }
});

// إدارة الدفع
document.querySelector('.payment-btn').addEventListener('click', () => {
    window.open(
        'https://securepaymentgateway.com/pay?iban=SY023232323232323',
        '_blank',
        'noopener,noreferrer'
    );
});
