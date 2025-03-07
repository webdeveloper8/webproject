document.addEventListener('DOMContentLoaded', () => {
    // إدارة القائمة المنسدلة
    const navLinks = document.querySelectorAll('.nav-list a');
    const sections = document.querySelectorAll('section');
    
    function toggleMenu() {
        document.querySelector('.nav-list').classList.toggle('active');
    }
    
    // إغلاق/فتح الأقسام
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            
            // إخفاء جميع الأقسام
            sections.forEach(section => section.classList.remove('active-section'));
            target.classList.add('active-section');
            
            // إغلاق القائمة
            toggleMenu();
        });
    });
    
    // نظام رفع الصور
    const setupUpload = (inputId, previewId) => {
        const input = document.getElementById(inputId);
        const preview = document.getElementById(previewId);
        const label = input.previousElementSibling;
        
        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if(file) {
                if(preview.src && !verifyPassword()) return;
                
                const reader = new FileReader();
                reader.onload = (e) => {
                    preview.src = e.target.result;
                    preview.style.display = 'block';
                    label.style.display = 'none';
                }
                reader.readAsDataURL(file);
            }
        });
    }
    
    const verifyPassword = () => {
        return prompt('أدخل كلمة المرور:') === 'baraa';
    }
    
    // تهيئة أنظمة الرفع
    setupUpload('mainUpload', 'mainPreview');
    setupUpload('aboutUpload', 'aboutPreview');
    setupUpload('productUpload', 'productPreview');
    
    // إغلاق القائمة عند التمرير
    window.addEventListener('scroll', () => {
        if(document.querySelector('.nav-list.active')) {
            toggleMenu();
        }
    });
});
