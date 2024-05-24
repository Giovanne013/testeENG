
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

let counter = 1;
const slides = document.getElementsByClassName('slides');
const radios = document.querySelectorAll('input[name="radio-btn"]');
const intervalTime = 9000; // Tempo de intervalo entre slides (em milissegundos)

function autoSlide() {
    counter++;
    if (counter > radios.length) {
        counter = 1;
    }
    document.getElementById(`radio${counter}`).checked = true;
    slides.style.transform = `translateX(${-(counter - 1) * 100}%)`;
}

// Automação do slide
let slideInterval = setInterval(autoSlide, intervalTime);

    // Pausar o slide ao passar o mouse
    slides.addEventListener('mouseover',() => {
        clearInterval(slideInterval);
    });

    // Retomar o slide ao sair com o mouse
    slides.addEventListener('mouseout', () => {
        slideInterval = setInterval(autoSlide, intervalTime);
    });


    
    document.addEventListener("DOMContentLoaded", function() {
        const element = document.getElementById("typing");
        const text = "Olá, este é um texto que se digita sozinho!";
        const speed = 100; // Velocidade de digitação em milissegundos
    
        let index = 0;
    
        function typeWriter() {
            if (index < text.length) {
                element.innerHTML += text.charAt(index);
                index++;
                setTimeout(typeWriter, speed);
            }
        }
    
        typeWriter();
    });
    