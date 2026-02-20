/* ===================================================
   DARI TROCC — Shop Page JS
   =================================================== */

(function () {
  var currentCategory = 'all';
  var currentSort = 'default';
  var visibleCount = 8;
  var ITEMS_PER_LOAD = 4;

  // DOM elements
  var gridEl = document.getElementById('shopGrid');
  var pillsContainer = document.getElementById('filterPills');
  var sortSelect = document.getElementById('sortSelect');
  var loadMoreBtn = document.getElementById('loadMoreBtn');
  var resultsCount = document.getElementById('resultsCount');

  if (!gridEl) return;

  // Initialize
  function init() {
    // Check URL params for category
    var params = new URLSearchParams(window.location.search);
    var catParam = params.get('cat');
    if (catParam && CATEGORIES.find(function (c) { return c.slug === catParam; })) {
      currentCategory = catParam;
    }

    renderPills();
    renderGrid();
    setupEvents();
  }

  // Render category pills
  function renderPills() {
    if (!pillsContainer) return;
    pillsContainer.innerHTML = '';
    CATEGORIES.forEach(function (cat) {
      var pill = document.createElement('button');
      pill.className = 'pill' + (cat.slug === currentCategory ? ' active' : '');
      pill.textContent = cat.label;
      pill.dataset.category = cat.slug;
      pill.addEventListener('click', function () {
        currentCategory = cat.slug;
        visibleCount = 8;
        renderPills();
        renderGrid();
      });
      pillsContainer.appendChild(pill);
    });
  }

  // Get filtered and sorted products
  function getFilteredProducts() {
    var products = getProductsByCategory(currentCategory);

    switch (currentSort) {
      case 'price-asc':
        products = products.slice().sort(function (a, b) { return a.price - b.price; });
        break;
      case 'price-desc':
        products = products.slice().sort(function (a, b) { return b.price - a.price; });
        break;
      case 'newest':
        products = products.slice().sort(function (a, b) { return b.id - a.id; });
        break;
      default:
        break;
    }

    return products;
  }

  // Render product grid
  function renderGrid() {
    var products = getFilteredProducts();
    var visible = products.slice(0, visibleCount);

    // Update results count
    if (resultsCount) {
      resultsCount.textContent = products.length + ' produit' + (products.length > 1 ? 's' : '');
    }

    // Show/hide load more
    if (loadMoreBtn) {
      loadMoreBtn.style.display = visibleCount >= products.length ? 'none' : 'inline-flex';
    }

    // Build grid HTML
    gridEl.innerHTML = '';
    visible.forEach(function (product, index) {
      var card = createProductCard(product, index);
      gridEl.appendChild(card);
    });

    // Re-observe for scroll animations
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    gridEl.querySelectorAll('.fade-up').forEach(function (el) {
      observer.observe(el);
    });
  }

  // Create single product card element
  function createProductCard(product, index) {
    var delay = (index % 4) + 1;
    var card = document.createElement('a');
    card.href = 'product.html?id=' + product.id;
    card.className = 'product-card fade-up fade-up-delay-' + delay;

    var badgeHTML = '';
    if (product.badge === 'nouveau') {
      badgeHTML = '<span class="product-card__badge product-card__badge--new">Nouveau</span>';
    } else if (product.badge === 'populaire') {
      badgeHTML = '<span class="product-card__badge product-card__badge--sale">Populaire</span>';
    }

    var categoryLabel = CATEGORIES.find(function (c) { return c.slug === product.category; });
    var catName = categoryLabel ? categoryLabel.label : product.category;

    card.innerHTML =
      '<div class="product-card__image">' +
        '<img src="' + product.images[0] + '" alt="' + product.name + '" loading="lazy">' +
        badgeHTML +
        '<div class="product-card__overlay">' +
          '<button class="product-card__overlay-btn" aria-label="Apercu rapide" onclick="event.preventDefault();">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>' +
          '</button>' +
          '<button class="product-card__overlay-btn" aria-label="Ajouter au panier" onclick="event.preventDefault(); addToCart(' + product.id + ');">' +
            '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 01-8 0"></path></svg>' +
          '</button>' +
        '</div>' +
      '</div>' +
      '<div class="product-card__info">' +
        '<p class="product-card__category">' + catName + '</p>' +
        '<h3 class="product-card__name">' + product.name + '</h3>' +
        '<p class="product-card__price">' + formatPrice(product.price) + '</p>' +
      '</div>';

    return card;
  }

  // Setup event listeners
  function setupEvents() {
    // Sort change
    if (sortSelect) {
      sortSelect.addEventListener('change', function () {
        currentSort = this.value;
        renderGrid();
      });
    }

    // Load more
    if (loadMoreBtn) {
      loadMoreBtn.addEventListener('click', function () {
        visibleCount += ITEMS_PER_LOAD;
        renderGrid();
      });
    }

    // Sticky filter bar adjustment for scrolled header
    var header = document.getElementById('siteHeader');
    var filterBar = document.querySelector('.filter-bar');
    if (header && filterBar) {
      window.addEventListener('scroll', function () {
        if (header.classList.contains('is-scrolled')) {
          filterBar.classList.add('header-shrunk');
        } else {
          filterBar.classList.remove('header-shrunk');
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();
