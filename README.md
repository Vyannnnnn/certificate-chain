# VeriChain Academic – Certificate Chain

VeriChain Academic adalah platform verifikasi sertifikat akademik berbasis blockchain yang membantu institusi pendidikan menerbitkan, menyimpan, dan memverifikasi kredensial secara cepat, aman, dan anti-manipulasi.

## Fitur Utama

- **Manajemen Mahasiswa**: tambah dan kelola data mahasiswa.
- **Penerbitan Sertifikat**: generate nomor sertifikat unik dan simpan ke database.
- **Integrasi Blockchain**: pencatatan penerbitan sertifikat ke smart contract (`txHash` tersimpan di database).
- **Verifikasi Sertifikat**: validasi sertifikat melalui endpoint API dan halaman verifikasi.
- **Autentikasi Admin**: login berbasis JWT (HTTP-only cookie) untuk area dashboard.

## Tech Stack

- **Frontend & Backend**: Next.js 16 (App Router), React 19, TypeScript
- **Database**: PostgreSQL + Prisma
- **Blockchain**: Solidity + Hardhat + Ethers.js
- **UI**: Tailwind CSS, shadcn/ui

## Struktur Proyek

```text
.
├── src/                 # Aplikasi Next.js (UI, API route, auth, business logic)
├── prisma/              # Schema, migration, seed database
├── blockchain/          # Smart contract, konfigurasi Hardhat, script deploy
└── public/              # Aset statis
```

## Persiapan Environment

Buat file `.env` di root project:

```env
DATABASE_URL="<your-postgresql-connection-string>"
JWT_SECRET="replace-with-strong-secret"
NEXT_PUBLIC_API_URL="http://localhost:3000"

RPC_URL="https://rpc-xxxxxxx"
PRIVATE_KEY="your-wallet-private-key"
Contract_Address="deployed-contract-address"
```

> `Contract_Address` harus diisi alamat kontrak `CertificateRegistry` yang sudah dideploy.

## Instalasi & Menjalankan Aplikasi

```bash
npm install
npx prisma migrate dev
npm run seed
npm run dev
```

Akses aplikasi di `http://localhost:3000`.

## Akun Admin Default (Seed)

Setelah `npm run seed`, akun berikut tersedia:

- **Email**: `admin@kampus.ac.id`
- **Password**: `password123`

## Menjalankan Smart Contract (Opsional)

Masuk ke folder blockchain:

```bash
cd blockchain
npm install
npx hardhat run scripts/deploy.ts
```

Simpan alamat kontrak hasil deploy ke variabel `.env`:

- `Contract_Address` (root project)

## Endpoint API Penting

- `POST /api/auth/login` – login admin
- `POST /api/auth/logout` – logout admin
- `GET /api/students` – list mahasiswa
- `POST /api/students` – tambah mahasiswa
- `GET /api/certificates` – list sertifikat
- `POST /api/certificates` – terbitkan sertifikat + catat ke blockchain
- `GET /api/verify/{certificateNumber}` – verifikasi sertifikat

## Nilai Bisnis

VeriChain Academic dirancang untuk institusi pendidikan, HR, dan pihak verifikator agar proses validasi dokumen akademik menjadi:

- **Lebih cepat** (real-time verification)
- **Lebih terpercaya** (jejak audit on-chain)
- **Lebih efisien** (otomasi proses administrasi)
