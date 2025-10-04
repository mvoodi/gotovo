// js/nav-accordion.js
(function () {
  const menu = document.querySelector('.navbar__menu');
  if (!menu) return;

  const drops = Array.from(menu.querySelectorAll('.menu-drop'));

  // когда открывается один <details> — закрываем остальные
  drops.forEach((d) => {
    d.addEventListener('toggle', () => {
      if (d.open) {
        drops.forEach((other) => {
          if (other !== d) other.open = false;
        });
      }
    });

    // ESC закрывает текущий дропдаун
    const sum = d.querySelector('summary');
    if (sum) {
      sum.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') d.open = false;
      });
    }
  });

  // клик вне меню закрывает все дропдауны
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
      drops.forEach((d) => (d.open = false));
    }
  });
})();
