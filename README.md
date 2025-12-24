# Stockbit React Dev - Movie Explorer

**Nama Pengembang:** Syahreza Shaputra

Proyek ini adalah aplikasi penjelajah film sederhana yang dibangun menggunakan **ReactJS** dan **Redux Toolkit**, mengonsumsi data dari **OMDb API**. Proyek ini dirancang dengan arsitektur yang modular, bersih, dan mendukung skalabilitas sesuai dengan standar industri.

---

## 🚀 Fitur Utama

- **Pencarian Film dengan Autocomplete**: Menggunakan teknik _debouncing_ (800ms) untuk meminimalisir panggilan API saat pengguna mengetik.
- **Infinite Scroll Tanpa Library**: Implementasi kustom menggunakan _scroll event listener_ untuk performa yang ringan dan efisien.
- **Popup Modal Poster**: Klik pada gambar poster untuk melihat versi ukuran penuh dalam jendela popup.
- **Single Movie Detail Page**: Navigasi ke halaman detail untuk informasi mendalam (Plot, Cast, rilis, dll).
- **Manajemen State Global**: State aplikasi dikelola secara terpusat menggunakan Redux Toolkit agar konsisten.
- **Unit Testing**: Pengujian komponen krusial menggunakan Jest dan React Testing Library.

---

## 🛠️ Tech Stack

- **Framework**: ReactJS (Functional Components & Hooks)
- **State Management**: Redux Toolkit & React-Redux
- **Routing**: React Router DOM v6
- **HTTP Client**: Axios
- **Testing**: Jest & React Testing Library

---

## 📁 Struktur Proyek (Modular)

Aplikasi ini menggunakan pemisahan lapisan logika dan UI yang jelas:

```text
src/
├── app/          # Konfigurasi Store Redux
├── components/   # Komponen UI (MovieCard, Navbar, Modal)
├── features/     # Logika Redux (Slice, Thunk untuk fetching)
├── hooks/        # Custom Hooks (Logic Infinite Scroll)
├── pages/        # Halaman Utama & Detail (View Layer)
├── App.js        # Konfigurasi Routing
└── index.js      # Entry Point Aplikasi

⚙️ Cara Menjalankan Secara Lokal

1. Prasyarat
Pastikan Anda memiliki Node.js terinstal (Disarankan v18 ke atas).

2. Instalasi
Clone repositori atau unduh folder proyek, lalu buka terminal di folder tersebut:

Bash

# Instal semua dependensi
npm install
3. Menjalankan Aplikasi
Bash

# Menjalankan di localhost:3000
npm start
4. Menjalankan Unit Test
Bash

# Menjalankan pengujian komponen
npm test

🔑 Detail API
Source: OMDb API

API Key: faf7e5bb

Contoh Call: http://www.omdbapi.com?apikey=faf7e5bb&s=Batman&page=1

© 2025 Syahreza Shaputra | Stockbit React Dev Recruitment Project
```
