// ============================
// APP LOGIC
// ============================

let maxHarga = 2000000;

function buatKartuProduk(produk, delay = 0) {
  const diskon = produk.hargaAsli
    ? Math.round((1 - produk.harga / produk.hargaAsli) * 100)
    : null;

  return `
    <div class="produk-card" style="animation-delay: ${delay}s">
      <div class="produk-img">
        ${produk.badge ? `<div class="produk-badge">${produk.badge}</div>` : ''}
        <span style="font-size:3.5rem">${produk.emoji}</span>
      </div>
      <div class="produk-info">
        <div class="produk-kategori">${produk.kategori}</div>
        <div class="produk-nama">${produk.nama}</div>
        <div class="produk-rating">
          <span>${renderBintang(produk.rating)}</span>
          ${produk.rating} (${produk.ulasan} ulasan)
        </div>
        <div class="produk-bawah">
          <div>
            ${produk.hargaAsli ? `<span class="produk-harga-coret">${formatRupiah(produk.hargaAsli)}</span>` : ''}
            <div class="produk-harga">${formatRupiah(produk.harga)}</div>
          </div>
          <button class="btn-tambah" onclick="tambahKeKeranjang(${produk.id})" title="Tambah ke keranjang">+</button>
        </div>
      </div>
    </div>
  `;
}

// Render di homepage (6 produk featured)
function renderHomeProducts() {
  const container = document.getElementById('produkHome');
  if (!container) return;
  const featured = PRODUK.filter(p => p.badge).slice(0, 8);
  container.innerHTML = featured.map((p, i) => buatKartuProduk(p, i * 0.07)).join('');
}

// Render + filter di halaman produk
function filterProduk() {
  const container = document.getElementById('produkList');
  if (!container) return;

  const search = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const sortBy = document.getElementById('sortBy')?.value || 'default';
  const kategoriChecked = Array.from(document.querySelectorAll('#filterKategori input:checked')).map(el => el.value);
  const maxH = parseInt(document.getElementById('priceRange')?.value || 2000000);

  let hasil = PRODUK.filter(p => {
    const cokKat = kategoriChecked.includes('semua') || kategoriChecked.includes(p.kategori);
    const cokHarga = p.harga <= maxH;
    const cokSearch = p.nama.toLowerCase().includes(search) || p.kategori.toLowerCase().includes(search);
    return cokKat && cokHarga && cokSearch;
  });

  // Sorting
  if (sortBy === 'harga-asc') hasil.sort((a, b) => a.harga - b.harga);
  else if (sortBy === 'harga-desc') hasil.sort((a, b) => b.harga - a.harga);
  else if (sortBy === 'nama-asc') hasil.sort((a, b) => a.nama.localeCompare(b.nama));

  const countEl = document.getElementById('produkCount');
  const emptyEl = document.getElementById('emptyState');

  if (countEl) countEl.textContent = `${hasil.length} produk ditemukan`;

  if (hasil.length === 0) {
    container.innerHTML = '';
    if (emptyEl) emptyEl.style.display = 'block';
  } else {
    if (emptyEl) emptyEl.style.display = 'none';
    container.innerHTML = hasil.map((p, i) => buatKartuProduk(p, i * 0.05)).join('');
  }
}

function updatePrice(val) {
  maxHarga = parseInt(val);
  const display = document.getElementById('priceDisplay');
  if (display) display.textContent = formatRupiah(maxHarga);
  filterProduk();
}

function resetFilter() {
  document.querySelectorAll('#filterKategori input').forEach((el, i) => {
    el.checked = i === 0; // only "semua"
  });
  const pr = document.getElementById('priceRange');
  if (pr) { pr.value = 2000000; updatePrice(2000000); }
  const sb = document.getElementById('sortBy');
  if (sb) sb.value = 'default';
  const si = document.getElementById('searchInput');
  if (si) si.value = '';
  filterProduk();
}

// Init URL params for category filter
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const kat = params.get('kat');
  if (kat) {
    document.querySelectorAll('#filterKategori input').forEach(el => {
      el.checked = el.value === kat;
    });
    filterProduk();
  }
});
