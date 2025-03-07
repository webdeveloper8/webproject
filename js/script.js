document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // إدارة القائمة
    function toggleMenu() {
        const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('active');
    }

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
            menu.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // التنقل السلس
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // إخفاء جميع الأقسام
            sections.forEach(section => {
                section.classList.remove('active');
                section.setAttribute('aria-hidden', 'true');
            });

            // إظهار القسم المطلوب
            targetSection.classList.add('active');
            targetSection.setAttribute('aria-hidden', 'false');

            // التمرير السلس للأعلى
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // إغلاق القائمة
            menu.classList.remove('active');
            menuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // إدارة ARIA للأقسام
    function updateAria() {
        sections.forEach(section => {
            const isActive = section.classList.contains('active');
            section.setAttribute('aria-hidden', !isActive);
        });
    }

    // تهيئة أولية
    updateAria();
    menuBtn.setAttribute('aria-expanded', 'false');

    // إدارة الأحداث
    menuBtn.addEventListener('click', toggleMenu);
});
