// ============================
// CHECKOUT LOGIC
// ============================

const ONGKIR = {
  reguler: 15000,
  express: 30000,
  sameday: 50000
};

function getSelectedOngkir() {
  const selected = document.querySelector('input[name="pengiriman"]:checked');
  return selected ? ONGKIR[selected.value] : 15000;
}

function hitungTotal() {
  const cart = getCart();
  const subtotal = cart.reduce((s, i) => s + i.harga * i.qty, 0);
  const ongkir = getSelectedOngkir();
  const total = subtotal + ongkir;

  const subEl = document.getElementById('subtotalDisplay');
  const ongEl = document.getElementById('ongkirDisplay');
  const totEl = document.getElementById('totalDisplay');

  if (subEl) subEl.textContent = formatRupiah(subtotal);
  if (ongEl) ongEl.textContent = formatRupiah(ongkir);
  if (totEl) totEl.textContent = formatRupiah(total);
}

function renderOrderItems() {
  const cart = getCart();
  const container = document.getElementById('orderItems');
  const layout = document.getElementById('checkoutLayout');
  const emptyMsg = document.getElementById('emptyCartMsg');

  if (!container) return;

  if (cart.length === 0) {
    if (layout) layout.style.display = 'none';
    if (emptyMsg) emptyMsg.style.display = 'block';
    return;
  }

  if (layout) layout.style.display = 'grid';
  if (emptyMsg) emptyMsg.style.display = 'none';

  container.innerHTML = cart.map(item => `
    <div class="order-item">
      <div class="oi-icon">${item.emoji}</div>
      <div class="oi-info">
        <div class="oi-name">${item.nama}</div>
        <div class="oi-qty">x${item.qty}</div>
      </div>
      <div class="oi-harga">${formatRupiah(item.harga * item.qty)}</div>
    </div>
  `).join('');

  hitungTotal();
}

function validasiForm() {
  const fields = [
    { id: 'nama', label: 'Nama Lengkap' },
    { id: 'telepon', label: 'No. HP' },
    { id: 'alamat', label: 'Alamat' },
    { id: 'kota', label: 'Kota' },
    { id: 'kodepos', label: 'Kode Pos' },
  ];

  for (const f of fields) {
    const el = document.getElementById(f.id);
    if (!el || !el.value.trim()) {
      showToast(`⚠️ ${f.label} wajib diisi!`);
      el?.focus();
      return false;
    }
  }
  return true;
}

function prosesOrder() {
  const cart = getCart();
  if (cart.length === 0) {
    showToast('⚠️ Keranjang masih kosong!');
    return;
  }

  if (!validasiForm()) return;

  // Generate order number
  const orderNum = 'WD' + Date.now().toString().slice(-8).toUpperCase();
  const numEl = document.getElementById('orderNumber');
  if (numEl) numEl.textContent = `#${orderNum}`;

  // Show success modal
  const modal = document.getElementById('successModal');
  if (modal) modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function clearCartAfterOrder() {
  localStorage.removeItem('wdCart');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  renderOrderItems();

  // Listen for shipping changes
  document.querySelectorAll('input[name="pengiriman"]').forEach(el => {
    el.addEventListener('change', hitungTotal);
  });
});
