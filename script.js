 document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os dropdowns (caso tenha mais de um)
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
      const btn = dropdown.querySelector('.dropbtn');
      const submenu = dropdown.querySelector('.submenu');

      if (!btn || !submenu) return;

      // Toggle ao clicar no botão
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // evita que o click suba e feche imediatamente
        const isOpen = dropdown.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(isOpen));
        submenu.setAttribute('aria-hidden', String(!isOpen));
      });

      // Fecha ao clicar em qualquer item do submenu (opcional)
      submenu.addEventListener('click', (e) => {
        // se clicar num link dentro do submenu, fecha
        if (e.target.closest('a')) {
          dropdown.classList.remove('open');
          btn.setAttribute('aria-expanded', 'false');
          submenu.setAttribute('aria-hidden', 'true');
        }
      });
    });

    // Fecha todos os dropdowns ao clicar fora
    document.addEventListener('click', (e) => {
      dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target) && dropdown.classList.contains('open')) {
          const btn = dropdown.querySelector('.dropbtn');
          const submenu = dropdown.querySelector('.submenu');
          dropdown.classList.remove('open');
          if (btn) btn.setAttribute('aria-expanded', 'false');
          if (submenu) submenu.setAttribute('aria-hidden', 'true');
        }
      });
    });

    // Fecha com Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdowns.forEach(dropdown => {
          if (dropdown.classList.contains('open')) {
            const btn = dropdown.querySelector('.dropbtn');
            const submenu = dropdown.querySelector('.submenu');
            dropdown.classList.remove('open');
            if (btn) btn.setAttribute('aria-expanded', 'false');
            if (submenu) submenu.setAttribute('aria-hidden', 'true');
            if (btn) btn.focus();
          }
        });
      }
    });
  });

  const slidesContainer = document.querySelector('.slides-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// Inicializa
showSlide(currentIndex);
