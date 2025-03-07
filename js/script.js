const translations = {
    ar: {
        home: "الرئيسية",
        about: "عن الشركة",
        products: "المنتجات",
        contact: "التواصل",
        company_name: "شركة أبو معاذ مطر للطاقة الشمسية",
        upload_main: "رفع شعار الشركة"
    },
    en: {
        home: "Home",
        about: "About Us",
        products: "Products",
        contact: "Contact",
        company_name: "Abu Maaz Matar Solar Energy",
        upload_main: "Upload Company Logo"
    },
    tr: {
        home: "Ana Sayfa",
        about: "Hakkımızda",
        products: "Ürünler",
        contact: "İletişim",
        company_name: "Abu Maaz Matar Güneş Enerjisi",
        upload_main: "Şirket Logosu Yükle"
    }
};

function changeLanguage(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        el.textContent = translations[lang][key];
    });
}

// نظام إدارة الأقسام
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        
        target.classList.add('active');
        document.querySelector('.menu').classList.remove('active');
    });
});

// نظام رفع الصور مع الحماية
document.querySelectorAll('input[type="file"]').forEach(input => {
    input.addEventListener('change', function(e) {
        const preview = this.nextElementSibling;
        const file = e.target.files[0];
        
        if(file) {
            if(preview.src && !confirmPassword()) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                preview.src = e.target.result;
                preview.style.display = 'block';
                this.previousElementSibling.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    });
});

function confirmPassword() {
    return prompt('كلمة المرور المطلوبة:') === 'baraa';
}
