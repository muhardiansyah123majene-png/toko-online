// ============================
// CART LOGIC
// ============================

function getCart() {
  try {
    return JSON.parse(localStorage.getItem('wdCart') || '[]');
  } catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('wdCart', JSON.stringify(cart));
}

function tambahKeKeranjang(id) {
  const produk = PRODUK.find(p => p.id === id);
  if (!produk) return;

  const cart = getCart();
  const idx = cart.findIndex(i => i.id === id);

  if (idx >= 0) {
    cart[idx].qty += 1;
  } else {
    cart.push({ id: produk.id, nama: produk.nama, harga: produk.harga, emoji: produk.emoji, qty: 1 });
  }

  saveCart(cart);
  renderCart();
  showToast(`✅ ${produk.nama} ditambahkan!`);
}

function ubahQty(id, delta) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx < 0) return;

  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) {
    cart.splice(idx, 1);
  }
  saveCart(cart);
  renderCart();
}

function hapusItem(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  renderCart();
}

function renderCart() {
  const cart = getCart();
  const total = cart.reduce((s, i) => s + i.harga * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  // Update count badges
  document.querySelectorAll('#cartCount').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'inline' : 'inline';
  });

  const itemsEl = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const totalEl = document.getElementById('cartTotal');

  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty">Keranjang masih kosong 🛒</div>';
    if (footerEl) footerEl.style.display = 'none';
    return;
  }

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="ci-icon">${item.emoji}</div>
      <div class="ci-info">
        <div class="ci-name">${item.nama}</div>
        <div class="ci-price">${formatRupiah(item.harga)}</div>
        <div class="ci-qty">
          <button onclick="ubahQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="ubahQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="ci-del" onclick="hapusItem(${item.id})">🗑</button>
    </div>
  `).join('');

  if (footerEl) footerEl.style.display = 'block';
  if (totalEl) totalEl.textContent = formatRupiah(total);
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// Init on load
document.addEventListener('DOMContentLoaded', renderCart);
