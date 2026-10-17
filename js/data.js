// ===== EDIT DATA DI SINI =====
const CFG={wa:"6280000000000",admin:["admin@sendja.test"],social:{Instagram:"",TikTok:"",Facebook:""}};
// Koordinat = perkiraan awal. VERIFIKASI di OpenStreetMap lalu perbaiki. Foto: taruh di /img lalu isi "img".
const DEST=[
{id:"alun-alun",n:"Alun-Alun Bangkalan",k:"Ruang Publik",ll:[-7.0449,112.7356],img:"",d:"Pusat kota Bangkalan dan titik awal perjalanan.",h:"[ISI sejarah terverifikasi]",a:"Jalan santai, kuliner sore, foto kota",t:"Jaga kebersihan, buang sampah pada tempatnya.",u:"Pedagang kuliner sekitar alun-alun"},
{id:"museum",n:"Museum Cakraningrat",k:"Sejarah",ll:[-7.0441,112.7342],img:"",d:"Museum yang menyimpan jejak sejarah dan budaya Bangkalan.",h:"[ISI sejarah terverifikasi]",a:"Melihat koleksi, belajar sejarah",t:"Ikuti aturan museum; tanya pemandu sebelum memotret koleksi.",u:"-"},
{id:"pasar",n:"Pasar Ki Lemah Duwur",k:"Pasar & UMKM",ll:[-7.0880,112.8030],img:"",d:"Pasar tempat berjumpa produk dan pelaku usaha lokal.",h:"[ISI sejarah terverifikasi]",a:"Belanja produk lokal, mencicipi jajanan",t:"Tawar dengan sopan, bawa tas belanja sendiri.",u:"Pedagang pasar"},
{id:"bukit-kapur",n:"Bukit Kapur Arosbaya",k:"Alam",ll:[-6.9800,112.8150],img:"",d:"Bentang alam batu kapur khas Arosbaya.",h:"[ISI sejarah terverifikasi]",a:"Menikmati lanskap, fotografi",t:"Jangan meninggalkan sampah, jangan merusak batuan, hati-hati di medan licin.",u:"-"},
{id:"batik",n:"Sentra Batik Gentongan Tanjung Bumi",k:"Budaya & UMKM",ll:[-6.9060,112.8280],img:"",d:"Sentra pembuatan batik tulis Gentongan.",h:"[ISI sejarah terverifikasi]",a:"Melihat proses membatik, membeli batik",t:"Hargai pengrajin; minta izin sebelum memotret proses kerja.",u:"Pengrajin batik Tanjung Bumi"},
{id:"nusa-indah",n:"Pusat Oleh-Oleh Nusa Indah",k:"Oleh-Oleh",ll:[-7.0390,112.7430],img:"",d:"Pusat oleh-oleh khas Madura.",h:"[ISI sejarah terverifikasi]",a:"Belanja oleh-oleh",t:"Prioritaskan produk UMKM lokal.",u:"Produk UMKM Madura"}
];
// Harga & kuota = CONTOH, ubah sesuai kenyataan
const PKG=[{id:"p1",n:"Jelajah Madura 1 Hari",dur:"1 hari (± 8 jam)",price:150000,cap:12,inc:["Angkot lokal","Pemandu","Air minum","Eco-Points"],cancel:"Pembatalan maks. H-3 (contoh)"}];
const RW=[{c:25,n:"Diskon Rp10.000",t:"v",x:"Voucher untuk trip berikutnya"},{c:50,n:"Diskon Rp15.000",t:"v",x:"Voucher untuk trip berikutnya"},{c:75,n:"Merchandise: botol minum + gantungan kunci",t:"m",x:"Diklaim & dikonfirmasi admin"},{c:100,n:"Kupon Undian Free Trip",t:"u",x:"Kupon undian, BUKAN trip gratis otomatis. Mekanisme, periode & kuota diumumkan admin."}];
