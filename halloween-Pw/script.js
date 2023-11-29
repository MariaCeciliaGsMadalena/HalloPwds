const menuToggle = document.querySelector(".menu-toggle");
const menuList = document.querySelector(".menu-list");
menuToggle.addEventListener("click", () => {
    menuList.classList.toggle("show-menu");
});

function createFavicon() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 16;
    canvas.height = 16;
    const link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'icon';
    link.href = canvas.toDataURL();
    document.head.appendChild(link);
}
createFavicon();

const saibaMaisButtons = document.querySelectorAll(".saiba-mais");
saibaMaisButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Add your logic here for what to do when a button is clicked.
        // For example, window.location.href = "pagina-de-informacoes.html";
    });
});

function playAudio() {
    var audio = document.getElementById("meuAudio");
    audio.play();
}

// Call the function on window load
window.onload = playAudio;

const card = document.querySelector('.card');
let isDragging = false;
let initialX;
let currentX;

const customCursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});
window.addEventListener('load', function() {
    playAudioLoop();
});
window.addEventListener('load', function() {
    playAudioLoop();
});
function playAudioLoop() {
    const audio = document.getElementById('meuAudio');
    if (audio) {
        audio.loop = true; // Configura o áudio para tocar em loop
        audio.play().then(() => {
            // A reprodução foi iniciada com sucesso
        }).catch(error => {
            // A reprodução foi bloqueada pelo navegador
            // Exiba uma mensagem ao usuário para iniciar manualmente
            const playButton = document.getElementById('playButton');
            playButton.style.display = 'block';
            playButton.addEventListener('click', () => {
                audio.play(); // Inicia a reprodução ao clicar no botão
                playButton.style.display = 'none'; // Oculta o botão após a reprodução manual
            });
        });
    }
}
window.addEventListener('load', function() {
    const playButton = document.getElementById('playButton');
    const audio = document.getElementById('meuAudio');

    if (audio && playButton) {
        playButton.addEventListener('click', function() {
            audio.play().catch(function(error) {
                console.error('Erro ao reproduzir áudio:', error);
            });
            playButton.style.display = 'none';
        });
    }
});
const carouselItems = document.querySelectorAll('.carousel-item');
const carouselIndicators = document.querySelectorAll('.carousel-indicator');
let slideIndex = 0;

function setActiveIndicator(index) {
    carouselIndicators.forEach((indicator, i) => {
        if (i === index) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Função para avançar os slides
function nextSlide() {
    if (slideIndex < carouselItems.length - 1) {
        carouselItems[slideIndex].classList.remove('active');
        slideIndex++;
        carouselItems[slideIndex].classList.add('active');
        setActiveIndicator(slideIndex);
    }
}

// Função para retroceder os slides
function prevSlide() {
    if (slideIndex > 0) {
        carouselItems[slideIndex].classList.remove('active');
        slideIndex--;
        carouselItems[slideIndex].classList.add('active');
        setActiveIndicator(slideIndex);
    }
}

// Adicione os ouvintes de eventos aos botões do carrossel
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Inicialize o carrossel
setActiveIndicator(slideIndex);
