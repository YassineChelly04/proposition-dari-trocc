/* ===================================================
   DARI TROCC — Product Page JS
   =================================================== */

(function () {
  var productInfoEl = document.getElementById('productInfo');
  var galleryMain = document.getElementById('galleryMain');
  var galleryThumbs = document.getElementById('galleryThumbs');
  var relatedGrid = document.getElementById('relatedGrid');
  var breadcrumbName = document.getElementById('breadcrumbName');

  if (!productInfoEl) return;

  var product = null;
  var currentImageIndex = 0;

  function init() {
    var params = new URLSearchParams(window.location.search);
    var id = params.get('id');

    if (!id) {
      product = PRODUCTS[0];
    } else {
      product = getProductById(id);
    }

    if (!product) {
      product = PRODUCTS[0];
    }

    renderProduct();
    renderGallery();
    renderRelated();
    setupAccordion();
    setupQuantity();
  }

  function renderProduct() {
    var categoryObj = CATEGORIES.find(function (c) { return c.slug === product.category; });
    var catLabel = categoryObj ? categoryObj.label : product.category;

    if (breadcrumbName) {
      breadcrumbName.textContent = product.name;
    }

    // Update page title
    document.title = product.name + ' — Dari Trocc';

    // Build details table
    var detailsRows = '';
    if (product.details) {
      Object.keys(product.details).forEach(function (key) {
        var label = key.charAt(0).toUpperCase() + key.slice(1);
        detailsRows += '<tr><td>' + label + '</td><td>' + product.details[key] + '</td></tr>';
      });
    }

    // WhatsApp link
    var whatsappText = encodeURIComponent(
      'Bonjour, je suis interesse(e) par "' + product.name + '" - ' + formatPrice(product.price) + '. Ref: #' + product.id
    );
    var whatsappLink = 'https://wa.me/216XXXXXXXX?text=' + whatsappText;

    productInfoEl.innerHTML =
      '<span class="product-info__category">' + catLabel + '</span>' +
      '<h1 class="product-info__name">' + product.name + '</h1>' +
      '<p class="product-info__name-ar" dir="rtl" lang="ar">' + product.nameAr + '</p>' +
      '<p class="product-info__price">' + formatPrice(product.price) + '</p>' +
      '<p class="product-info__description">' + product.description + '</p>' +

      '<div class="product-actions">' +
        '<div class="product-actions__row">' +
          '<div class="qty-selector">' +
            '<button id="qtyMinus" aria-label="Moins">−</button>' +
            '<input type="number" id="qtyInput" value="1" min="1" max="10" readonly>' +
            '<button id="qtyPlus" aria-label="Plus">+</button>' +
          '</div>' +
          '<button class="btn btn-gold btn-press" id="addToCartBtn">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 01-8 0"></path></svg> ' +
            'Ajouter au Panier' +
          '</button>' +
        '</div>' +
        '<a href="' + whatsappLink + '" target="_blank" class="btn btn-whatsapp btn-press btn--full">' +
          '<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg> ' +
          'Commander via WhatsApp' +
        '</a>' +
      '</div>' +

      '<div class="product-accordion">' +
        '<div class="accordion-item is-open">' +
          '<button class="accordion-header">' +
            'Description' +
            '<svg class="accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg>' +
          '</button>' +
          '<div class="accordion-body"><div class="accordion-body__inner">' + product.description + '</div></div>' +
        '</div>' +
        '<div class="accordion-item">' +
          '<button class="accordion-header">' +
            'Details & Dimensions' +
            '<svg class="accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg>' +
          '</button>' +
          '<div class="accordion-body"><div class="accordion-body__inner"><table class="details-table">' + detailsRows + '</table></div></div>' +
        '</div>' +
        '<div class="accordion-item">' +
          '<button class="accordion-header">' +
            'Livraison & Retours' +
            '<svg class="accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"></path></svg>' +
          '</button>' +
          '<div class="accordion-body"><div class="accordion-body__inner">' +
            '<p>Livraison gratuite a Tunis pour les commandes de plus de 150 TND.</p>' +
            '<p style="margin-top:8px;">Livraison dans toute la Tunisie sous 3-5 jours ouvrables.</p>' +
            '<p style="margin-top:8px;">Retours acceptes sous 14 jours dans l\'emballage d\'origine.</p>' +
          '</div></div>' +
        '</div>' +
      '</div>';
  }

  function renderGallery() {
    if (!galleryMain || !galleryThumbs) return;

    galleryMain.innerHTML = '<img src="' + product.images[0] + '" alt="' + product.name + '">';

    galleryThumbs.innerHTML = '';
    product.images.forEach(function (img, i) {
      var thumb = document.createElement('button');
      thumb.className = 'product-gallery__thumb' + (i === 0 ? ' active' : '');
      thumb.innerHTML = '<img src="' + img + '" alt="Vue ' + (i + 1) + '">';
      thumb.addEventListener('click', function () {
        currentImageIndex = i;
        galleryMain.innerHTML = '<img src="' + img + '" alt="' + product.name + '">';
        galleryThumbs.querySelectorAll('.product-gallery__thumb').forEach(function (t) {
          t.classList.remove('active');
        });
        thumb.classList.add('active');
      });
      galleryThumbs.appendChild(thumb);
    });
  }

  function renderRelated() {
    if (!relatedGrid) return;

    var related = PRODUCTS.filter(function (p) {
      return p.id !== product.id && p.category === product.category;
    }).slice(0, 4);

    // If not enough in same category, fill from other products
    if (related.length < 4) {
      var others = PRODUCTS.filter(function (p) {
        return p.id !== product.id && !related.find(function (r) { return r.id === p.id; });
      });
      related = related.concat(others.slice(0, 4 - related.length));
    }

    relatedGrid.innerHTML = '';
    related.forEach(function (p, index) {
      var delay = (index % 4) + 1;
      var categoryObj = CATEGORIES.find(function (c) { return c.slug === p.category; });
      var catLabel = categoryObj ? categoryObj.label : p.category;

      var badgeHTML = '';
      if (p.badge === 'nouveau') {
        badgeHTML = '<span class="product-card__badge product-card__badge--new">Nouveau</span>';
      } else if (p.badge === 'populaire') {
        badgeHTML = '<span class="product-card__badge product-card__badge--sale">Populaire</span>';
      }

      var card = document.createElement('a');
      card.href = 'product.html?id=' + p.id;
      card.className = 'product-card fade-up fade-up-delay-' + delay;
      card.innerHTML =
        '<div class="product-card__image">' +
          '<img src="' + p.images[0] + '" alt="' + p.name + '" loading="lazy">' +
          badgeHTML +
        '</div>' +
        '<div class="product-card__info">' +
          '<p class="product-card__category">' + catLabel + '</p>' +
          '<h3 class="product-card__name">' + p.name + '</h3>' +
          '<p class="product-card__price">' + formatPrice(p.price) + '</p>' +
        '</div>';
      relatedGrid.appendChild(card);
    });

    // Observe for animations
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    relatedGrid.querySelectorAll('.fade-up').forEach(function (el) {
      observer.observe(el);
    });
  }

  function setupAccordion() {
    document.addEventListener('click', function (e) {
      var header = e.target.closest('.accordion-header');
      if (!header) return;
      var item = header.parentElement;
      item.classList.toggle('is-open');
    });
  }

  function setupQuantity() {
    document.addEventListener('click', function (e) {
      if (e.target.id === 'qtyPlus' || e.target.closest('#qtyPlus')) {
        var input = document.getElementById('qtyInput');
        if (input && parseInt(input.value) < 10) {
          input.value = parseInt(input.value) + 1;
        }
      }
      if (e.target.id === 'qtyMinus' || e.target.closest('#qtyMinus')) {
        var input = document.getElementById('qtyInput');
        if (input && parseInt(input.value) > 1) {
          input.value = parseInt(input.value) - 1;
        }
      }
      if (e.target.id === 'addToCartBtn' || e.target.closest('#addToCartBtn')) {
        var input = document.getElementById('qtyInput');
        var qty = input ? parseInt(input.value) : 1;
        addToCart(product.id, qty);

        // Visual feedback
        var btn = document.getElementById('addToCartBtn');
        if (btn) {
          var original = btn.innerHTML;
          btn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg> Ajoute!';
          btn.style.background = 'var(--color-teal)';
          setTimeout(function () {
            btn.innerHTML = original;
            btn.style.background = '';
          }, 1500);
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
