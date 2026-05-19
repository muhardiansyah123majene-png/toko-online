// ============================
// DATA PRODUK
// ============================

const PRODUK = [
  {
    id: 1,
    nama: "Kaos Oversize Premium",
    kategori: "fashion",
    harga: 129000,
    hargaAsli: 185000,
    emoji: "👕",
    rating: 4.8,
    ulasan: 234,
    badge: "Bestseller",
    deskripsi: "Kaos oversize bahan cotton combed 30s, adem dan nyaman dipakai seharian."
  },
  {
    id: 2,
    nama: "Sneakers Urban Style",
    kategori: "fashion",
    harga: 299000,
    hargaAsli: 420000,
    emoji: "👟",
    rating: 4.9,
    ulasan: 512,
    badge: "Terlaris",
    deskripsi: "Sepatu sneakers casual dengan sol karet anti-slip, cocok untuk aktivitas sehari-hari."
  },
  {
    id: 3,
    nama: "Topi Bucket Hat",
    kategori: "fashion",
    harga: 75000,
    hargaAsli: null,
    emoji: "🪖",
    rating: 4.6,
    ulasan: 89,
    badge: null,
    deskripsi: "Topi bucket hat trendy dari bahan denim, cocok untuk berbagai outfit."
  },
  {
    id: 4,
    nama: "Earphone Bluetooth Pro",
    kategori: "elektronik",
    harga: 189000,
    hargaAsli: 350000,
    emoji: "🎧",
    rating: 4.7,
    ulasan: 678,
    badge: "Diskon 46%",
    deskripsi: "Earphone wireless dengan noise cancelling aktif, baterai tahan hingga 24 jam."
  },
  {
    id: 5,
    nama: "Power Bank 20000mAh",
    kategori: "elektronik",
    harga: 225000,
    hargaAsli: 310000,
    emoji: "🔋",
    rating: 4.8,
    ulasan: 445,
    badge: null,
    deskripsi: "Power bank kapasitas besar dengan fast charging 22.5W, 2 port USB."
  },
  {
    id: 6,
    nama: "Stand HP Adjustable",
    kategori: "elektronik",
    harga: 45000,
    hargaAsli: null,
    emoji: "📱",
    rating: 4.5,
    ulasan: 156,
    badge: null,
    deskripsi: "Stand handphone yang bisa disesuaikan tingginya, cocok untuk meja kerja."
  },
  {
    id: 7,
    nama: "Mie Ayam Spesial Kaldu",
    kategori: "makanan",
    harga: 35000,
    hargaAsli: null,
    emoji: "🍜",
    rating: 4.9,
    ulasan: 320,
    badge: "Favorit",
    deskripsi: "Mie ayam dengan kaldu ayam kampung asli, topping jamur dan pangsit goreng."
  },
  {
    id: 8,
    nama: "Kopi Toraja Bubuk 250g",
    kategori: "makanan",
    harga: 65000,
    hargaAsli: 85000,
    emoji: "☕",
    rating: 4.8,
    ulasan: 201,
    badge: "Premium",
    deskripsi: "Kopi arabika Toraja single origin, sangrai medium, aroma khas buah-buahan."
  },
  {
    id: 9,
    nama: "Keripik Pisang Cokelat",
    kategori: "makanan",
    harga: 25000,
    hargaAsli: null,
    emoji: "🍌",
    rating: 4.7,
    ulasan: 445,
    badge: null,
    deskripsi: "Keripik pisang renyah dibalut cokelat premium, camilan favorit keluarga."
  },
  {
    id: 10,
    nama: "Bola Futsal Pro",
    kategori: "olahraga",
    harga: 145000,
    hargaAsli: 200000,
    emoji: "⚽",
    rating: 4.7,
    ulasan: 88,
    badge: null,
    deskripsi: "Bola futsal ukuran 4 dengan permukaan bertekstur, daya pantul optimal."
  },
  {
    id: 11,
    nama: "Resistance Band Set",
    kategori: "olahraga",
    harga: 89000,
    hargaAsli: 130000,
    emoji: "🏋️",
    rating: 4.8,
    ulasan: 267,
    badge: "Bundle",
    deskripsi: "Set 5 resistance band dengan tingkat resistensi berbeda, cocok untuk gym di rumah."
  },
  {
    id: 12,
    nama: "Botol Minum Tumbler 750ml",
    kategori: "olahraga",
    harga: 115000,
    hargaAsli: null,
    emoji: "🥤",
    rating: 4.6,
    ulasan: 189,
    badge: null,
    deskripsi: "Tumbler stainless steel double wall, menjaga minuman dingin 24 jam panas 12 jam."
  },
  {
    id: 13,
    nama: "Serum Vitamin C 30ml",
    kategori: "kecantikan",
    harga: 175000,
    hargaAsli: 250000,
    emoji: "✨",
    rating: 4.9,
    ulasan: 892,
    badge: "Terlaris",
    deskripsi: "Serum vitamin C 20% dengan hyaluronic acid, mencerahkan dan melembabkan kulit."
  },
  {
    id: 14,
    nama: "Lip Balm SPF 30",
    kategori: "kecantikan",
    harga: 45000,
    hargaAsli: null,
    emoji: "💄",
    rating: 4.7,
    ulasan: 344,
    badge: null,
    deskripsi: "Lip balm pelindung bibir dengan SPF 30, formula aloe vera dan vitamin E."
  },
  {
    id: 15,
    nama: "Masker Wajah Clay 100g",
    kategori: "kecantikan",
    harga: 85000,
    hargaAsli: 120000,
    emoji: "🧴",
    rating: 4.6,
    ulasan: 212,
    badge: "Diskon",
    deskripsi: "Masker clay kaolin dan charcoal untuk membersihkan pori dan mengontrol minyak."
  },
  {
    id: 16,
    nama: "Lampu LED Meja",
    kategori: "rumah",
    harga: 95000,
    hargaAsli: 140000,
    emoji: "💡",
    rating: 4.7,
    ulasan: 156,
    badge: null,
    deskripsi: "Lampu meja LED dengan 3 mode cahaya, bisa dimmer, port USB untuk charging."
  },
  {
    id: 17,
    nama: "Rak Buku Minimalis",
    kategori: "rumah",
    harga: 250000,
    hargaAsli: 320000,
    emoji: "📚",
    rating: 4.8,
    ulasan: 98,
    badge: null,
    deskripsi: "Rak buku 3 tier dari kayu MDF, desain minimalis, mudah dirakit."
  },
  {
    id: 18,
    nama: "Aromaterapi Diffuser",
    kategori: "rumah",
    harga: 135000,
    hargaAsli: 180000,
    emoji: "🌿",
    rating: 4.9,
    ulasan: 445,
    badge: "Recommended",
    deskripsi: "Diffuser aromaterapi ultrasonic 300ml, dengan lampu LED 7 warna."
  }
];

function formatRupiah(angka) {
  return 'Rp ' + angka.toLocaleString('id-ID');
}

function renderBintang(rating) {
  const bulat = Math.floor(rating);
  let bintang = '';
  for (let i = 0; i < 5; i++) {
    bintang += i < bulat ? '★' : '☆';
  }
  return bintang;
}
