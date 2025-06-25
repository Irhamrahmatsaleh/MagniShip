```
# ShipBigger

**ShipBigger** adalah sistem manajemen import dan export barang terintegrasi untuk perusahaan distribusi modern.

## Fitur Utama
- Manajemen stok barang masuk (import) dan keluar (export)
- Modul supplier dan customer
- Pencatatan transaksi otomatis (import/export)
- Dashboard admin untuk monitoring dan manajemen data
- Siap dikembangkan untuk portal customer/supplier
- API berbasis Spring Boot, struktur clean dan scalable
- Dokumentasi API otomatis dengan Swagger UI

## Struktur Project
- `/backend` : Source code aplikasi backend (Spring Boot & PostgreSQL)
- `/frontend` : Source code aplikasi frontend (siap dikembangkan)
- `/vscode` : Pengaturan editor dan ekstensi (opsional)

## Cara Deploy Backend (pengantar)
1. Pastikan Java dan PostgreSQL sudah terinstall.
2. Salin file `application.properties.example` → `application.properties` dan isi sesuai konfigurasi lokal.
3. Jalankan di terminal:
```

./mvnw spring-boot:run

```
4. Akses dokumentasi API di [http://localhost:8080/swagger-ui.html](http://localhost:8080/swagger-ui.html)

## Catatan
- Jangan upload file konfigurasi sensitif ke repo publik.
- Gunakan repo private untuk keamanan data perusahaan.

---

**ShipBigger** — Solusi distribusi barang dan logistik modern untuk pertumbuhan bisnismu.
```
