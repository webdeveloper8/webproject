const translations = {
    ar: {
        title: "شركة مطر للطاقة الشمسية",
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        payment: "الدفع الإلكتروني",
        contact: "اتصل بنا",
        hero_title: "حلول طاقة شمسية منذ 2013",
        hero_sub: "خبرة عريقة في تصميم الأنظمة الذكية",
        hero_desc1: "نقدم حلولاً متكاملة لأنظمة الطاقة الشمسية للمنازل والمصانع والمشاريع الزراعية...",
        why_us: "لماذا نحن الأفضل؟",
        feature1: "تصميم أنظمة طاقة حسب الطلب",
        feature2: "ضمان 10 سنوات على المكونات",
        feature3: "فريق فني مؤهل بخبرة 15 عاماً",
        feature4: "أسعار تنافسية مع تمويل مرن",
        tech_partners: "نستخدم أحدث التقنيات العالمية من شركات Siemens و LG...",
        about_title: "تاريخنا العريق",
        history_desc1: "تأسست شركة مطر عام 2013 في ريف دمشق كشركة عائلية صغيرة...",
        achievements: "إنجازاتنا:",
        achievement1: "تركيب أكثر من 5000 لوح شمسي",
        achievement2: "توفير 5 ملايين لتر مازوت",
        achievement3: "تخفيض انبعاثات كربونية بأكثر من 80%",
        our_team: "فريقنا:",
        team_desc: "مهندسون معتمدون من أفضل الجامعات العالمية...",
        services_title: "حلولنا المتكاملة",
        service1_title: "الأنظمة المنزلية",
        service1_desc: "أنظمة 3-10 كيلو واط مع محولات SMA الألمانية...",
        service1_feature1: "مراقبة ذكية عبر الهاتف",
        service1_feature2: "بطاريات ليثيوم طويلة الأمد",
        service2_title: "المشاريع الصناعية",
        service2_desc: "حلول تصل إلى 1 ميجا واط مع أنظمة تتبع شمسي...",
        payment_title: "الدفع الآمن",
        bank_account: "الحساب البنكي:",
        bank_name: "بنك الشام - فرع ريف دمشق",
        pay_now: "ادفع الآن",
        payment_instructions: "تعليمات الدفع:",
        step1: "اختر المبلغ المطلوب",
        step2: "أدخل بيانات البطاقة",
        step3: "احصل على إشعار الدفع عبر الإيميل",
        contact_title: "تواصل معنا",
        phone: "الهاتف: 0958944604",
        email: "البريد: info@mattar-solar.com",
        send_message: "أرسل رسالة:",
        name_placeholder: "الاسم",
        email_placeholder: "الإيميل",
        message_placeholder: "الرسالة",
        send: "إرسال"
    },
    en: { /* الترجمات الإنجليزية */ },
    tr: { /* الترجمات التركية */ }
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

document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

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
});

// إدارة الدفع
document.querySelector('.payment-btn').addEventListener('click', () => {
    window.open(
        'https://securepaymentgateway.com/pay?iban=SY023232323232323',
        '_blank',
        'noopener,noreferrer'
    );
});
