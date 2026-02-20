/* ===================================================
   DARI TROCC — Homepage JS
   =================================================== */

// === Hero elements: make visible immediately (above fold) ===
document.addEventListener('DOMContentLoaded', function () {
  var heroElements = document.querySelectorAll('.hero .fade-up');
  heroElements.forEach(function (el, i) {
    setTimeout(function () {
      el.classList.add('is-visible');
    }, 300 + (i * 150));
  });
});

// === Smooth Scroll for hero scroll indicator ===
(function () {
  var scrollIndicator = document.querySelector('.hero__scroll');
  if (!scrollIndicator) return;

  scrollIndicator.style.cursor = 'pointer';
  scrollIndicator.addEventListener('click', function () {
    var collections = document.getElementById('collections');
    if (collections) {
      collections.scrollIntoView({ behavior: 'smooth' });
    }
  });
})();

// === Subtle parallax for hero background ===
(function () {
  var heroBg = document.querySelector('.hero__bg img');
  if (!heroBg) return;

  window.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset;
    if (scrolled < window.innerHeight) {
      heroBg.style.transform = 'translateY(' + (scrolled * 0.3) + 'px) scale(1.05)';
    }
  });
})();
