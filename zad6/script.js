

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


    

    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            
            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            
            const firstNameError = document.getElementById('firstNameError');
            const lastNameError = document.getElementById('lastNameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');
            const successMessage = document.getElementById('successMessage');
            
            
            firstNameError.textContent = '';
            lastNameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            successMessage.style.display = 'none';
            
            let isValid = true;
            const hasNumbersRegex = /\d/; 
            
            
            if (firstName === '') {
                firstNameError.textContent = 'Pole Imię jest wymagane.';
                isValid = false;
            } else if (hasNumbersRegex.test(firstName)) {
                firstNameError.textContent = 'Imię nie może zawierać cyfr.';
                isValid = false;
            }
            
            
            if (lastName === '') {
                lastNameError.textContent = 'Pole Nazwisko jest wymagane.';
                isValid = false;
            } else if (hasNumbersRegex.test(lastName)) {
                lastNameError.textContent = 'Nazwisko nie może zawierać cyfr.';
                isValid = false;
            }
            
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                emailError.textContent = 'Pole E-mail jest wymagane.';
                isValid = false;
            } else if (!emailRegex.test(email)) {
                emailError.textContent = 'Podaj poprawny adres e-mail (np. jan@domena.pl).';
                isValid = false;
            }
            
            
            if (message === '') {
                messageError.textContent = 'Wiadomość nie może być pusta.';
                isValid = false;
            }
            
            
            if (isValid) {
                successMessage.style.display = 'block';
                contactForm.reset(); 
            }
        });
    }


    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Błąd sieci lub pliku JSON nie znaleziono');
            }
            return response.json(); 
        })
        .then(data => {
            
            const skillsList = document.getElementById('skills-list');
            if (skillsList) {
                data.skills.forEach(skill => {
                    const li = document.createElement('li');
                    li.textContent = skill;
                    skillsList.appendChild(li); 
                });
            }

            
            const projectsList = document.getElementById('projects-list');
            if (projectsList) {
                data.projects.forEach(project => {
                    const li = document.createElement('li');
                    
                    li.innerHTML = `<strong>${project.name}:</strong> ${project.description}`;
                    projectsList.appendChild(li); 
                });
            }
        })
        .catch(error => {
            console.error('Błąd podczas pobierania danych:', error);
        });
});