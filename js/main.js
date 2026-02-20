/* ===================================================
   DARI TROCC — Main JS (Shared across all pages)
   =================================================== */

// === Header Scroll Effect ===
(function () {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  let lastScroll = 0;
  window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
    lastScroll = currentScroll;
  });
})();

// === Mobile Navigation ===
(function () {
  const toggle = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('mobileNav');
  const overlay = document.getElementById('mobileOverlay');
  const close = document.getElementById('mobileNavClose');

  if (!toggle || !nav) return;

  function openMenu() {
    nav.style.display = 'block';
    overlay.style.display = 'block';
    requestAnimationFrame(function () {
      nav.classList.add('is-open');
      overlay.classList.add('is-visible');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('is-open');
    overlay.classList.remove('is-visible');
    document.body.style.overflow = '';
    setTimeout(function () {
      nav.style.display = '';
      overlay.style.display = '';
    }, 350);
  }

  toggle.addEventListener('click', openMenu);
  if (close) close.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);
})();

// === Scroll Reveal (IntersectionObserver) ===
(function () {
  var elements = document.querySelectorAll('.fade-up, .scale-in');
  if (!elements.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();

// === Cart Count Badge Update ===
function updateCartBadge() {
  var cart = JSON.parse(localStorage.getItem('daritroc_cart') || '[]');
  var total = cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
  var badges = document.querySelectorAll('#cartCount');
  badges.forEach(function (badge) {
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
  });
}

// === Add to Cart Utility ===
function addToCart(productId, qty) {
  qty = qty || 1;
  var cart = JSON.parse(localStorage.getItem('daritroc_cart') || '[]');
  var existing = cart.find(function (item) { return item.id === productId; });
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty });
  }
  localStorage.setItem('daritroc_cart', JSON.stringify(cart));
  updateCartBadge();
}

// Initialize cart badge on every page
document.addEventListener('DOMContentLoaded', updateCartBadge);
