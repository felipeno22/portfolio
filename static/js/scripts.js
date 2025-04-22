const mobileMenu = document.getElementById('mobile-menu');
const menu = document.querySelector('.menu');

// Alternar o menu com um clique (usado no celular e no desktop)
mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Mostrar o menu ao passar o mouse
mobileMenu.addEventListener('mouseover', () => {
    menu.classList.add('active');
});

menu.addEventListener('touchstart', () => {
    menu.classList.add('active');
});

// Fechar o menu ao clicar fora dele (para celular e desktop)
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !mobileMenu.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// Fechar o menu ao selecionar uma opção
document.querySelectorAll('.menu li a').forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});
