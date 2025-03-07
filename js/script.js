// إدارة القائمة والأقسام
const menu = document.getElementById('menu');
const menuIcon = document.querySelector('.menu-icon');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.menu a');

function toggleMenu() {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

// إغلاق القائمة عند النقر خارجها
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
        menu.classList.remove('active');
        menuIcon.classList.remove('active');
    }
});

// إدارة الأقسام
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        
        sections.forEach(section => {
            section.classList.remove('active');
        });
        target.classList.add('active');
        
        // إغلاق القائمة
        menu.classList.remove('active');
        menuIcon.classList.remove('active');
        
        // التمرير للأعلى
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// نظام رفع الصور
const setupUpload = (inputId, previewId) => {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    const label = input.previousElementSibling;

    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            if (preview.src && !verifyPassword()) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                preview.src = e.target.result;
                preview.style.display = 'block';
                label.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    });
}

const verifyPassword = () => {
    return prompt('كلمة المرور المطلوبة:') === 'baraa';
}

// تهيئة أنظمة الرفع
setupUpload('headerUpload', 'headerPreview');
setupUpload('aboutUpload', 'aboutPreview');
setupUpload('product1Upload', 'product1Preview');

// تفعيل القسم الأول عند التحميل
window.onload = () => {
    document.querySelector('#home').classList.add('active');
}
