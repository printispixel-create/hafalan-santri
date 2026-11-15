=== APLIKASI HAFALAN SANTRI (v5 - FINAL, OPSI C) ===

FILE:
- index.html    → Dashboard (kelola siswa, leaderboard, sync, reset)
- control.html  → Kontrol setoran per siswa per juz
- data.js       → Data surah, logika storage, sync
- README.txt    → File ini

=== PERUBAHAN v5 (OPSI C) ===

1. Data siswa contoh (35 siswa) HANYA dimuat SEKALI per perangkat.
   - Perangkat baru → otomatis punya 35 siswa contoh.
   - Setelah itu, flag "hafalan_seeded_v1" disimpan.
   - Jika user hapus semua siswa → daftar tetap kosong (tidak muncul lagi).
   - Jika user clear site data / uninstall browser → default muncul lagi (localStorage bersih).

2. Ada tombol "Reset Daftar Siswa ke Data Contoh" di tab Reset.
   - Berguna untuk mengembalikan daftar bawaan kapan saja.
   - Siswa lama yang tidak ada di contoh → dihapus + hafalan dibersihkan.
   - Siswa contoh yang belum ada → ditambahkan.
   - Siswa yang sama (nama cocok) → dipertahankan beserta hafalannya.

3. Ada tombol "Kosongkan Semua Siswa" di tab Reset.
   - Menghapus semua siswa + hafalannya.
   - Daftar siswa menjadi kosong (tidak auto-isi lagi).

4. Data hafalan (centang Setor/Takrir/Tasmi') SELALU mulai kosong.
   Tidak ada default hafalan.

=== CARA PAKAI DI ANDROID ===

1. Kirim semua file ke HP (WhatsApp/Drive/USB)
2. Letakkan di folder yang sama
3. Buka dengan salah satu cara:
   a) Install "Simple HTTP Server" dari Play Store → pilih folder → Start → buka http://localhost:8080
   b) Atau buka index.html langsung via Chrome (file://) — batasan: localStorage mungkin tidak permanen

=== SINKRONISASI MULTI-PERANGKAT (4+) ===

Skenario: 4 guru input di HP masing-masing, lalu data digabung.

Langkah:
1. Di setiap HP: buka tab "Sinkronisasi" → isi nama perangkat → Simpan
2. Masing-masing input data hafalan seperti biasa
3. Di tab "Sinkronisasi" → klik "Download File JSON" → simpan/kirim file
4. Kumpulkan keempat file (WhatsApp grup, Drive, dll)
5. Di setiap HP: buka tab "Sinkronisasi" → pilih file dari HP lain → Proses Import
6. Ulangi untuk semua file yang terkumpul (round-1)
7. ✅ ROUND-2 (PENTING): Setelah semua HP import, export ulang dari setiap HP,
   lalu import lagi ke semua HP. Ini memastikan semua perangkat benar-benar identik.
8. ✅ Selesai — semua HP punya data gabungan identik.

Aturan merge:
- Data terbaru (timestamp lebih tinggi) menang
- Data lokal yang tidak ada di file import TIDAK terhapus (kecuali ada tombstone lebih baru)
- Siswa baru dari file import ditambahkan otomatis
- Siswa yang dihapus di HP lain (dengan timestamp lebih baru) ikut terhapus
- Reset data ikut tersinkron (melalui record tombstones)
- Reset daftar siswa ikut tersinkron (melalui tombstone siswa)
- Import file yang sama 2x aman (idempotent)
- Konflik (tombstone vs resurrection) ditampilkan di panel import

=== MANAJEMEN SISWA ===

- Tambah: tombol "+ Tambah Siswa" di tiap kelas
- Edit nama: tombol ✏️ di tabel (data hafalan ikut pindah otomatis)
- Hapus: tombol 🗑️ di tabel (data hafalan ikut terhapus, tersinkron via tombstone)

=== RESET (v5) ===

Tab "Reset Data" memiliki DUA kategori:

A. RESET HAFALAN (Centang):
   - Reset per Juz (kelas + juz tertentu)
   - Reset per Kelas (semua juz)
   - Reset Semua Hafalan (semua kelas, semua juz)
   → Daftar siswa TIDAK berubah.
   → Tersinkron via record tombstones.

B. RESET DAFTAR SISWA:
   - Reset Daftar Siswa ke Data Contoh
     → Ganti daftar siswa dengan 35 siswa contoh.
     → Siswa lama yang tidak cocok → dihapus + hafalan dibersihkan.
     → Siswa contoh yang belum ada → ditambahkan.
     → Siswa yang cocok → dipertahankan beserta hafalannya.
   - Kosongkan Semua Siswa
     → Hapus semua siswa + hafalannya.
     → Daftar siswa menjadi kosong.
   → Tersinkron via tombstone siswa.

=== TASMI' & IKHTIBAR ===

Tasmi' & Ikhtibar dicentang 1x per Juz (bukan per surah).
Syarat: semua surah di juz tersebut harus sudah Setor & Takrir.
Jika ada Setor/Takrir yang dibatalkan, Tasmi' juz otomatis batal.

=== BACKUP ===

Lakukan export JSON secara berkala sebagai backup.
Simpan file di Drive/cloud agar bisa restore kapan saja.

=== TROUBLESHOOTING ===

- Import gagal? Pastikan file diexport dari aplikasi ini (ada field "app": "hafalan-santri").
- Data tidak muncul di perangkat lain? Lakukan round-2 sync (export ulang + import lagi).
- Konflik muncul? Baca panel kuning di tab Sinkronisasi — biasanya aman (sistem memilih yang terbaru).
- Data hilang setelah reset? Reset bersifat permanen. Restore dari backup JSON terakhir.
- Daftar siswa kosong setelah instalasi baru? Kemungkinan flag "hafalan_seeded_v1" sudah ada
  (mis. dari instalasi sebelumnya di browser yang sama). Gunakan "Reset ke Data Contoh" di tab Reset.