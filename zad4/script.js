

document.addEventListener('DOMContentLoaded', () => {
    
    
    const themeBtn = document.getElementById('theme-toggle-btn');
    const themeStylesheet = document.getElementById('theme-stylesheet');

    themeBtn.addEventListener('click', () => {
        
        const currentTheme = themeStylesheet.getAttribute('href');
        
        
        if (currentTheme === 'red.css') {
            themeStylesheet.setAttribute('href', 'green.css');
        } else {
            themeStylesheet.setAttribute('href', 'red.css');
        }
    });

    
    const sectionBtn = document.getElementById('section-toggle-btn');
    const experienceSection = document.getElementById('experience-section');

    sectionBtn.addEventListener('click', () => {
        
        if (experienceSection.style.display === 'none') {
            experienceSection.style.display = 'block'; 
        } else {
            experienceSection.style.display = 'none'; 
        }
    });

});