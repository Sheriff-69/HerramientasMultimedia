document.addEventListener('DOMContentLoaded', () => {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');

    let counter = 0;
    const size = images[0].clientWidth;

    function moveToNextSlide() {
        if (counter >= images.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }

    function moveToPreviousSlide() {
        if (counter <= 0) {
            counter = images.length - 1;
        } else {
            counter--;
        }
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }

    prevBtn.addEventListener('click', moveToPreviousSlide);
    nextBtn.addEventListener('click', moveToNextSlide);

    setInterval(moveToNextSlide, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm'); 
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === "admin" && password === "1234") {
            window.location.href = "cambios.html";
        } else {
            errorMessage.textContent = "Ay, mi amor, parece que las credenciales que pusiste no coinciden con las que te di. 😅 Por favor, revisa el nombre de usuario y la contraseña, que te las compartí con mucho cariño";
        }
    });
});




document.addEventListener('DOMContentLoaded', () => {

    function adjustMedioHeight() {
        const medio = document.getElementById('Medio');
        medio.style.height = 'auto';
        const dropdowns = document.querySelectorAll('.dropdown, .submenu');
        let totalHeight = 0;
        dropdowns.forEach(function(dropdown) {
            if (dropdown.style.display === 'block' || dropdown.style.display === '') {
                totalHeight += dropdown.scrollHeight;
            }
        });
        medio.style.height = `${totalHeight}px`;
    }
    document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            const dropdown = this.nextElementSibling;
            if (dropdown) {
                
                dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
                adjustMedioHeight();
            }
        });
    });
});




