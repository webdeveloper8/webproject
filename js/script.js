// عناصر DOM الأساسية
const menu = document.getElementById('menu');
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // إضافة المحتوى الديناميكي
    populateHomeSection();
    populateAboutSection();
    
    // تفعيل القسم الأول
    document.getElementById('home').classList.add('active');
});

// وظائف القائمة
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

// إغلاق القائمة عند التمرير
window.addEventListener('scroll', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuIcon.classList.remove('active');
    }
});

// التنقل بين الأقسام
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        
        sections.forEach(section => section.classList.remove('active'));
        targetSection.classList.add('active');
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        menu.classList.remove('active');
        menuIcon.classList.remove('active');
    });
});

// إغلاق القائمة بمفتاح Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuIcon.classList.remove('active');
    }
});

// المحتوى الديناميكي
function populateHomeSection() {
    const homeContent = `
        <div class="company-profile">
            <h2>الطاقة النظيفة لمستقبل أفضل</h2>
            <p>
                شركة رائدة في مجال حلول الطاقة المتجددة منذ 2010، نقدم أنظمة شمسية 
                بمعايير عالمية مع ضمان يصل إلى 25 سنة. أكثر من 500 مشروع ناجح 
                في جميع أنحاء المملكة.
            </p>
            <div class="stats">
                <div class="stat-item">
                    <h3>14+</h3>
                    <p>سنوات الخبرة</p>
                </div>
                <div class="stat-item">
                    <h3>85%</h3>
                    <p>توفير في الاستهلاك</p>
                </div>
            </div>
        </div>
    `;
    document.getElementById('home').insertAdjacentHTML('afterbegin', homeContent);
}

function populateAboutSection() {
    const aboutContent = `
        <h2>خبرة تمتد عبر الزمن</h2>
        <div class="timeline">
            <div class="timeline-item">
                <h3>2010</h3>
                <p>تأسيس الشركة بأول مشروع تجاري</p>
            </div>
            <div class="timeline-item">
                <h3>2018</h3>
                <p>الحصول على شهادة الجودة العالمية</p>
            </div>
            <div class="timeline-item">
                <h3>2024</h3>
                <p>وصول عدد العملاء إلى 5000+ عميل</p>
            </div>
        </div>
    `;
    document.querySelector('#about .about-container').innerHTML = aboutContent;
}
