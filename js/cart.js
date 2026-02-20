/* ===================================================
   DARI TROCC — Cart & Checkout JS
   =================================================== */

(function () {
  var currentStep = 1;

  // DOM elements
  var step1 = document.getElementById('cartStep1');
  var step2 = document.getElementById('cartStep2');
  var step3 = document.getElementById('cartStep3');
  var cartItemsEl = document.getElementById('cartItems');
  var cartSummaryEl = document.getElementById('cartSummary');
  var emptyCartEl = document.getElementById('emptyCart');

  if (!step1) return;

  function init() {
    renderCart();
    setupEvents();
  }

  function getCart() {
    return JSON.parse(localStorage.getItem('daritroc_cart') || '[]');
  }

  function saveCart(cart) {
    localStorage.setItem('daritroc_cart', JSON.stringify(cart));
    updateCartBadge();
  }

  function renderCart() {
    var cart = getCart();

    if (cart.length === 0) {
      if (cartItemsEl) cartItemsEl.style.display = 'none';
      if (cartSummaryEl) cartSummaryEl.style.display = 'none';
      if (emptyCartEl) emptyCartEl.style.display = 'block';
      return;
    }

    if (emptyCartEl) emptyCartEl.style.display = 'none';
    if (cartItemsEl) cartItemsEl.style.display = 'flex';
    if (cartSummaryEl) cartSummaryEl.style.display = 'block';

    // Render items
    if (cartItemsEl) {
      cartItemsEl.innerHTML = '';
      cart.forEach(function (item) {
        var product = getProductById(item.id);
        if (!product) return;

        var categoryObj = CATEGORIES.find(function (c) { return c.slug === product.category; });
        var catLabel = categoryObj ? categoryObj.label : '';

        var el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML =
          '<div class="cart-item__image">' +
            '<img src="' + product.images[0] + '" alt="' + product.name + '">' +
          '</div>' +
          '<div class="cart-item__info">' +
            '<h3>' + product.name + '</h3>' +
            '<p>' + catLabel + '</p>' +
            '<div class="qty-selector" style="margin-top: 8px;">' +
              '<button class="qty-cart-minus" data-id="' + item.id + '" aria-label="Moins">−</button>' +
              '<input type="number" value="' + item.qty + '" readonly>' +
              '<button class="qty-cart-plus" data-id="' + item.id + '" aria-label="Plus">+</button>' +
            '</div>' +
          '</div>' +
          '<div class="cart-item__price">' + formatPrice(product.price * item.qty) + '</div>' +
          '<button class="cart-item__remove" data-id="' + item.id + '" aria-label="Supprimer">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
          '</button>';
        cartItemsEl.appendChild(el);
      });
    }

    // Render summary
    renderSummary(cart);
  }

  function renderSummary(cart) {
    var subtotal = 0;
    cart.forEach(function (item) {
      var product = getProductById(item.id);
      if (product) subtotal += product.price * item.qty;
    });

    var shipping = subtotal >= 150 ? 0 : 7;
    var total = subtotal + shipping;

    var summaryHTML =
      '<div class="summary-row"><span>Sous-total</span><span>' + formatPrice(subtotal) + '</span></div>' +
      '<div class="summary-row"><span>Livraison</span><span>' + (shipping === 0 ? 'Gratuite' : formatPrice(shipping)) + '</span></div>' +
      (shipping > 0 ? '<div class="summary-row" style="font-size: 0.75rem; color: var(--color-teal);">Livraison gratuite a partir de 150 TND</div>' : '') +
      '<div class="summary-row total"><span>Total</span><span class="value">' + formatPrice(total) + '</span></div>';

    // Update both step 1 and step 2 summaries
    var summaryContent = document.getElementById('summaryContent');
    if (summaryContent) summaryContent.innerHTML = summaryHTML;

    var summaryContent2 = document.getElementById('summaryContent2');
    if (summaryContent2) summaryContent2.innerHTML = summaryHTML;
  }

  function goToStep(step) {
    currentStep = step;
    [step1, step2, step3].forEach(function (el, i) {
      if (el) {
        el.classList.toggle('active', i + 1 === step);
      }
    });

    // Update step indicators
    document.querySelectorAll('.checkout-step').forEach(function (el, i) {
      el.classList.remove('active', 'completed');
      if (i + 1 === step) el.classList.add('active');
      if (i + 1 < step) el.classList.add('completed');
    });

    document.querySelectorAll('.step-line').forEach(function (el, i) {
      el.classList.toggle('active', i + 1 < step);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function setupEvents() {
    document.addEventListener('click', function (e) {
      // Remove item
      var removeBtn = e.target.closest('.cart-item__remove');
      if (removeBtn) {
        var id = parseInt(removeBtn.dataset.id);
        var cart = getCart().filter(function (item) { return item.id !== id; });
        saveCart(cart);
        renderCart();
        return;
      }

      // Quantity minus
      var minusBtn = e.target.closest('.qty-cart-minus');
      if (minusBtn) {
        var id = parseInt(minusBtn.dataset.id);
        var cart = getCart();
        var item = cart.find(function (i) { return i.id === id; });
        if (item && item.qty > 1) {
          item.qty--;
          saveCart(cart);
          renderCart();
        }
        return;
      }

      // Quantity plus
      var plusBtn = e.target.closest('.qty-cart-plus');
      if (plusBtn) {
        var id = parseInt(plusBtn.dataset.id);
        var cart = getCart();
        var item = cart.find(function (i) { return i.id === id; });
        if (item && item.qty < 10) {
          item.qty++;
          saveCart(cart);
          renderCart();
        }
        return;
      }

      // Proceed to checkout
      if (e.target.id === 'proceedCheckout' || e.target.closest('#proceedCheckout')) {
        goToStep(2);
        return;
      }

      // Back to cart
      if (e.target.id === 'backToCart' || e.target.closest('#backToCart')) {
        goToStep(1);
        return;
      }

      // Confirm order
      if (e.target.id === 'confirmOrder' || e.target.closest('#confirmOrder')) {
        renderConfirmation();
        goToStep(3);
        return;
      }

      // Payment option selection
      var paymentOption = e.target.closest('.payment-option');
      if (paymentOption) {
        document.querySelectorAll('.payment-option').forEach(function (opt) {
          opt.classList.remove('selected');
        });
        paymentOption.classList.add('selected');
        var radio = paymentOption.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      }
    });
  }

  function renderConfirmation() {
    var cart = getCart();
    var confirmItems = document.getElementById('confirmationItems');
    if (!confirmItems) return;

    var subtotal = 0;
    var html = '';
    cart.forEach(function (item) {
      var product = getProductById(item.id);
      if (!product) return;
      var lineTotal = product.price * item.qty;
      subtotal += lineTotal;
      html += '<div class="confirmation-item"><span>' + product.name + ' x' + item.qty + '</span><span>' + formatPrice(lineTotal) + '</span></div>';
    });

    var shipping = subtotal >= 150 ? 0 : 7;
    var total = subtotal + shipping;
    html += '<div class="confirmation-item"><span>Total</span><span>' + formatPrice(total) + '</span></div>';

    confirmItems.innerHTML = html;

    // Clear cart
    localStorage.removeItem('daritroc_cart');
    updateCartBadge();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
