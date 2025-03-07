class SolarCompany {
    constructor() {
        this.uploadContainers = document.querySelectorAll('.upload-container');
        this.translations = {
            ar: {
                home: 'الرئيسية',
                about: 'عن الشركة',
                // ... جميع الترجمات العربية
            },
            en: {
                home: 'Home',
                about: 'About',
                // ... جميع الترجمات الإنجليزية
            },
            tr: {
                home: 'Ana Sayfa',
                about: 'Hakkımızda',
                // ... جميع الترجمات التركية
            }
        };
        this.init();
    }

    init() {
        this.setupUploadSystem();
        this.setupEventListeners();
        this.setLanguage('ar');
    }

    setupUploadSystem() {
        this.uploadContainers.forEach(container => {
            const input = container.querySelector('input');
            const label = container.querySelector('.upload-label');
            const preview = container.querySelector('.upload-preview');

            label.addEventListener('click', () => {
                if(preview.style.display === 'block' && !this.verifyPassword()) return;
                input.click();
            });

            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if(file) this.handleImageUpload(file, preview, label);
            });
        });
    }

    handleImageUpload(file, preview, label) {
        const reader = new FileReader();
        reader.onload = (e) => {
            preview.src = e.target.result;
            preview.style.display = 'block';
            label.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }

    verifyPassword() {
        const pass = prompt('كلمة المرور المطلوبة للتعديل:');
        return pass === 'baraa';
    }

    setLanguage(lang) {
        document.documentElement.setAttribute('data-lang', lang);
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.dataset.langKey;
            el.textContent = this.translations[lang][key] || el.textContent;
        });
    }

    setupEventListeners() {
        // إدارة القائمة المنسدلة
        document.querySelector('.menu-icon').addEventListener('click', this.toggleMenu);
        
        // إغلاق القائمة عند التمرير
        window.addEventListener('scroll', () => {
            if(document.querySelector('.nav-list.active')) this.toggleMenu();
        });
    }

    toggleMenu() {
        document.querySelector('.nav-list').classList.toggle('active');
        document.querySelector('.menu-icon').classList.toggle('active');
    }

    changeLanguage(lang) {
        this.setLanguage(lang);
    }
}

// بدء التشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => new SolarCompany());
