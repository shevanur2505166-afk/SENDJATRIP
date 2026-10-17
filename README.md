# SENDJA TRIP — Jelajah Madura (prototipe)

Website statis (HTML/CSS/JS + Leaflet). Jalankan: buka folder di VS Code → Live Server pada `index.html`.
Deploy: upload ke GitHub → aktifkan GitHub Pages.

## Edit cepat
- `js/data.js`: destinasi, koordinat, paket/harga, reward, WhatsApp, link sosmed, email admin.
- Foto: taruh di `img/` (hero: `img/hero.jpg`), isi field `img` tiap destinasi.
- Sejarah `[ISI sejarah terverifikasi]` wajib diganti dengan sumber kredibel.

## Penting (jujur soal batasan)
- Data (akun, booking, foto, koin) disimpan di **localStorage browser** = DEMO. Belum aman untuk produksi.
- Role admin & saldo koin masih dicek di browser. Untuk produksi pindahkan ke backend (mis. Supabase: Auth, Storage, RLS, tabel sesuai prompt, fungsi server untuk koin/reward).
- Belum ada: lupa/reset password, verifikasi email, editor admin untuk destinasi/paket, undian, bank sampah & distribusi dana, Framer Motion.
- Rute jalan memakai server demo OSRM publik (tidak untuk trafik besar).
- Koordinat = perkiraan, verifikasi dulu. Harga/kuota = contoh.
