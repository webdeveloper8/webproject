function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        
        document.getElementById(targetId).classList.add('active');
        document.getElementById('menu').style.display = 'none';
    });
});

document.addEventListener('click', (e) => {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (!menu.contains(e.target) && !menuIcon.contains(e.target)) {
        menu.style.display = 'none';
    }
});

// إظهار الصفحة الرئيسية عند التحميل
document.getElementById('home').classList.add('active');